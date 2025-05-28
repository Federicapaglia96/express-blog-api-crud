//rotta non trovata
//middleware

function routeNotFound(req,res, next){
    res.status(404);
    res.json({
        error:"route not found",
    });
}

export default routeNotFound;