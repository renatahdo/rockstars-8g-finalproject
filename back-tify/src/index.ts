import express from "express";
import cors from "cors";
import { run } from "./modules/db";
import { 
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    login,
    deleteUser
} from "./controllers/user";
import {
    getAllGenres,
    getGenreById,
    createGenre,
    updateGenre,
    deleteGenre,
} from "./controllers/genre";

const app = express();

app.use(
    cors({
        origin: "http://localhost:3000",
    })
);
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.set("secretKey", process.env.SECRET_KEY);

// Genre
app.get("/genre", async (req, res) => {
    const genres = await getAllGenres();
    res.send(genres);
});

app.get("/genre/:_id", async (req, res) => {
    const genre = await getGenreById({ _id: req.params._id });
    res.send(genre);
});

app.post("/genre", async (req, res) => {
    const genre = await createGenre(req.body);
    res.send(genre);
});

app.patch("/genre/:_id", async (req, res) => {
    const genre = await updateGenre({
        _id: req.params._id,
        description: req.body.description,
    });
    res.send(genre);
});

app.delete("/genre/:_id", async (req, res) => {
    const genre = await deleteGenre({_id: req.params._id,});
    res.send(genre);
});

// Users
app.post("/auth", async (req, res) => {
    const usuario = await login(req.body);

    if (usuario.status) {
        res.status(usuario.status);
        res.send({ error: usuario.error });
    } else {
        res.send(usuario);
    }
});

app.get("/user", async (req, res) => {
    const users = await getAllUsers();
    res.send(users);
});

app.get("/user/:_id", async (req, res) => {
    const user = await getUserById({ _id: req.params._id });
    res.send(user);
});

app.post("/user", async (req, res) => {
    const user = await createUser(req.body);
    res.send(user);
});

app.patch("/user/:_id", async (req, res) => {
    const user = await updateUser({
        _id: req.params._id,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    res.send(user);
});

app.delete("/user/:_id", async (req, res) => {
    const genre = await deleteUser({_id: req.params._id,});
    res.send(genre);
});

app.listen(8000, async () => {
  await run();
  console.log("Server listening on port 8000 🚀");
});