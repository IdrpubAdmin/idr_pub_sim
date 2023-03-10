var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
  secret: '13213DFs21@sd12@!%',
  resave: false,
  saveUninitialized: true,
  store: new FileStore()
}))
app.use(cookieParser('21321354DF21@#@!#sa1')) // 암호화

var products = {
  1: {
    title: '사과',
  },
  2: {
    title: '배',
  }
}

app.get('/', function(req, res){
  if(req.session.displayName){
    res.send(`
      <h1>Hello, ${req.session.displayName}</h1>
      <a href="/logout">Logout</a>  
    `);
  } else {
    res.send(`
      <h1>Welcome</h1>
      <p><a href="/login">Login</a></p>
      <p><a href="/products">Products</a></p>
    `)
  }
})

app.get('/logout', function(req, res){
  delete req.session.displayName;
  res.redirect('/')
})

app.post('/login', function(req, res){
  var user = {
    username: 'seop',
    password: '1234',
    displayName: '원섭'
  };
  var username = req.body.username;
  var pwd = req.body.password;
  if(username === user.username && pwd === user.password ) {
    req.session.displayName = user.displayName
    res.redirect('/');
  } else {
    res.redirect('/login');
  }
})

app.get('/login', function(req, res){{
  var output = `
    <h1>Login</h1>
    <form action="/login" method="post">
      <p>
        <input type="text" name="username" placeholder="username">
      </p>
      <p>
        <input type="password" name="password" placeholder="password">
      </p>
      <p>
        <input type="submit">
      </p>
    </form>
  `
  res.send(output)
}})

app.get('/products', function(req, res){{
  var output = '';
  for(var name in products) { 
    output += `
    <li>
        <a href="/cart/${name}">${products[name].title}</a>
    </li>
    `
  }
  res.send(`
    <h1>Products</h1>
    <ul>${output}</ul>
    <a href="/cart">Cart</a>
  `);
}})

app.get('/cart/:id', function(req, res){
  var id = req.params.id;
  if(req.signedCookies.cart){
    var cart = req.signedCookies.cart
  } else {
    var cart = {};
  }
  if(!cart[id]){
    cart[id] = 0;
  }
  cart[id] = parseInt(cart[id])+1;
  res.cookie('cart', cart, {signed: true});
  res.redirect('/cart');
})

app.get('/cart', function(req, res){

  var cart = req.signedCookies.cart;
  if(!cart) {
    res.send('장바구니가 비어있습니다.')
  } else {
    var output = '';
    for(var id in cart){
      output += `<li>${products[id].title}(수량: ${cart[id]})</li>`
    }
  }
  res.send(`
    <h1>Cart</h1>
    <ul>${output}</ul>
    <a href="/products">Products List</a>
  `);
})

app.get('/count', function(req, res){
  if(req.signedCookies.count){
    var count = parseInt(req.signedCookies.count)
  } else {
    count = 0;
  }
  count = count + 1;
  res.cookie('count', count, {signed: true});
  res.send('count : ' + count);
})

// var conn = mysql.createConnection({
//   host : 'localhost',
//   user : 'root',
//   password : '1234',
//   database : 'o2'
// })
// conn.connect();

app.listen(3000, function(){
  console.log('3000')
})