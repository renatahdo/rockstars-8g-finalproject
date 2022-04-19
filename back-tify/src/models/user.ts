import { Schema, model } from 'mongoose';

// Interfaz: tipo de dato
export interface User {
    _id: string,
    username: string,
    email: string,
    password: string,
    type: 'admin' | 'customer'
}

export interface LoginDTO {
    username?: string,
    email?: string,
    password: string,
}

export interface LoginEmailDTO {
    email: string,
    password: string,
}

export interface LoginUsernameDTO {
    username: string,
    password: string,
}

export interface GetUserByIdDTO {
    _id: string,
}

export interface CreateUserDTO {
    username: string,
    email: string,
    password: string,
    type: 'admin' | 'customer'
}

export interface UpdateUserDTO {
    _id: string,
    username?: string,
    email?: string,
    password?: string,
}

export interface DeleteUserDTO {
    _id: string,
}

// Schema: lo que va a tomar Mongoose para entender qué va a recibir, cómo los datos se pasan a la BDD
const schema = new Schema<User>({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    type: { type: String, required: true, default: "customer" },
});

// Modelo: 
export const UserModel = model<User>("users", schema);