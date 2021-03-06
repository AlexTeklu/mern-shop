import bycrpt from 'bcryptjs';

const data = {
	users: [
		{
			name: 'Alex',
			email: 'alex@gmail.com',
			password: bycrpt.hashSync('123'),
			isAdmin: true,
		},
		{
			name: 'user',
			email: 'user@gmail.com',
			password: bycrpt.hashSync('123'),
			isAdmin: false,
		},
	],
	products: [
		{
			// _id: '1',
			name: 'Smart phones',
			slug: 'galaxy-smart-phone',
			category: 'phones',
			image: '/Assets/smartPhone.png',
			price: 5000,
			countInStock: 0,
			brand: 'Samsung',
			rating: 4.5,
			numReviews: 10,
			description: 'hight quality HD camera',
		},
		{
			// _id: '2',
			name: 'Television',
			slug: 'tv-smart',
			category: 'phones',
			image: '/Assets/tv.png',
			price: 5000,
			countInStock: 10,
			brand: 'Samsung',
			rating: 4.5,
			numReviews: 10,
			description: 'hight quality HD camera',
		},
		{
			// _id: '3',
			name: 'Laptop',
			slug: 'laptop',
			category: 'laptop',
			image: '/Assets/p1.png',
			price: 5000,
			countInStock: 10,
			brand: 'Samsung',
			rating: 4.5,
			numReviews: 10,
			description: 'hight quality HD camera',
		},
		{
			// _id: '4',
			name: 'Camera',
			slug: 'camera-smart',
			category: 'phones',
			image: '/Assets/camera.png',
			price: 5000,
			countInStock: 10,
			brand: 'Samsung',
			rating: 4.5,
			numReviews: 10,
			description: 'hight quality HD camera',
		},
	],
};

export default data;
