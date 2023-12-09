# API RESTful con Node.js
Proyecto de demostración para clases de desarrollo de APIs utilizando Node.js, con implementación en contenedores de Docker.
## Tabla de Contenidos
- [API RESTful con Node.js](#api-restful-con-nodejs)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Requisitos de Instalación](#requisitos-de-instalación)
  - [Instrucciones de Instalación](#instrucciones-de-instalación)
  - [Documentación detallada](#documentación-detallada)
  - [Enlaces externos](#enlaces-externos)
## Requisitos de Instalación
Asegúrate de tener instalado y configurado Docker antes de comenzar.
* [Docker](https://www.docker.com/)
## Instrucciones de Instalación
1. Clonar el repositorio en el dispositivo local en que lo implementará.

   ```sh
   git clone https://github.com/francerz/node-restful.git
   ```

2. Navegar al directorio del proyecto:
   
   ```sh
   git clone https://github.com/MiguelUrena02/artesanias.git
   ```

3. Navegar al directorio del proyecto:
   
   ```sh
   cd node-restful
   ```

4. Ejecutar el siguiente comando para iniciar los contenedores:

    ```sh
    docker-compose up -d
    ```

    > **IMPORTANTE**
    >
    > Debe estar iniciado el Docker engine para ejecutar el comando anterior,
    > si no lo está, se devolverá un mensaje de error indicando que no se
    > encontró el docker daemon.

5. La API estará disponible en `http://localhost:3100`.

## Documentación detallada

Para obtener información detallada sobre los endpoints y cómo utilizar la API,
consulta la [documentación detallada](./documentacion/README.md)

## Enlaces externos

- [Node.js](https://www.nodejs.org)
- [Docker](https://www.docker.com)