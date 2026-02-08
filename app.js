const express=require('express')
const app=express()
const port=8000
app.get('/home',(req,res)=>{
     res.send('Home page')
})
app.get('/about',(req,res)=>{
     res.send('about page')
})
app.get('/contact',(req,res)=>{
     res.send('contact page')
})
app.get('/product',(req,res)=>{
     res.send('product page')
})
app.get('/send',(req,res)=>{
     res.send('Hello')
})
module.exports = app
