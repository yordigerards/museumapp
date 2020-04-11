// neem express-module en steek functionaliteit in constante
const express = require('express');

// constante aanmaken die als webserver zal dienen
const app = express();

// Vertel aan webserver dat ik gebruik maak van view engine en dan ook van dewelke, nl. EJS
app.set("views", "views");
app.set("view engine", "ejs");

// vertel aan webserver waar de publieke bestanden zitten
app.use(express.static('public'));

const data= require('./data/kunst.json');


// webserver luister naar GET-commando van verschillende pagina's
app.get("/", function(request, response){
  // vanuit de views-map de juiste pagina halen en renderen
  response.render("home", {
    kunst: data.kunstjes
  });
});

app.get("/kunstwerken", function(request, response){
  response.render('kunstwerken', {
    kunst: data.kunstjes
  });
});

app.get("/detail", function(request, response){
  response.render('detail', {
    kunst: data.kunstjes
  });
});

app.get("/contact", function(request, response){
  response.render('contact');
});


// Wanneer de URL niet gevonden werd in bovenstaande, gebruik dan de 404
app.use(function(request, response){
  response.statusCode = 404;
  response.render("404");
});

// server opstarten en beschikbaar maken via URL
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));
