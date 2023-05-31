const express = require('express');
const router = express.Router();
const projectApp = require ("../projects.json")

// colocar las rutas aquí
router.get('/', (req, res) => {
    res.render("home");
});

router.get("/about-me", (req,res) => {
    res.render("about-me")
})

router.get("/projects", (req,res) => {
    console.log(projectApp)
    res.render("projects", {projectApp})
})

router.get("/project/:id", (req,res) => {
    const {id} = req.params
    const project = projectApp.find(project => project.id == id)
    console.log(project)
    res.render("project-id", {project})
})

module.exports = router;
