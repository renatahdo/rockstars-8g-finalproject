import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.get("/user", (req, res) => {
    res.send("Hola Express");
});

app.listen(8000, ()=>{
    console.log("Server listenin on port: 8000 🚀");
})