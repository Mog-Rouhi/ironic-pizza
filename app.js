const express = require("express");
const hbs = require("hbs");

const app = express();


// Make everything inside of public/ available
app.use(express.static('public'));

app.set("views", __dirname + "/views"); //tells our Express app where to look for our views
app.set("view engine", "hbs"); //sets HBS as the template engine

hbs.registerPartials(__dirname + "/views/partials"); // config partials



// <img src="./images/homepage-pizza.jpg" />

// app.get(path, callback);


// this is a route
app.get("/", (req, res, next) => {
    console.log("this is the homepage")
    // res.send("hello world")
    res.render('index');
});

// this is another route
app.get("/contact", (req, res, next) => {
    console.log("this is the contact page");
   // res.send("<h1>Contact Page</h1>");
    res.render('contact');
});

app.get("/pizzas/margherita", (req, res, next) => {
  // res.send("hello");
  //  res.sendFile(__dirname + '/views/pizza-margherita.html');

  const data = {
    title:"Pizza Margherita",
    price: 8,
    image: "/images/pizza-margherita.jpg",
    ingredients: ["Mozzarella", "Tomato sauce", "Basilicum"]
  }
    res.render("pizza-page", data);
});

app.get("/pizzas/carbonara", (req, res, next) => {
  //  res.sendFile(__dirname + '/views/pizza-carbonara.html');
    const data = {
        title:"Pizza Carbonara",
        price: 10,
        image:"/images/pizza-carbonara.jpg"
    }
    res.render("pizza-page", data);
});

app.get("/pizzas/funghi", (req, res, next) => {
  //  res.sendFile(__dirname + '/views/pizza-funghi.html');
  const data = {
    title:"Pizza Funghi",
   // price: 12,
    image: "/images/pizza-funghi.jpg",
    ingredients: ["Funghi", "Mozzarella", "Tomato sauce", "Basilicum"]
  }
    res.render("pizza-page", data);
});


app.listen(3000, () => console.log('My first app listening on port 3000! '));
