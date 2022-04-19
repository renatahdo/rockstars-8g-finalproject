import { Album } from "./album";
import { Song } from "./song";
import { Schema, model } from 'mongoose';

export interface Singer {
    _id: string,
    name: string,
    lastName: string,
    nationality: string,
    albums?: Album[],
    songs?: Song[],
}

const schema = new Schema<Singer>({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    nationality: { type: String, required: true },
    albums: [{ type: Schema.Types.ObjectId, reference: 'albums', optional: true }],
    songs: [{ type: Schema.Types.ObjectId, reference: 'songs', optional: true }],
});

export const SingerModel = model<Singer>("singers", schema);