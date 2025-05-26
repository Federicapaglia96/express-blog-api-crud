


//array di viaggi
const viaggi = [
    {
        id: "1",
        titolo: "Tramonto sul lago",
        contenuto: "Un momento di pace osservando il sole calare sull'acqua.",
        immagine: "public/tramontolago.jpg",
        tags: ["natura", "tramonto", "relax"]
    },
    {
        id: "2",
        titolo: "Weekend in campagna",
        contenuto: "Due giorni immersi nel verde tra animali e silenzio.",
        immagine: "public/weekendcampagna.jpg",
        tags: ["viaggio", "verde", "rilassante"]
    },
    {
        id: "3",
        titolo: "Escursione in montagna",
        contenuto: "Sentieri avventurosi e panorami mozzafiato.",
        immagine: "public/escursionemontagna.jpg",
        tags: ["montagna", "escursione", "sport"]
    },
    {
        id: "4",
        titolo: "Cena in terrazza",
        contenuto: "Cibo delizioso sotto le stelle con vista panoramica.",
        immagine: "public/cenaterrazza.jpg",
        tags: ["cibo", "notte", "compagnia"]
    },
    {
        id: "5",
        titolo: "Arrampicata sulle Alpi",
        contenuto: "Una sfida fisica e mentale, tra rocce e vento.",
        immagine: "public/arrampicata.jpg",
        tags: ["montagna", "avventura", "arrampicata"]
    }
];

//le cinque funzioni che sposto dal file viaggi.js al file del controller

const index = (req, res) => {
    res.json({
        data: viaggi
    });
};

const show =(req,res)=>{
const travelId= req.params.id;
const travel=viaggi.find((curtravel)=>curtravel.id===travelId);
res.json({
    data:travel
});
};

const store=(req, res) => {
  res.json({
    data: "Aggiungo un nuovo viaggio",
  });
};

const update= (req, res) => {
    res.json({
        data: viaggi
    });
};

const destroy=(req, res) => {
  const travelId = req.params.id;
  res.json({
    data: `Cancello i viaggi con id ${travelId}`,
  });
};


const viaggiController = {
  index,
  show,
  store,
  update,
  destroy,
};


export default viaggiController;