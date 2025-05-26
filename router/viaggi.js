import express from "express";
import viaggiController from "../controllers/viaggiController.js";

const router = express.Router();

//lettura di tutti
//INDEX
//al posto di app uso router
router.get('/',viaggiController.index)

//lettura di ogni singolo dettaglio
//SHOW
router.get('/:id',viaggiController.show);

// creazione
router.post("/",viaggiController.store);

// modifica
router.put("/:id", viaggiController.update);

// cancellazione
router.delete("/:id",viaggiController.destroy );




export default router;