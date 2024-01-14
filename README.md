
# Documento de diseño de alto nivel de sistema "Flujo de servicios dinamico"

---

## Objetivo

Este documento de diseño plantea una solución propuesta para implementar un sistema en backend y frontend que busca resolver con las necesidades detectadas sobre la visualización, mantenimiento, diseño y planeación sobre los servicios actuales y venideros.

## Overview: Problema a resolver

Dentro de la organización se ha visualizado una gran cantidad de servicios, la cual en ocasiones los arquitectos grafican en un diagrama de arquitectura, sin embargo, este diagrama no es suficiente para visualizar la cantidad de servicios que se tienen, los servicios que se encuentran en desuso, los servicios que se encuentran en uso, los servicios antiguos que se pueden reutilizar para evitar desarrollos innecesarios, los servicios que se encuentran en desarrollo, los servicios que se encuentran en planeación, etc. Esto porque un diagrama de arquitectura no es dinámico, es decir, no se actualiza automáticamente, por lo que se tiene que actualizar manualmente, lo cual es un trabajo tedioso y que no se puede mantener actualizado. Por lo que se requiere una solución que permita visualizar los servicios actuales y venideros, que permita visualizar los servicios que se encuentran en desuso, que permita visualizar los servicios que se encuentran en uso, que permita visualizar los servicios que se encuentran en desarrollo, que permita visualizar los servicios que se encuentran en planeación, etc. Y que esta solución se mantenga actualizada de manera más sencilla y colaborativa.

* Visualizar los servicios actuales y venideros.
* Encontrar los servicios que se encuentran en un estado de "desuso".
* Encontrar los servicios que se encuentran en un estado de "uso".
* Aprender sobre los servicios actuales y venideros.
* Mantener actualizada la información de los servicios actuales y venideros.
* Separar los servicios por etiquetas o productos.
* Cada equipo tendra acceso a los servicios que le correspondan.
* Visualizar los servicios que se encuentran en desarrollo.
* Visualizar las caracteristicas de los servicios.
* Filtrar los servicios por caracteristicas, etiquetas y/o productos.
* Separar ambientes de pruebas, estadificación y producción.
* Crear modo de edición y modo de lectura.
* Dar permisos de edición y lectura a los usuarios correspondientes.
* Focusuar el modo de edición (esto con motivo de que el usuario no se equivoque).
* Pintar por niveles de profundidad de los servicios.
* Filtrar por entidades de negocio.

## Alcance(Scope)

tabla de alcance entre gratuito y pago.

| Caracteristica | Gratuito | Pago |
| -------------- | -------- | ---- |
| Gestion de productos |     ✔     |   ✔   |
| Visualización de niveles |     ✔     |   ✔   |
| Gestion de permisos |     ✖     |   ✔   |
| Gestion de entidades de negocio |     ✖     |   ✔   |
| Gestion de etiquetas |     ✖     |   ✔   |
| Gestion de ambientes |     ✖      |   ✔   |

## Casos de uso a soportar

La solución descrita en este documento unicamente soportara los siguientes casos de uso.

* Se podra visualizar segun permisos, filtros y los niveles los servicios actuales y venideros.
* Se podra editar segun permisos, filtros y los niveles los servicios actuales y venideros.
* Crear y editar cada servicio.
* Crear los modelos de cada servicio (trae unos por defecto).
  1. Colas.
  2. Topicos.
  3. Colecciones.
  4. Tablas.
  5. Unidades Fucnional con puntos de entrada (API REST, GRPC, JOB, BUS).
* Cada modelo tendra unas bases, como ambiente, ubicación infraestructura, logo img.
* Las entradas y las salidas de cada modelo podran tener una entidad vinculada.
* La vinculación entre servicios no deben hacerse de manera externa, sino que se debe hacer de manera interna por cada entrada y salida de cada modelo.
* Cada servicio tendra un estado de desarrollo, el cual puede ser:
  1. En desarrollo.
  2. En planeación.
  3. En desuso.
  4. En uso.
* Se debe poder visualizar las herramientas segun permisos.
* Se debe poder visualizar las caracteristicas base de cada servicio.
* Se podra ocultar o mostrar las caracteristicas adicionales de base de cada servicio.
* Se podra ocultar o mostrar las herramientas(edición o filtración).
* Cada tablero filtrado tendra un nombre dinamico.
* En los tableros se podra cambiar entre ambientes.
* En los tableros se podra cambiar si esta en modo de edición o modo de lectura.
* Los diseños de los tableros se podran guardar.
* Los diseños de los tableros tendran un historico.
* Los diseños de los tableros se podran compartir.
* Los diseños de los tableros se podran dividir en ramas para evitar el cambio de la master.
* Los diseños de los tableros se podran fusionar en la master.
* Los diseños de los tableros se podran comparar entre ramas.
* Los Tableros master solo de pueden modificar a traves de la fusion de ramas, con los permisos pertinentes.
* Los Tableros se podran visualizar y/o editar en cooperacion en tiempo real.

## Fuera de alcance

Los siguietnes casos de uso estan fuera de alcance de este documento de diseño.

* Editar o eliminar los modelos.

---

## Solución

**

### Diagrama de arquitectura

### Diagrama de secuencias "Publicación de Review"

### Diagrama de secuencias "Lectura de Review"

---

# Components and running

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Sandbox

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to http://localhost:4200. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
