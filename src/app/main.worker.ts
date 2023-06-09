/// <reference lib="webworker" />

// BASE.worker.ts
addEventListener('message', ({ data }) => {
  const { operation, body } = data;
  try {
    let result;

    switch (operation) {
      case 'save':
        result = { success: true, message: 'Guardado' };
        break;
      case 'read':
        result = { success: true, message: 'Datos Obtenidos' };
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
