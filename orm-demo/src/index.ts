import { AppDataSource } from "./data-source"
import express from 'express'
import app3Route from '../src/JSFile/app3Route'
import bodyParser  from 'body-parser'

AppDataSource.initialize().then(async () => {
    
    const app = express()
    
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json())
    
    app.use(app3Route)
    
    app.listen(4040,()=>
    {
        console.log("Listing to 4040 Port")
    })     

}).catch(error => console.log(error))
