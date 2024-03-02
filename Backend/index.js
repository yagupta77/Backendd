const express = require("express")
const app = express()
const port = 8080;
const path = require("path")
var methodOverride = require('method-override')
 
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.json())
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
const { v4: uuidv4 } = require('uuid');
 


let posts = [
    {
        id: uuidv4(),
        username: "Yash Gupta",
        content: "I love coding "
    },
    {
        id: uuidv4(),
        username: "Shaddha",
        content: "Hard work is important to success"
    },

    {
        id:uuidv4(),
        username: "Sakshi",
        content: "I got selected my 1 internship"
    }

]

app.get("/posts", (req, res) => {
    //  res.send("server woring");
    res.render("index.ejs", { posts })

})
app.get("/posts/new", (req, res) => {
    // res.send("server loading")
    res.render("new.ejs")
})
app.post("/posts", (req, res) => {
    let id = uuidv4();
    let { username, content } = req.body
    posts.push({ id,username, content })
    //    console.log(req.body)
    //    res.send("post working")
    res.redirect("/posts")
})

app.get("/posts/:id", (req, res) => {
    let {id} = req.params
    let post = posts.find((p) => id === p.id)

    //  if(!post){
    //     return res.render("error.ejs");
    
        // res.send("Not found ")
    //  }
    //res.redirect(`/posts`)
  res.render(`show.ejs`,{post})
})

app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params
    let newContent = req.body.content
    let post = posts.find((p) => id === p.id);
    post.content = newContent
    // console.log(post)
res.redirect("/posts")

})
app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);

    // Check if post exists


    res.render( "edit.ejs" ,{ post });
});
app.delete("/posts/:id",(req,res) =>{
    let {id} = req.params;
     posts = posts.filter((p) => id !== p.id);
    // res.send("delete post")
    res.redirect("/posts")

})

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})