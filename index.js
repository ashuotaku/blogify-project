import express from "express";
const app = express();
const port = process.env.PORT || 3000;

let blogs = [{ title: "example title", content: "example content" }];

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { blogs: blogs, title: "Blogify" });
});

app.post("/publish", (req, res) => {
  blogs.push(req.body);
  res.redirect("/");
});

app.get("/post/:sn", (req, res) => {
  res.locals.params = req.params;
  res.render("posts.ejs", blogs[req.params.sn]);
});

app.post("/edit/:sn", (req, res) => {
  blogs[req.params.sn] = req.body;
  res.redirect('/post/'+req.params.sn);
})

app.get("/delete/:sn", (req, res) => {
  blogs.splice(req.params.sn, 1);
  res.redirect("/");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
