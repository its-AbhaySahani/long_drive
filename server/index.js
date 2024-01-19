import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

// Connect to MongoDB database using Mongoose https://www.mongodb.com/cloud/atlas

//const CONNECTION_URL = 'mongodb+srv://coderx_abhay:<@Itsabhay123>@longdrive.r7fj4ln.mongodb.net/?retryWrites=true&w=majority';
//const PORT = process.env.PORT || 5000;
//
//mongoose
//    .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true});
//    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//    .catch((error) => console.log(`${error} did not connect`));
//
//
//mongoose.set('useFindAndModify', false);

