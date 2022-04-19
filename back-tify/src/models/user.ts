import { Schema, model } from 'mongoose';

// Interfaz: tipo de dato
export interface User {
    _id: string;
    username: string;
    email: string;
    password: string;
}

// Schema: lo que va a tomar Mongoose para entender qué va a recibir, cómo los datos se pasan a la BDD
const schema = new Schema<User>({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

// Modelo: 
export const UserModel = model<User>("Users", schema);