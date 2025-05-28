


//array di torte


const torte = [
    {
        id: "1",
        nome: "Torta al Cioccolato",
        titolo: "Delizia Fondente",
        ingredienti: ["cioccolato fondente", "burro", "zucchero", "uova", "farina"],
        price: 2,
        tags: ["cioccolato", "classico", "dessert"]
    },
    {
        id: "2",
        nome: "Cheesecake ai Frutti di Bosco",
        titolo: "Freschezza Estiva",
        ingredienti: ["formaggio spalmabile", "biscotti", "burro", "frutti di bosco", "zucchero"],
        price: 10,
        tags: ["cheesecake", "frutta", "senza cottura"]

    },
    {
        id: "3",
        nome: "Crostata di Mele",
        titolo: "Profumo di Casa",
        ingredienti: ["mele", "pasta frolla", "zucchero", "cannella", "limone"],
        price: 4,
        tags: ["mele", "tradizionale", "autunno"]
    },
    {
        id: "4",
        nome: "Tiramisù",
        titolo: "Classico Italiano",
        ingredienti: ["savoiardi", "caffè", "mascarpone", "uova", "cacao"],
        price: 7,
        tags: ["caffè", "italiano", "freddo"]
    },
    {
        id: "5",
        nome: "Torta al Limone",
        titolo: "Sole a Fette",
        ingredienti: ["limoni", "zucchero", "uova", "farina", "burro"],
        price: 8,
        tags: ["limone", "fresca", "primavera"]
    },
];




//le cinque funzioni che sposto dal file torte.js al file del controller
//index
const index = (req, res) => {
    console.log(req.query);
    //filtro ingredienti e prezzo 
    const ingredientiFilter = req.query.ingredienti;
    const maxPriceFilter = req.query.maxPrice;
    let result = torte

    if (ingredientiFilter !== undefined && maxPriceFilter !== undefined) {
        result = torte.filter((curTorte) =>
            curTorte.ingredienti.includes(ingredientiFilter) &&
            curTorte.price <= maxPriceFilter
        );
    } else if (ingredientiFilter !== undefined) {
        result = torte.filter((curTorte) =>
            curTorte.ingredienti.includes(ingredientiFilter)
        );
    } else if (maxPriceFilter !== undefined) {
        result = torte.filter((curTorte) =>
            curTorte.price <= maxPriceFilter
        )

    }

    res.json({
        data: result
    });
};

//SHOW
//dettaglio di ogni singolo elemento
const show = (req, res) => {
    const dolceId = req.params.id;
    const dolce = torte.find((curdolce) => curdolce.id === dolceId);
    res.json({
        data: dolce
    });
    //Se il metodo find non trova nessun elemento,
    //resituiamo un JSON con informazioni sull'errore
    if (!dolce) {
        res.status(404)//imosto lo status 404
        return res.json({
            error: "not Found",
            message: "Dolce non trovato"
        });
    }
    res.json(dolce);
};




//STORE
//creazione

const store = (req, res) => {
    const nuovaTorta = req.body;
    const lastId=parseInt(torte[torte.length-1].id);
    nuovaTorta.id=(lastId+1).toString();
    torte.push(nuovaTorta)


    res.json({
        data: "Aggiungo una nuova torta",
    });
};

//update modifica

const update = (req, res) => {
    const torteId = req.params.id;
    const updateData = req.body;
    const torte =
        res.json({
            data: torte
        });
};


// DESTROY
const destroy = (req, res) => {
    const dolceId = req.params.id;
    const dolce = torte.find((curdolce) => curdolce.id === dolceId);
    //rimuovo la torta dal menu
    torte.splice(torte.indexOf(torte), 1);
    console.log(torte);
    //restituiamo lo status corretto
    res.sendStatus(204)
};




const torteController = {
    index,
    show,
    store,
    update,
    destroy,
};


export default torteController;