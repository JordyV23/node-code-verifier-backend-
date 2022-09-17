import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv'


//configuracion de archivo .env
dotenv.config();

//Crear Express app
const app: Express = express();
const port: String | number = process.env.PORT || 8000;

//Definir primera ruta de la aplicacion
app.get('/', (req: Request, res: Response) => {
    //enviar saludo
    res.send('WELCOME to APPI RESTFULL Express + Nodemon + TS + Swagger + Mongoose');
})

//Definir primera ruta de la aplicacion
app.get('/hello', (req: Request, res: Response) => {
    //enviar saludo
    res.send('WELCOME to GET Route: HELLOOO');
})


//ejecutar app
app.listen(port, ()=> {
    console.log('EXPRESS SERVER: Running at http://localhost:${port}')
})