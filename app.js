const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use(express.static(path.join(__dirname, 'public')))

//utilizazmos el router
const route = require('./routes/router')
app.use(route.routes)

/* app.get('/', (req, res)=>{
    res.send('Dashboard con node js');
}) */

app.listen(3000,()=>{
    console.log('servidor funcionando http://localhost:3000')
})