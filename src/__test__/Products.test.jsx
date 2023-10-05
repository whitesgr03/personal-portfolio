import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Products from "../components/Products";

describe("Renders Products Component", () => {
	it("Should return Modal DOM with product", () => {
		const mockProductsImage = [
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

		const { container } = render(
			<Products allProducts={mockAllProducts} />
		);

		expect(container).toMatchSnapshot();
	});
	it("Should show modal with product on click", async () => {
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
		];

		const user = userEvent.setup();

		render(
			<Products
				onShowProduct={mockShowProduct}
				allProducts={mockAllProducts}
			/>
		);

		const [firstButtonForImage] = screen.getAllByRole("button", {
			name: "buttonForImage",
		});

		await user.click(firstButtonForImage);

		expect(mockShowProduct).toBeCalledTimes(1);

		const [firstButtonForTitle] = screen.getAllByRole("button", {
			name: "buttonForTitle",
		});

		await user.click(firstButtonForTitle);

		expect(mockShowProduct).toBeCalledTimes(2);
	});
	it("Should press the Tab key to focus buttons and links", async () => {
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
		];

		render(
			<Products allProducts={mockAllProducts} showModal={mokeShowModal} />
		);

		const [firstButtonForImage] = screen.getAllByRole("button", {
			name: "buttonForImage",
		});
		const [firstButtonForTitle] = screen.getAllByRole("button", {
			name: "buttonForTitle",
		});
		const [firstLinkForLive] = screen.getAllByRole("link", {
			name: "Live (opens in new tab)",
		});
		const [firstLinkForSource] = screen.getAllByRole("link", {
			name: "Source (opens in new tab)",
		});

		expect(firstButtonForImage).toHaveAttribute("tabIndex", "-1");
		expect(firstButtonForTitle).toHaveAttribute("tabIndex", "-1");
		expect(firstLinkForLive).toHaveAttribute("tabIndex", "-1");
		expect(firstLinkForSource).toHaveAttribute("tabIndex", "-1");
	});
});
