const express=require("express");
const app=express();
const port=5000;

app.set("view engine","ejs");

app.use(express.static('public')) // serve CSS, images, etc.
app.use(express.urlencoded({ extended: true }));  //Data Parsing and Reading by express 

app.get("/",(req,res)=>{
    res.render('home2',{pageTitle:'Home', user:"Vivek"})
})

app.get("/about", (req, res) => {
  res.render("about", { pageTitle: "About Us", username: "Vivek" });
});

// Loops and condiationals 
app.get('/users',(req,res)=>{

    const users=[
    { name: "Vivek", role: "admin" },
    { name: "Aman", role: "user" },
    { name: "Sara", role: "user" },
    { name: "Rohan", role: "admin" }
    ];

    res.render('users', {pageTitle: "Users Page", users})
});


// To Show out of stock products with ejs

app.get("/products", (req, res) => {
  const products = [
    { name: "iPhone 15", price: 79900, stock: 5 },
    { name: "MacBook Air", price: 112000, stock: 0 },
    { name: "AirPods Pro", price: 24900, stock: 12 },
    { name: "Apple Watch", price: 35900, stock: 0 }
  ];

  res.render("products", {pageTitle: "Users Page", products });
});

app.get("/contact", (req, res) => {
  res.render("contact", { pageTitle: "Contact Page" });
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  // ✅ Basic validation
  if (!name || !email || !message) {
    return res.send("Please fill all fields!");
  }

  // Pass data to a success page
  res.render("success", {pageTitle: "Sucess Page" , name, email, message });
});

// Static VS dynamic

app.get("/dashboard", (req, res) => {
  const user = {
    name: "Vivek Mahey",
    email: "vivek@example.com",
    isAdmin: true,
    stats: {
      posts: 4,
      followers: 150,
      following: 120
    },
    recentPosts: [
      { title: "Mastering EJS", date: "2025-08-01" },
      { title: "Intro to Express.js", date: "2025-07-25" },
      { title: "Node Middleware Guide", date: "2025-07-15" }
    ]
  };

  res.render("dashboard", { pageTitle: "User Dashboard", user });
});


app.get("/profile", (req, res) => {
  const user = {
    name: "Vivek Mahey",
    username: "vivek.codes",
    bio: "Full Stack Developer • Dreamer • Coder",
    email: "vivek@example.com",
    profileImg: "/images/img1.jpeg", // image from public folder
    location: "Punjab, India",
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "EJS"]
  };

  res.render("profile", { pageTitle:'Profile Page', user });
});


app.listen(port ,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});