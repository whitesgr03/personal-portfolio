import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { fireEvent } from "@testing-library/react";

import Products from "../components/Products";

describe("Products Component", () => {
	it("Should render Products component list when providing productImage prop", () => {
		const mockProductsImage = [
			{
				id: "project1",
				name: "project1",
				image: {
					preview: {
						phone_small: {
							url: "../",
						},
						phone_large: {
							url: "../",
						},
						tablet: {
							url: "../",
						},
						desktop_small: {
							url: "../",
						},
						laptop: {
							url: "../",
						},
						desktop_medium: {
							url: "../",
						},
						desktop_large: {
							url: "../",
						},
					},
				},
			},
			{
				id: "project2",
				name: "project2",
				image: {
					preview: {
						phone_small: {
							url: "../",
						},
						phone_large: {
							url: "../",
						},
						tablet: {
							url: "../",
						},
						desktop_small: {
							url: "../",
						},
						laptop: {
							url: "../",
						},
						desktop_medium: {
							url: "../",
						},
						desktop_large: {
							url: "../",
						},
					},
				},
			},
		];

		render(<Products productsImage={mockProductsImage} />);

		const [firstButtonForImage] = screen.getAllByRole("button", {
			name: "buttonForImage",
		});

		const [firstButtonForTitle] = screen.getAllByRole("button", {
			name: "buttonForTitle",
		});

		expect(firstButtonForImage).toBeInTheDocument();
		expect(firstButtonForTitle).toBeInTheDocument();
	});
	it("Should display modal when button is clicked", async () => {
		const user = userEvent.setup();
		const mockOnShowProduct = jest.fn();
		const mockProductsImage = [
			{
				id: "project1",
				name: "project1",
				image: {
					preview: {
						phone_small: {
							url: "../",
						},
						phone_large: {
							url: "../",
						},
						tablet: {
							url: "../",
						},
						desktop_small: {
							url: "../",
						},
						laptop: {
							url: "../",
						},
						desktop_medium: {
							url: "../",
						},
						desktop_large: {
							url: "../",
						},
					},
				},
			},
			{
				id: "project2",
				name: "project2",
				image: {
					preview: {
						phone_small: {
							url: "../",
						},
						phone_large: {
							url: "../",
						},
						tablet: {
							url: "../",
						},
						desktop_small: {
							url: "../",
						},
						laptop: {
							url: "../",
						},
						desktop_medium: {
							url: "../",
						},
						desktop_large: {
							url: "../",
						},
					},
				},
			},
		];
		render(
			<Products
				onShowProduct={mockOnShowProduct}
				productsImage={mockProductsImage}
			/>
		);
		const [firstButtonForImage] = screen.getAllByRole("button", {
			name: "buttonForImage",
		});

		await user.click(firstButtonForImage);

		expect(mockOnShowProduct).toBeCalledTimes(1);

		const [firstButtonForTitle] = screen.getAllByRole("button", {
			name: "buttonForTitle",
		});

		await user.click(firstButtonForTitle);

		expect(mockOnShowProduct).toBeCalledTimes(2);
	});
	it("Should able focus link when showModal is true", async () => {
		const user = userEvent.setup();
		const mockShowModal = false;
		const mockProductsImage = [
			{
				id: "project1",
				name: "project1",
				image: {
					preview: {
						phone_small: {
							url: "../",
						},
						phone_large: {
							url: "../",
						},
						tablet: {
							url: "../",
						},
						desktop_small: {
							url: "../",
						},
						laptop: {
							url: "../",
						},
						desktop_medium: {
							url: "../",
						},
						desktop_large: {
							url: "../",
						},
					},
				},
			},
			{
				id: "project2",
				name: "project2",
				image: {
					preview: {
						phone_small: {
							url: "../",
						},
						phone_large: {
							url: "../",
						},
						tablet: {
							url: "../",
						},
						desktop_small: {
							url: "../",
						},
						laptop: {
							url: "../",
						},
						desktop_medium: {
							url: "../",
						},
						desktop_large: {
							url: "../",
						},
					},
				},
			},
		];

		render(
			<Products
				productsImage={mockProductsImage}
				showModal={mockShowModal}
			/>
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

		expect(document.body).toHaveFocus();

		await user.tab();
		expect(firstButtonForImage).toHaveFocus();

		await user.tab();
		expect(firstButtonForTitle).toHaveFocus();

		await user.tab();
		expect(firstLinkForLive).toHaveFocus();

		await user.tab();
		expect(firstLinkForSource).toHaveFocus();
	});
	it("Should unable focus link when showModal is false", async () => {
		const user = userEvent.setup();
		const mockShowModal = true;
		const mockProductsImage = [
			{
				id: "project1",
				name: "project1",
				image: {
					preview: {
						phone_small: {
							url: "../",
						},
						phone_large: {
							url: "../",
						},
						tablet: {
							url: "../",
						},
						desktop_small: {
							url: "../",
						},
						laptop: {
							url: "../",
						},
						desktop_medium: {
							url: "../",
						},
						desktop_large: {
							url: "../",
						},
					},
				},
			},
			{
				id: "project2",
				name: "project2",
				image: {
					preview: {
						phone_small: {
							url: "../",
						},
						phone_large: {
							url: "../",
						},
						tablet: {
							url: "../",
						},
						desktop_small: {
							url: "../",
						},
						laptop: {
							url: "../",
						},
						desktop_medium: {
							url: "../",
						},
						desktop_large: {
							url: "../",
						},
					},
				},
			},
		];

		render(
			<Products
				productsImage={mockProductsImage}
				showModal={mockShowModal}
			/>
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

		expect(document.body).toHaveFocus();

		await user.tab();
		expect(firstButtonForImage).not.toHaveFocus();

		await user.tab();
		expect(firstButtonForTitle).not.toHaveFocus();

		await user.tab();
		expect(firstLinkForLive).not.toHaveFocus();

		await user.tab();
		expect(firstLinkForSource).not.toHaveFocus();
	});
	it("Should call the onLoading when productsImage's index is 0", async () => {
		const mockOnload = jest.fn();
		const mockOnLoading = jest.fn();
		const mockProductsImage = [
			{
				id: "project1",
				name: "project1",
				image: {
					preview: {
						phone_small: {
							url: "../",
						},
						phone_large: {
							url: "../",
						},
						tablet: {
							url: "../",
						},
						desktop_small: {
							url: "../",
						},
						laptop: {
							url: "../",
						},
						desktop_medium: {
							url: "../",
						},
						desktop_large: {
							url: "../",
						},
					},
				},
			},
		];

		render(
			<Products
				productsImage={mockProductsImage}
				onLoad={mockOnload}
				onLoading={mockOnLoading}
			/>
		);

		const [firstImage] = screen.getAllByRole("img");

		fireEvent.load(firstImage);

		expect(mockOnLoading).toBeCalledTimes(1);
	});
	it("Should call the onLoad when productsImage's index is not 0", async () => {
		const mockOnload = jest.fn();
		const mockOnLoading = jest.fn();
		const mockProductsImage = [
			{
				id: "project1",
				name: "project1",
				image: {
					preview: {
						phone_small: {
							url: "../",
						},
						phone_large: {
							url: "../",
						},
						tablet: {
							url: "../",
						},
						desktop_small: {
							url: "../",
						},
						laptop: {
							url: "../",
						},
						desktop_medium: {
							url: "../",
						},
						desktop_large: {
							url: "../",
						},
					},
				},
			},
			{
				id: "project2",
				name: "project2",
				image: {
					preview: {
						phone_small: {
							url: "../",
						},
						phone_large: {
							url: "../",
						},
						tablet: {
							url: "../",
						},
						desktop_small: {
							url: "../",
						},
						laptop: {
							url: "../",
						},
						desktop_medium: {
							url: "../",
						},
						desktop_large: {
							url: "../",
						},
					},
				},
			},
		];

		render(
			<Products
				productsImage={mockProductsImage}
				onLoad={mockOnload}
				onLoading={mockOnLoading}
			/>
		);

		const [, , , secondImage] = screen.getAllByRole("img");

		fireEvent.load(secondImage);

		expect(mockOnload).toBeCalledTimes(1);
	});
});
