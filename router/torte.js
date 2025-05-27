import express from "express";
import torteController from "../controllers/torteController.js";

const router = express.Router();

//lettura di tutti
//INDEX
//al posto di app uso router
router.get('/',torteController.index)

//lettura di ogni singolo dettaglio
//SHOW
router.get('/:id',torteController.show);

// creazione
router.post("/",torteController.store);

// modifica
router.put("/:id", torteController.update);

// cancellazione
router.delete("/:id",torteController.destroy );




export default router;