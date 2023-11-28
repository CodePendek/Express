const express = require("express")
const layouts = require("express-ejs-layouts")
const app = express()
const port = 3000

app.set("view engine", "ejs")
app.use(layouts)

app.get("/", (req, res) => {
  const data = {
    title: "Halaman login",
    layout: "templates/main_template"
  }
  
  res.render("login", data)
})

app.get("/home", (req, res)=>{
  res.render("home", {
    title: "Beranda",
    layout: "templates/main_template"
  })
})

app.post("/login", (req, res) =>{
  res.redirect("home")
})

app.get("/user", (req, res)=>{
  res.render("users", {
    title: "Tambah user",
    layout: "templates/main_template"
  })
})


app.use(express.static("public"))


app.listen( port, ()=>{
  console.log(`Berjalan di port ${port}`);
})