//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// Load the full build.
const _ = require('lodash');
const app = express();

app.set('view engine', 'ejs');

// app.set('views',(__dirname, 'views'));

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

//posts array for compose page (posts is an array of obejcts)
const posts = [];

//render ejs page 
//show new posts in home page
app.get("/", (req,res)=>{
 res.render("home" , { 
   home : homeStartingContent,
   post: posts, 
  });
//  console.log(posts);
});

app.get("/about", (req,res)=>{
  res.render("about" , { about : aboutContent });
 });

 app.get("/contact", (req,res)=>{
  res.render("contact" , { contact : contactContent });
 });

 app.get("/compose", (req,res)=>{
  res.render("compose");
 });

 app.post("/compose", (req,res)=>{
   //when post route is triggered, title and content are passed over
   const post = {
     title : req.body.postTitle,
     content : req.body.postContent
   };
   //push to posts array
   posts.push(post);
  // go back to home route 
   res.redirect("/");
 });


// Express route parameters to dynamically create new pages
// app.get("/news/:topic", function(req, res){
//   console.log(req.params.topic);
// });
// localhost:3000/news/politics  // topic parameter can change 

// use lodash(lowercase) to use lowercase paths in localhost 
 // transfrom user's  format to lowercase
app.get("/posts/:blog" , (req, res) => {
  const requestedTitle = _.lowerCase(req.params.blog) ; 
  //loop through the array to get dynamic information for each individual post
  posts.forEach(function(post){
    const storedTitle = _.lowerCase(post.title);
    if (storedTitle === requestedTitle){
      // console.log("Match found!");
      //this will render every blog post in its own page 
      res.render("post", 
      {title : post.title,
       content : post.content
      });
    }
  });
});







app.listen(3000, function() {
  console.log("Server started on port 3000");
});
