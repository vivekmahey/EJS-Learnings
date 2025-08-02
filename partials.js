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

app.listen(port ,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});