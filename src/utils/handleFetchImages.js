const getProductImages = () => {
	const fakeData = [
		{
			id: "project1",
			name: "project1",
			image: {
				preview: {
					phone: {
						url: "https://picsum.photos/480/320/?random44322",
					},
					tablet: {
						url: "https://picsum.photos/1004/669/?random424",
					},
					laptop: {
						url: "https://picsum.photos/1372/915/?random34324",
					},
					desktop: {
						url: "https://picsum.photos/1820/1213/?random15345",
					},
				},

				pictures: [
					{
						id: "project1-picture1",
						phone: {
							url: "https://picsum.photos/480/320/?random25345",
						},
						tablet: {
							url: "https://picsum.photos/1004/669/?random45542",
						},
						laptop: {
							url: "https://picsum.photos/1372/915/?random37567",
						},
						desktop: {
							url: "https://picsum.photos/1820/1213/?random1gdfg",
						},
					},
					{
						id: "project1-picture2",
						phone: {
							url: "https://picsum.photos/480/320/?random2ewq",
						},
						tablet: {
							url: "https://picsum.photos/1004/669/?random4jty",
						},
						laptop: {
							url: "https://picsum.photos/1372/915/?random3sd",
						},
						desktop: {
							url: "https://picsum.photos/1820/1213/?random1iuy",
						},
					},
					{
						id: "project1-picture3",
						phone: {
							url: "https://picsum.photos/480/320/?random2423",
						},
						tablet: {
							url: "https://picsum.photos/1004/669/?random4fsdf",
						},
						laptop: {
							url: "https://picsum.photos/1372/915/?random3ej",
						},
						desktop: {
							url: "https://picsum.photos/1820/1213/?random1tytr",
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
					phone: {
						url: "https://picsum.photos/480/320/?random81t",
					},
					tablet: {
						url: "https://picsum.photos/1004/669/?random2e",
					},
					laptop: {
						url: "https://picsum.photos/1372/915/?random1e",
					},
					desktop: {
						url: "https://picsum.photos/1820/1213/?random9e",
					},
				},
				pictures: [
					{
						id: "project2-picture1",
						phone: {
							url: "https://picsum.photos/480/320/?random2s",
						},
						tablet: {
							url: "https://picsum.photos/1004/669/?random4y",
						},
						laptop: {
							url: "https://picsum.photos/1372/915/?random37",
						},
						desktop: {
							url: "https://picsum.photos/1820/1213/?random1y",
						},
					},
					{
						id: "project2-picture2",
						phone: {
							url: "https://picsum.photos/480/320/?random242",
						},
						tablet: {
							url: "https://picsum.photos/1004/669/?random443",
						},
						laptop: {
							url: "https://picsum.photos/1372/915/?random35435",
						},
						desktop: {
							url: "https://picsum.photos/1820/1213/?random1654",
						},
					},
					{
						id: "project2-picture3",
						phone: {
							url: "https://picsum.photos/480/320/?random2y5r",
						},
						tablet: {
							url: "https://picsum.photos/1004/669/?random4fs",
						},
						laptop: {
							url: "https://picsum.photos/1372/915/?random43243",
						},
						desktop: {
							url: "https://picsum.photos/1820/1213/?random144",
						},
					},
				],
			},
		},
	];

	return fakeData;

};

export { getProductImages, getAvatar };
