import express from 'express';
import { fileURLToPath } from "url";
import path from "path";
import Jimp from "jimp";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();
// Ruta del directorio actual
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//Ruta raíz
router.get("/", (req, res) => {
    const indexPath = path.join(__dirname, "../views/index.html");
    res.sendFile(indexPath);
});

//Ruta para cargar la imagen
router.get("/cargar", async (req, res) => {
    const nameImage = `img${uuidv4().slice(0, 8)}.jpg`;
    const { img } = req.query;
    const imgJimp = await Jimp.read(img);
    await imgJimp
        .resize(350, Jimp.AUTO)
        .grayscale()
        .writeAsync(`assets/img/${nameImage}`);
    res.sendFile(path.join(__dirname, `../assets/img/${nameImage}`));
});




export default router;