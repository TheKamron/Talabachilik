import { Router } from "express";

const router = Router()

router.get('/login', async (req, res) => {
    res.render('login', {
        title: "Kirish | Talabachilik Uz"
    })
})

router.get('/register', async (req, res) => {
    res.render('register', {
        title: "Ro'yxatdan o'tish | Talabachilik Uz"
    })
})


export default router;