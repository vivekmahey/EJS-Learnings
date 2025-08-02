const express=require("express");
const app=express();
const port=5000;

app.set("view engine","ejs");

app.use(express.static('public')) // serve CSS, images, etc.

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


app.listen(port ,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});