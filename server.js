const app = require('./app');
const PORT = process.env.PORT || 3000;

//Llamada al puerto
app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`)
})