import { Router } from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

const router = Router()

// GET
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

// POST
router.post('/register', async (req, res) => {
    const {username, phoneNumber, password, confirmPassword} = req.body
    if(!username || !phoneNumber || !password || !confirmPassword) {
        console.log("Barcha qatorlar to'ldirilishi shart")
        res.redirect('/register')
        return 
    }
    const existUser = await User.findOne({username})
    const existNumber = await User.findOne({phoneNumber})
    if(existUser) {
        console.log('User allaqachon mavjud')
        res.redirect('/register')
        return
    }
    if(password !== confirmPassword) {
        console.log('Parollar mos emas')
        res.redirect('/register')
        return
    }    
    if(existNumber) {
        console.log('Bu nomer allaqachon mavjud')
        res.redirect('/register')
        return
    }

    // hashed pass
    const hashedPass = await bcrypt.hash(password, 10)

    const userData = {
        firstName: null,
        surName: null,
        username,
        phoneNumber,
        password: hashedPass,
    }
    const data = await User.create(userData)
    console.log(data)
    console.log("Ro'yxatdan muvaffaqiyatli tarzda o'tildi")
    res.redirect('/register')
})


router.post('/login', async (req, res) => {
    const {username, password} = req.body
    const user = await User.findOne({username})
    console.log(user)
    


})


export default router;