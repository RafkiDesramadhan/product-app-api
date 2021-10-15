import express from "express";
import mongoose from "mongoose";
import router from "./routes/index.js";
import cors from "cors";

const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/restful_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected!'));

app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(port, () => {
    console.log(`server listening at port ${port}`);
})