import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Mubeen Kodvavi',
		email: 'mubeen@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Moiz Adil',
		email: 'moiz@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
];

export default users;
