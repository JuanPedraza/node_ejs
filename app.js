const express = require('express')
const cowsay = require('cowsay')
const app = express()

const port = 3000

// Motor de plantillas

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



// middleware

app.use(express.static(__dirname + "/public"))


// Rutas

app.get('/', (req,res) => {
    res.render("index", {Title: "Mi título dinámico"})
})

app.get('/servicios', (req,res) => {
    res.render("servicios", {TitleServices: "Servicios"})
})


app.use((req,res, next) => {
    res.status(404).render("404", {
        title: "404",
        description: "No se ha encontrado el sitio que buscas"
    })
})



app.listen(port, () => {
    console.log(cowsay.say({
        text: `Servidor corriendo en el puerto: ${port}`,
        e : "oO",
	    T : "U "
    }));
})