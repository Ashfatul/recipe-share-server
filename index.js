const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');
const blogs = require('./data/blogs.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('JSON Server is running! --- at "/chefs", "/blogs" and "/recipes"')
  });

  app.get('/chefs', (req, res) =>{
    res.send(chefs);
  });

  app.get('/chefs/:id', (req, res) =>{
    res.send(chefs.find(chef => chef.id === req.params.id));
  });

  app.get('/recipes', (req, res) =>{
    res.send(recipes);
  });

  app.get('/recipes/:id', (req, res) =>{
    res.send(recipes.filter(recipe => recipe.recipeOfChef === parseInt(req.params.id)));
  });

  app.get('/recipes/latest/:id', (req, res) =>{
    res.send(recipes.find(recipe => recipe.id === parseInt(req.params.id)));
  });

  app.get('/blogs', (req, res) =>{
    res.send(blogs);
  });

  app.listen(port, () => {
    console.log(`JSON Server is listening on port ${port}`)
  });