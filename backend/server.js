import express from 'express';
// import data from './data.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import seedRouter from './route/seedRoute.js';
import productRouter from './route/productRoute.js';

dotenv.config();
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		console.log('db connected');
	})
	.catch((err) => {
		console.log(err.message);
	});

const app = express();
app.use(express.json());

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);



const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`server is listening at http://localhost:${port}`);
});
