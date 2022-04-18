"use strict"
require('dotenv').config()
import configApp from './config/app'
import App from "./app";
const app = new App()
const server = app.server
server.listen(configApp.port)
server.on('unhandledRejection', (error, promise) => {
    console.log(' Oh Lord! We forgot to handle a promise rejection here: ', promise);
    console.log(' The error was: ', error );
});