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