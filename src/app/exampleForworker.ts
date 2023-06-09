/// <reference lib="webworker" />

// BASE.worker.ts
// addEventListener('message', ({ data }) => {
//   const response = `worker response to ${data}`;
//   postMessage(response);
// });
var FileAPI = require('file-api');

interface operation {
  operation: 'save' | 'read';
  data?: any;
}

interface fileResponse {
  file: File;
}

interface errorResponse {
  success: false;
  message: string;
}

interface successResponse<T> {
  success: true;
  data?: T;
  message?: string;
}

type response<T> = errorResponse | successResponse<T>;

// Escuchar mensajes del hilo principal
addEventListener('message', async (event) => {
  const { operation, data } = event.data as operation;

  try {
    let result: response<any>;

    switch (operation) {
      case 'save':
        result = await saveData(data);
        break;
      case 'read':
        result = await readData();
        break;
      default:
        result = { success: false, message: 'Operación no válida' };
        break;
    }

    postMessage(result);
  } catch (error) {
    const errorMessage = `Error en la operación: ${error}`;
    postMessage({ success: false, message: errorMessage });
  }
});

async function saveData(data: any): Promise<response<void>> {
  const file = await getFile();

  const existingData = JSON.parse(await readFileContents(file));

  existingData.push(data);

  await writeFileContents(file, JSON.stringify(existingData));

  return { success: true, message: 'Datos guardados exitosamente' };
}

async function readData(): Promise<response<any[]>> {
  const file = await getFile();
  const fileContents = await readFileContents(file);
  const data = JSON.parse(fileContents);

  return { success: true, data };
}

function getFile(): Promise<File> {
  return new Promise((resolve, reject) => {
    const filePath = './database/data.json';

    // Leer el archivo JSON
    fetch(filePath)
      .then((response) => response.blob())
      .then((blob) => {
        const file = new File([blob], 'data.json');
        resolve(file);
      })
      .catch((error) => {
        reject(`Error al obtener el archivo: ${error}`);
      });
  });
}

function readFileContents(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      if (event.target && event.target.result) {
        const result = event.target.result as string;
        resolve(result);
      } else {
        reject('Error al leer el archivo');
      }
    };

    reader.onerror = (event) => {
      reject(`Error al leer el archivo: ${event.target?.error}`);
    };

    reader.readAsText(file);
  });
}

function writeFileContents(file: File, contents: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const writer = new FileWriter();

    writer.onwriteend = () => {
      resolve();
    };

    writer.onerror = (event: Event) => {
      reject(`Error al escribir en el archivo: ${event.target?.error}`);
    };

    writer.write(contents);
    writer.seek(0);
  });
}
