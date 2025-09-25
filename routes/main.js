import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Asosiy Sahifa | Talabachilik Uz'
    })
})

router.get('/rental-houses', (req , res) => {
    res.render('rental-houses', {
        title: "Kartalar"
    })
})



export default router;