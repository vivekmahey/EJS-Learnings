const express=require("express");
const app=express();
const port=3000;

app.set("view engine","ejs");

// Setting home route
app.get("/",(req,res)=>{
    res.render("home",{username:"Vivek"})
});

// Understanding Syntaxes

app.get("/syntax", (req, res) => {
    res.render("syntax", {
        user: "Vivek",
        age: 22,
        skills: ["HTML", "CSS", "JavaScript", "EJS"],
        isLoggedIn: true
    });
});

app.listen(port,()=>{
    console.log(`Server Start Listening at http://localhost:${port}`);
});