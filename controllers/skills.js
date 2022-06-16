import { flavorsOfRedbull } from "../data/skills-data.js"

function index (req, res) {
    res.render('skills/index', {
        skills: flavorsOfRedbull
    })

}

export {
    index
}