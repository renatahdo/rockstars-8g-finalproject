import { connect } from "mongoose"


export const run = async () => {
    const DB_USERNAME = process.env.DB_USERNAME;
    const DB_NAME = process.env.DB_NAME;
    const DB_PASSWORD = process.env.DB_PASSWORD;
    const DB_CLUSTER = process.env.DB_CLUSTER;

    await connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}/${DB_NAME}?retryWrites=true&w=majority`);
}