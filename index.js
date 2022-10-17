const { application } = require("express");
const express = require('express');
const app = express();

    app.get('/api' , function(req , res) {
        res.set('Content-Type' , 'application/json')
        res.status(200)
        let profs = ['Elderson' , 'Pedro Henrique' , 'Wesley']
        let meuId = req.params.id 
        return res.json({
             profs
  
        });

    });
    
    app.get('/api/:id' , function(req, res) {
        res.set('Content-Type' , 'application/json')
        res.status(200)
        let profs = ['Wesley' , 'Elderson' , 'Pedro Henrique']
        let meuId = req.params.id
        return res.json({
            nome: profs[meuId]
        });
       
    });

    app.listen(3000, () => {
        console.log('Teste consumo api')
    });