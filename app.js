const express = require("express")
const app = express();

const cursos = [
    { id: 1, nombre: 'Desarrollo Full Stack' },
    { id: 2, nombre: 'Base de Datos' }
]

app.get('/api/cursos/:id', (req, res) => {
    //Number(req.params.id) convierte el :id de la URL (texto) a número
    const curso = cursos.find(c => c.id === Number(req.params.id));
    if(!curso){
        return res.status(404).json({error: "Curso no encontrado"});
    }
    res.json(curso);
})

//Exportar app sin encenderla, para poder probarla
module.exports = app