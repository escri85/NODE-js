/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
  res.send('Hola de nuevo mi servidor esta funcionando')
})

app.get('/productos',(req,res)=>{
  res.send(
    {
      "nombre": "SERGIO",
      "edad":36
    }
  )
})

app.listen(PORT,()=>{
  console.log(`mi servidor esta funcionando en el puerto ${PORT}`);
})
