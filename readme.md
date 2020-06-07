
## Table of contents
- [Table of contents](#table-of-contents)
- [Blog Website Using Express, EJS and Lodash](#blog-website-using-express-ejs-and-lodash)
- [Requirements](#requirements)
- [Technologies Used](#technologies-used)
- [Set Up](#set-up)



## Blog Website Using Express, EJS and Lodash 

This project uses partials to build a cohesive whole website. It has a home page, about us page , contact us page. Home page stores the new blog posts in chronological order but the actual blog content will be truncated to only 100 characters. When you click on read more, it will take you to an individual page of each of your blog posts and you can read them independently on a single page.

There's also a hidden page(`localhost:3000/compose`) which will allow you to compose your diary. Then you can see the new post gets put right on the home page and a brand new page has been created in the URL `localhost:3000/posts/another-post`(example for another post titled blog post) just for that new post. Hit enter and we get taken to the page where that blog posts exists. 

By using EJS we're able to create dynamically single pages, new web pages for each and every blog post that we're making.

## Requirements

You need node and npm installed in your environment. `npm install` to install dependencies.

## Technologies Used

Epress, Lodash, and ejs templating.

## Set Up

```sh
npm install
nodeomon app.js
```

- Website works in `localhost:3000` 
- To compose a new blog post go to `localhost:3000/compose`. It redirects to home page.
- To see the new blog post `localhost:3000/posts/yourNewBlogPostTitle` You can type the blog post name with lowercase or uppercase, it doesn't affect to fetch the website.
