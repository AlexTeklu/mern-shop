import express from 'express';
import data from './data.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import seedRouter from './route/seedRoute.js';

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

app.get('/api/products', (req, res) => {
	res.send(data.products);
});

app.get('/api/products/slug/:slug', (req, res) => {
	const product = data.products.find((x) => x.slug === req.params.slug);
	if (product) {
		res.send(product);
	} else {
		res.status(404).send({ message: 'Product Not Found' });
	}
});
app.get('/api/products/:id', (req, res) => {
	const product = data.products.find((x) => x._id === req.params.id);
	if (product) {
		res.send(product);
	} else {
		res.status(404).send({ message: 'Product Not Found' });
	}
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`server is listening at http://localhost:${port}`);
});
