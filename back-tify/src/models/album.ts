import { Genre } from "./genre";
import { Singer } from "./singer";
import { Song } from "./song";
import { Schema, model } from 'mongoose';

export interface Album {
    _id: string,
    name: string,
    singer: Singer,
    releaseDate: Date,
    songs: Song[],
    price: number,
    genre: Genre,
    stock: number,
    image: string,
}

export interface GetAlbumByIdDTO {
    _id: string;
}
export interface CreateAlbumDTO {
    name: string;
    releaseDate: string;
    singer: string;
    songs: Song[];
    price: number;
    genre: Genre;
    stock: number;
}
export interface UpdateAlbumDTO {
    _id: string;
    releaseDate: string;
    name: string;
    singer: string;
    songs: Song[];
    price: number;
    genre: Genre;
}
export interface DeleteAlbumDTO {
    _id: string;
}

const schema = new Schema<Album>({
    name: { type: String, required: true },
    singer: { type: Schema.Types.ObjectId, reference: 'singers', required: true },
    releaseDate: { type: Date, required: true, default: new Date() },
    songs: [{ type: Schema.Types.ObjectId, reference: 'songs', required: true }],
    price: { type: Number, required: true },
    genre: { type: Schema.Types.ObjectId, reference: 'genres', required: true },
    stock: { type: Number, required: true, default: 100 },
    image: { type: String, required: true },
});

export const AlbumModel = model<Album>("albums", schema);