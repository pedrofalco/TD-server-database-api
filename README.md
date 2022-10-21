## TD server database api 🗃

`ES`
Componente custom para comunicar una aplicacion web o un servidor web con [TouchDesigner](https://derivative.ca/download) via una [API](https://developer.mozilla.org/es/docs/Glossary/API) y así almacenar información en una simple base de datos. Para esto se utiliza [express](https://expressjs.com/es/) y [nedb](https://www.npmjs.com/package/nedb).
El componente en este repositorio sirve para hacer un "GET" Request o un "POST" Request desde TouchDesigner a la base de datos y así guardar o recuperar los objetos almacenados. Está pensando para ser usado con una interfaz web o solamente con TouchDesigner. Una de sus múltiples tipos de uso puede ser la de almacenar mensajes enviados por usuarios, rutas que indiquen una imagen guardada en la computadora o la data de una imagen encodeada como base64.

### 🚩 Rápida instalación con Node.js y npm

Para usar este respositorio es necesario descargar [Node.js](https://nodejs.org/es/).

1. Descargar o clonar el repositorio en tu computadora.

2. Instalar las dependencias en la carpeta de destino ejecutando en la consola `npm i` o manualmente `npm i express nedb`

3. `npm start` para inicilizar la app.
> 💡 Nota: esto además creará el archivo `database.db` que funcionará como base de datos.

### 🚏 Comentarios y comandos

Para inicializar en modo *test* (la app se reiniciará cada vez que se haga un cambio en ella) ejecutar en la consola:

```
npm test
```
> 💡 Nota: para ello es necesario instalar previamente `npm nodemon -g`.

Para ver en el navegador los objetos guardados en la base de datos:

```
http://localhost:1111/api
```

Para limpiar la base de datos es necesario finalizar el server y ejecutar en la consola:
```
# limpiar la base de datos
npm run clear

# y luego reiniciar el server
npm start

# o reiniciar en modo test
npm test
```
> 💡 Nota: si no reinicias el servidor no verás los cambios.


👋 *Si lo usas, si tenés algún tipo de feedback o problema, hacemelo llegar por favor :)*

---


`EN`
Custom component to communicate a web application or a web server with [TouchDesigner](https://derivative.ca/download) via an [API](https://developer.mozilla.org/es/docs/Glossary/API) in order to store information in a simple database. For this purpose I used [express](https://expressjs.com/es/) and [nedb](https://www.npmjs.com/package/nedb).
The component in this repository works to submit "GET" Requests or a "POST" Requests from TouchDesigner to the database and thus save or retrieve the stored objects. It's intended to be used with a web interface or only with TouchDesigner. One of its many uses can be to store messages sent by users, paths indicating an image stored on the computer or the data of an image encoded as base64.

### Quick Start with Node.js & npm 🚩

To use this repository you'll need to download [Node.js](https://nodejs.org/es/).

1. Download or clone the repository on your computer.

2. Install the dependencies in the target folder by running `npm i` or manually `npm i express nedb` in the console.

3. `npm start` to start the app.
> 💡 Note: this will also create the `database.db` file that will serve as the database.

### Comments & commands 🚏

You can view the objects stored in the database on the browser:

```
http://localhost:1111/api
```

To clear the database it's necessary to terminate the server and run in the console:
```
# clear the database
npm run clear

# and then restart the server
npm start

# or restart in test mode
npm test
```
> 💡 Note: if you don't restart the server you won't see any changes.

👋 *If you use it or if you have any feedback or problem, please let me know :)*


🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗
