const getProducts = () => {
	const fakeProducts = [
		{
			id: "project1",
			name: "project1",
			image: {
				preview: {
					url: {
						phone: "https://fakeimg.pl/480x320/195c86/",
						table: "https://fakeimg.pl/1004x669/195c86/",
						laptop: "https://fakeimg.pl/1372x915/195c86/",
						desktop: "https://fakeimg.pl/1820x1213/195c86/",
					},
				},
				pictures: [
					{
						id: "project1-picture1",
						url: {
							phone: "https://fakeimg.pl/480x320/195c86/",
							table: "https://fakeimg.pl/1004x669/195c86/",
							laptop: "https://fakeimg.pl/1372x915/195c86/",
							desktop: "https://fakeimg.pl/1820x1213/195c86/",
						},
					},
					{
						id: "project1-picture2",
						url: {
							phone: "https://fakeimg.pl/480x320/195c86/",
							table: "https://fakeimg.pl/1004x669/195c86/",
							laptop: "https://fakeimg.pl/1372x915/195c86/",
							desktop: "https://fakeimg.pl/1820x1213/195c86/",
						},
					},
					{
						id: "project1-picture3",
						url: {
							phone: "https://fakeimg.pl/480x320/195c86/",
							table: "https://fakeimg.pl/1004x669/195c86/",
							laptop: "https://fakeimg.pl/1372x915/195c86/",
							desktop: "https://fakeimg.pl/1820x1213/195c86/",
						},
					},
				],
			},
		},
		{
			id: "project2",
			name: "project2",
			image: {
				preview: {
					url: {
						phone: "https://fakeimg.pl/480x320/195c86/",
						table: "https://fakeimg.pl/1004x669/195c86/",
						laptop: "https://fakeimg.pl/1372x915/195c86/",
						desktop: "https://fakeimg.pl/1820x1213/195c86/",
					},
				},
				pictures: [
					{
						id: "project2-picture1",
						url: {
							phone: "https://fakeimg.pl/480x320/195c86/",
							table: "https://fakeimg.pl/1004x669/195c86/",
							laptop: "https://fakeimg.pl/1372x915/195c86/",
							desktop: "https://fakeimg.pl/1820x1213/195c86/",
						},
					},
					{
						id: "project2-picture2",
						url: {
							phone: "https://fakeimg.pl/480x320/195c86/",
							table: "https://fakeimg.pl/1004x669/195c86/",
							laptop: "https://fakeimg.pl/1372x915/195c86/",
							desktop: "https://fakeimg.pl/1820x1213/195c86/",
						},
					},
					{
						id: "project2-picture3",
						url: {
							phone: "https://fakeimg.pl/480x320/195c86/",
							table: "https://fakeimg.pl/1004x669/195c86/",
							laptop: "https://fakeimg.pl/1372x915/195c86/",
							desktop: "https://fakeimg.pl/1820x1213/195c86/",
						},
					},
				],
			},
		},
	];

	return fakeProducts;
};

export default getProducts;