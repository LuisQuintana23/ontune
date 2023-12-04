import app from "./app.js";
const {APP_PORT} = process.env;
app.listen(APP_PORT, ()=>{
    console.log(`Servidor ejecutandose desde http://localhost:${APP_PORT}`)
})

