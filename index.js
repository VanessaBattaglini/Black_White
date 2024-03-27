import express from 'express';
const app = express();
import router from './routes/router.js';
const PORT = process.env.PORT || 3000;

//Middlewares
app.use('/', router);
app.use(express.static('assets')); //Carpeta pública

app.listen(PORT, () => {
    console.log(`El servidor se ha levantado en el port http://localhost:${PORT}`)
});