const getAvatar = () => {
	const fakeData = {
		phone_small: {
			url: "https://i.pravatar.cc/350",
		},
		phone_large: {
			url: "https://i.pravatar.cc/600",
		},
		desktop_small: {
			url: "https://i.pravatar.cc/700",
		},
		laptop: {
			url: "https://i.pravatar.cc/800",
		},
		desktop_medium: {
			url: "https://i.pravatar.cc/900",
		},
		desktop_large: {
			url: "https://i.pravatar.cc/1100",
		},
	};

	return fakeData;
};

const getProductImages = () => {
	const fakeData = [
		{
			id: "project1",
			name: "project1",
			image: {
				preview: {
					phone_small: {
						url: "https://picsum.photos/628/419/?1",
					},
					phone_large: {
						url: "https://picsum.photos/867/578/?2",
					},
					tablet: {
						url: "https://picsum.photos/1068/712/?3",
					},
					desktop_small: {
						url: "https://picsum.photos/1235/823/?44324",
					},
					laptop: {
						url: "https://picsum.photos/1378/919/?5",
					},
					desktop_medium: {
						url: "https://picsum.photos/1561/1040/?6",
					},
					desktop_large: {
						url: "https://picsum.photos/1672/1115/?7",
					},
				},

				pictures: [
					{
						id: "project1-picture1",
						phone_small: {
							url: "https://picsum.photos/810/540/?2",
						},
						phone_large: {
							url: "https://picsum.photos/1088/725/?3",
						},
						tablet: {
							url: "https://picsum.photos/1372/915/?3",
						},
						desktop_small: {
							url: "https://picsum.photos/1672/1115/?54354",
						},
						laptop: {
							url: "https://picsum.photos/1905/1270/?5",
						},
						desktop_medium: {
							url: "https://picsum.photos/2400/1600/?6",
						},
						desktop_large: {
							url: "https://picsum.photos/3840/2160/?057",
						},
					},
					{
						id: "project1-picture2",
						phone_small: {
							url: "https://picsum.photos/810/540/?2",
						},
						phone_large: {
							url: "https://picsum.photos/1088/725/?3",
						},
						tablet: {
							url: "https://picsum.photos/1324/883/?3",
						},
						desktop_small: {
							url: "https://picsum.photos/1587/1058/?664",
						},
						laptop: {
							url: "https://picsum.photos/1814/1209/?5",
						},
						desktop_medium: {
							url: "https://picsum.photos/2400/1600/?6",
						},
						desktop_large: {
							url: "https://picsum.photos/3840/2160/?057",
						},
					},
					{
						id: "project1-picture3",
						phone_small: {
							url: "https://picsum.photos/810/540/?2",
						},
						phone_large: {
							url: "https://picsum.photos/1088/725/?3",
						},
						tablet: {
							url: "https://picsum.photos/1324/883/?3",
						},
						desktop_small: {
							url: "https://picsum.photos/1587/1058/?4234234",
						},
						laptop: {
							url: "https://picsum.photos/1814/1209/?5",
						},
						desktop_medium: {
							url: "https://picsum.photos/2400/1600/?6",
						},
						desktop_large: {
							url: "https://picsum.photos/3840/2160/?057",
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
					phone_small: {
						url: "https://picsum.photos/628/419/?2",
					},
					phone_large: {
						url: "https://picsum.photos/867/578/?3",
					},
					tablet: {
						url: "https://picsum.photos/1068/712/?99",
					},
					desktop_small: {
						url: "https://picsum.photos/1235/823/?5",
					},
					laptop: {
						url: "https://picsum.photos/1378/919/?6",
					},
					desktop_medium: {
						url: "https://picsum.photos/1561/1040/?7",
					},
					desktop_large: {
						url: "https://picsum.photos/1672/1115/?8",
					},
				},
				pictures: [
					{
						id: "project2-picture1",
						phone_small: {
							url: "https://picsum.photos/810/540/?2",
						},
						phone_large: {
							url: "https://picsum.photos/1088/725/?3",
						},
						tablet: {
							url: "https://picsum.photos/1324/883/?9",
						},
						desktop_small: {
							url: "https://picsum.photos/1587/1058/?455",
						},
						laptop: {
							url: "https://picsum.photos/1814/1209/?5",
						},
						desktop_medium: {
							url: "https://picsum.photos/2400/1600/?6",
						},
						desktop_large: {
							url: "https://picsum.photos/3840/2160/?057",
						},
					},
					{
						id: "project2-picture2",
						phone_small: {
							url: "https://picsum.photos/810/540/?2",
						},
						phone_large: {
							url: "https://picsum.photos/1088/725/?3",
						},
						tablet: {
							url: "https://picsum.photos/1324/883/?3",
						},
						desktop_small: {
							url: "https://picsum.photos/1587/1058/?455",
						},
						laptop: {
							url: "https://picsum.photos/1814/1209/?5",
						},
						desktop_medium: {
							url: "https://picsum.photos/2400/1600/?6",
						},
						desktop_large: {
							url: "https://picsum.photos/3840/2160/?057",
						},
					},
					{
						id: "project2-picture3",
						phone_small: {
							url: "https://picsum.photos/810/540/?2",
						},
						phone_large: {
							url: "https://picsum.photos/1088/725/?3",
						},
						tablet: {
							url: "https://picsum.photos/1324/883/?3",
						},
						desktop_small: {
							url: "https://picsum.photos/1587/1058/?455234",
						},
						laptop: {
							url: "https://picsum.photos/1814/1209/?5",
						},
						desktop_medium: {
							url: "https://picsum.photos/2400/1600/?6",
						},
						desktop_large: {
							url: "https://picsum.photos/3840/2160/?057",
						},
					},
				],
			},
		},
	];

	return fakeData;
};

export { getProductImages, getAvatar };
