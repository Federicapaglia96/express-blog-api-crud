// importo express
import express from "express";
// importo router
import torteRoutes from "./router/torte.js";


//invoco express
const app=express();

const port=3000;

//rendo pubbliche le immagini
app.use(express.static("public"));
app.use(express.json());// quando arriva la richiesta prende il body

//definisco la prima rotta
app.get('/', (req,res)=>{
    const resData={
        data:"torte",
    };

    res.json(resData);

});


// utilizzare torteRoutes
app.use('/torte', torteRoutes);
//avvio il server mettendolo in ascolto sulla porta indicata
 app.listen(port,()=>{
console.log("sono il server");

 });