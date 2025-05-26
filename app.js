// importo express
import express from "express";
// importo router
import viaggiRoutes from "./router/viaggi.js";


//invoco express
const app=express();

const port=3000;

//rendo pubbliche le immagini
app.use(express.static("public"));

//definisco la prima rotta
app.get('/', (req,res)=>{
    const resData={
        data:"viaggi in natura",
    };

    res.json(resData);

});


// utilizzare viaggiRoutes
app.use('/viaggi', viaggiRoutes);
//avvio il server mettendolo in ascolto sulla porta indicata
 app.listen(port,()=>{
console.log("sono il server");

 });