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

router.get('/entertainment-places', (req, res) => {
    res.render('entertainment-places', {
        title: "Ko'ngil Ochar Joylar | Talabachilik Uz"
    })
})

router.get('/events', (req, res) => {
    res.render('events', {
        title: "Tabdirlar | Talabachilik Uz"
    })
})

router.get('/navi', (req, res) => {
    res.render('navi', {
        title: "Soon..."
    })
})

router.get('/my-promo', (req, res) => {
    res.render('my-promo', {
        title: "Mening promokodlarim | Talabachilik Uz"
    })
})

router.get('/places', (req, res) => {
    res.render('places', {
        title: "Ko'ngil ochar manzil | Talabachilik Uz"
    })
})



export default router;