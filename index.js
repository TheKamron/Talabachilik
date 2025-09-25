import express from "express"
import { create } from "express-handlebars"
import mainRoutes from "./routes/main.js"
import authRoutes from "./routes/auth.js"

const app = express()
const hbs = create({defaultLayout: 'main', extname: 'hbs',  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
}})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
app.set('views', "./views")
app.use(express.static('src'))

app.use(mainRoutes)
app.use(authRoutes)

const startApp = () => {
    try {
        const PORT = 5500 || process.env.PORT
        app.listen(PORT, console.log(`Server is running on port: ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

startApp()