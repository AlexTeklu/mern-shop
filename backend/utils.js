import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
	return jwt.sign(
		{
			_id: user._id,
			email: user.email,
			email: user.email,
			isAdmin: user.isAdmin,
		},
		process.env.JWT_SEC,
		{
			expiresIn: '30d',
		}
	);
};

export const isAuth = (req, res, next) => {
	const authorization = req.headers.authorization;
	if (authorization) {
		const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
		jwt.verify(token, process.env.JWT_SEC, (err, decode) => {
			if (err) {
				res.status(401).send({ message: 'Invalid Token' });
			} else {
				req.user = decode;
				next();
			}
		});
	} else {
		res.status(401).send({ message: 'No Token' });
	}
};
