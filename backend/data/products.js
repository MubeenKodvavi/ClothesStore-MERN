const products = [
	{
		_id: {
			$oid: '5fdf4d0e1c7553c3c99bf80e',
		},
		rating: 4,
		numReviews: 1,
		price: 600,
		countInStock: 3,
		name: 'Blue polo shirt',
		image: '/images/polo-blue.jpg',
		description: 'High quality cloth',
		brand: 'POLO',
		category: 'tops',
		user: {
			$oid: '5fdf4d0e1c7553c3c99bf80b',
		},
		reviews: [
			{
				_id: {
					$oid: '5fdfa819c4ba7c0988920c09',
				},
				name: 'Mubeen Kodvavi',
				rating: 4,
				comment: 'Hello World',
				user: {
					$oid: '5fdf4d0e1c7553c3c99bf80c',
				},
				createdAt: {
					$date: '2020-12-20T19:38:01.607Z',
				},
				updatedAt: {
					$date: '2020-12-20T19:38:01.607Z',
				},
			},
		],
		__v: 1,
		createdAt: {
			$date: '2020-12-20T13:09:34.813Z',
		},
		updatedAt: {
			$date: '2020-12-25T02:30:42.279Z',
		},
	},
	{
		_id: {
			$oid: '5fdf4d0e1c7553c3c99bf813',
		},
		rating: 3,
		numReviews: 2,
		price: 1000,
		countInStock: 0,
		name: 'Red hoodie',
		image: '/images/hoodie-red.jpg',
		description: 'High quality cloth',
		brand: 'hoodie',
		category: 'tops',
		user: {
			$oid: '5fdf4d0e1c7553c3c99bf80b',
		},
		reviews: [
			{
				_id: {
					$oid: '5fdf9625c4ba7c0988920c05',
				},
				name: 'Admin User',
				rating: 3,
				comment: 'hello',
				user: {
					$oid: '5fdf4d0e1c7553c3c99bf80b',
				},
				createdAt: {
					$date: '2020-12-20T18:21:25.895Z',
				},
				updatedAt: {
					$date: '2020-12-20T18:21:25.895Z',
				},
			},
			{
				_id: {
					$oid: '5fdfa905c4ba7c0988920c0c',
				},
				name: 'Mubeen Kodvavi',
				rating: 3,
				comment: 'bye world',
				user: {
					$oid: '5fdf4d0e1c7553c3c99bf80c',
				},
				createdAt: {
					$date: '2020-12-20T19:41:57.215Z',
				},
				updatedAt: {
					$date: '2020-12-20T19:41:57.215Z',
				},
			},
		],
		__v: 2,
		createdAt: {
			$date: '2020-12-20T13:09:34.817Z',
		},
		updatedAt: {
			$date: '2020-12-25T02:31:05.730Z',
		},
	},
	{
		_id: {
			$oid: '5fe54eede0ebe400f2249ffb',
		},
		rating: 0,
		numReviews: 0,
		price: 800,
		countInStock: 8,
		name: 'black nike tshirt',
		user: {
			$oid: '5fdf4d0e1c7553c3c99bf80b',
		},
		image: '/uploads/image-1608863503979.jpg',
		brand: 'nike',
		category: 'tops',
		description: 'original nike sportwear/t shirt',
		reviews: [],
		createdAt: {
			$date: '2020-12-25T02:31:09.301Z',
		},
		updatedAt: {
			$date: '2020-12-25T02:32:44.325Z',
		},
		__v: 0,
	},
	{
		_id: {
			$oid: '5fe54f86e0ebe400f2249ffd',
		},
		rating: 0,
		numReviews: 0,
		price: 1000,
		countInStock: 20,
		name: 'black adidas trouser',
		user: {
			$oid: '5fdf4d0e1c7553c3c99bf80b',
		},
		image: '/uploads/image-1608863650907.jpg',
		brand: 'adidas',
		category: 'bottoms',
		description: 'original branded trouser',
		reviews: [],
		createdAt: {
			$date: '2020-12-25T02:33:42.606Z',
		},
		updatedAt: {
			$date: '2020-12-25T02:34:41.535Z',
		},
		__v: 0,
	},
	{
		_id: {
			$oid: '5fe54fdee0ebe400f2249ffe',
		},
		rating: 0,
		numReviews: 0,
		price: 1200,
		countInStock: 7,
		name: 'Red Black Checked Shirt',
		user: {
			$oid: '5fdf4d0e1c7553c3c99bf80b',
		},
		image: '/uploads/image-1608863718770.jpg',
		brand: 'flannel',
		category: 'tops',
		description: 'high quality 100% cotton checked shirt',
		reviews: [],
		createdAt: {
			$date: '2020-12-25T02:35:10.627Z',
		},
		updatedAt: {
			$date: '2020-12-25T02:52:26.446Z',
		},
		__v: 0,
	},
	{
		_id: {
			$oid: '5fe57fcb02fd6e44e5dc67e6',
		},
		rating: 0,
		numReviews: 0,
		price: 100,
		countInStock: 11,
		name: 'shirt',
		user: {
			$oid: '5fdf4d0e1c7553c3c99bf80b',
		},
		image: '/uploads/image-1608876073481.jpeg',
		brand: 'puma',
		category: 'tops',
		description: 'Sample description',
		reviews: [],
		createdAt: {
			$date: '2020-12-25T05:59:39.439Z',
		},
		updatedAt: {
			$date: '2020-12-25T06:02:03.054Z',
		},
		__v: 0,
	},
];

export default products;
