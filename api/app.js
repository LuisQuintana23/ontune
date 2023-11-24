import express from 'express'
import 'dotenv/config';
import db from './database/db.js'

import userRoutes from './routes/user.routes.js'
import authRoutes from "./routes/auth.routes.js";

import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import pkg from './package.json' assert { type: "json" }

const app = express()

// importar configuración de package json como version y descripción
app.set('pkg', pkg)
// mostrar logs de consultas HTTP
app.use(morgan('dev'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser());

// limpiar cache
app.use((req, res, next) => {
    if (!req.user){
        res.header(
            'Cache-Control',
            'private, no-cache, no-store, must-revalidate'
        )
    }
    next()
})

// Routes
app.use('/api/users',userRoutes)
app.use('/api/auth', authRoutes)

// conexión a base de datos
try {
    db.authenticate()
    console.log('Conexión exitosa a la base de datos')
} catch (error) {
    console.log(`Error de conexión en la bd: ${error}`)
}

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        description: app.get('pkg').description,
        version: app.get('pkg').version

    })
})

export default app