const express = require('express');
const path = require('path');
const bodyparser = require('body-parser')
const debug = require('debug')('irondemo:app');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyparser.urlencoded({ extended: true }));

app.use((req,res,next) => {
   if(req.body.ta == "marc"){
       res.send('NO PUEDES PASAR');
   }else{
       next();
   }
    
});

app.get('/getmyta', (req, res) => {
    console.log(req.query);
    console.log(req.params);
    console.log(req.color);
    //const {ta,color} = req.params;
    const {ta,color} = req.query; 
    res.render('home',{
        name: ta,
        color
    });
})


app.post('/getmyta', (req, res) => {
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    //const {ta,color} = req.params;
    const {ta,color} = req.query; 
    res.render('home',{
        name: ta,
        color
    });
})

const port = 3000;
app.listen(port, () => console.log(`Ready on http://localhost:${port}`));