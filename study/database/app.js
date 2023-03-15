var mysql = require('mysql'); // mysql
var express = require('express'); // 노드로 앱 라이브러리
var session = require('express-session'); // 세션 라이브러리
var FileStore = require('session-file-store')(session); // 세션스토어 라이브러리
var MySQLStore = require('express-mysql-session')(session); // musql세션스토어 라이브러리
var cookieParser = require('cookie-parser'); // cookie를 쉽게 추출할수 있도록 도와줌
var bodyParser = require('body-parser'); // POST data의 body로부터 파라미터를 쉽게 추출할수 있도록 도와줌
var md5 = require('md5'); // 비밀번호 보안관련 라이브러리

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
  secret: '13213DFs21@sd12@!%',
  resave: false,
  saveUninitialized: true,
  // store: new FileStore() 세션스토어
  store: new MySQLStore({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '1234',
    database : 'o2'
  })
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
  req.session.save(function(){ // 세션데이터가 저장되기도 전에 리다이렉션이 일어날수 있음. 그렇기에 이 함수 추가
    res.redirect('/')
  })
})
var salt = '@!#@2213sadsadewr@!#21' // 보안 2단계
var users = [{
  username: 'seop',
  password: 'e5ffc6d4bf85ff8ae0c41aeb1fa2aee0', // md5를 이용해 1234를 암호화함 (salt + pw)
  displayName: '원섭'
}];
app.post('/login', function(req, res){
  var username = req.body.username;
  var pwd = req.body.password;
  for(var i=0; i<users.length; i++){
    var user = users[i];
    if(username === user.username && md5(salt+pwd) === user.password ) {
      req.session.displayName = user.displayName;
      req.session.save(function(){
        res.redirect('/');
      });
    } else {
      res.redirect('/login');
    }
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