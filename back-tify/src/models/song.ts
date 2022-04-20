import { Album } from "./album";
import { Singer } from "./singer";
import { Schema, model } from 'mongoose';

export interface Song {
    _id: string,
    name: string,
    singer: Singer,
    releaseDate: Date,
    album?: Album,
    duration: number,
    completeFile: string,
    previewFile: string,
    price?: number,
}

export interface GetSongByIdDTO {
    _id: string;
}
export interface CreateSongDTO {
    name: string;
    singer: Singer;
    album?: Album;
    price?: number;
}
export interface UpdateSongDTO {
    _id: string;
    name: string;
    singer: Singer;
    album?: Album;
    price?: number;
}
export interface DeleteSongDTO {
    _id: string;
}

const schema = new Schema<Song>({
    name: { type: String, required: true },
    singer: { type: Schema.Types.ObjectId, reference: 'singers', required: true },
    releaseDate: { type: Date, required: true, default: new Date() },
    album: { type: Schema.Types.ObjectId, reference: 'albums', optional: true },
    duration: { type: Number, required: true },
    completeFile: { type: String, required: true },
    previewFile: { type: String, required: true },
    price: { type: Number, optional: true },
});

export const SongModel = model<Song>("songs", schema);