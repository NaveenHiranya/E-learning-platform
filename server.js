const express = require('express');
const app = express();

app.use('/', express.static('public'));
app.use('/home', express.static('public', { index: 'home.html' }));


app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/UserLogin',(req,res)=>{
    res.render("form.ejs",{state:"signin"});
});

app.post('/login',(req,res)=>{
    console.log(req.body);
    res.redirect('/home');
})
app.post('/register',(req,res)=>{
    console.log(req.body);
    const register = true
    if(register){
        res.redirect('/home');
    }
    else{
        res.render('form.ejs',{name: req.body.name,state:"register"})
    }
})

app.listen(3000);