function errorHandler(err, req, res, next){
    console.log("error");
    res.status(500)//errore del server
    res.json({
       error : "errore interno del server",
    });

};

export default errorHandler;