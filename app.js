// importo express
import express from "express";
// importo router
import torteRoutes from "./router/torte.js";
//importo middleware
import routeNotFound from "./middleware/routeNotFound.js";
import errorHandler from "./middleware/errorHandler.js";

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

//registro middleware alla fine di tutte le rotte
app.use(routeNotFound);

app.use(errorHandler);

//avvio il server mettendolo in ascolto sulla porta indicata
 app.listen(port,()=>{
console.log("sono il server");

 });