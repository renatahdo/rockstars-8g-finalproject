import { Schema, model } from 'mongoose';

export interface Genre {
    _id: string;
    description: string;
}

export interface CreateGenreDTO {
    description: string,
}

export interface UpdateGenreDTO {
    _id: string,
    description: string,
}

export interface DeleteGenreDTO {
    _id: string,
}

export interface GetGenreByIdDTO {
    _id: string,
}

const schema = new Schema<Genre>({
    description: { type: String, required: true },
});

export const GenreModel = model<Genre>("genres", schema);
