import { render, screen } from "@testing-library/react";

import { fireEvent } from "@testing-library/react";

import Modal, { ProductModal } from "../components/Modal";

describe("Renders Modal Component", () => {
	it("Should return modal DOM and display the modal", () => {
		const mockShowModal = true;
		render(<Modal showModal={mockShowModal} />);

		const element = screen.getByTestId("modal");

		expect(element).toHaveClass("show");
	});
	it("Should return modal DOM and not show the modal", () => {
		const mockShowModal = false;
		render(<Modal showModal={mockShowModal} />);

		const element = screen.getByTestId("modal");

		expect(element).not.toHaveClass("show");
	});
	it("Should return Modal component containing children DOM", () => {
		const mockChildren = <button type="button">test</button>;

		render(<Modal children={mockChildren} />);

		const button = screen.getByRole("button", { name: "test" });

		expect(button).toBeInTheDocument();
	});
});

describe("Renders ProductModal Component", () => {
	it("Should return ProductModal DOM with product data", () => {
		const mockProduct = {
			id: "project1",
			name: "project1",
			image: {
				pictures: [
					{
						id: "project1-picture1",
						phone: {
							url: "...",
						},
						tablet: {
							url: "...",
						},
						laptop: {
							url: "...",
						},
						desktop: {
							url: "...",
						},
					},
					{
						id: "project1-picture2",
						phone: {
							url: "...",
						},
						tablet: {
							url: "...",
						},
						laptop: {
							url: "...",
						},
						desktop: {
							url: "...",
						},
					},
				],
			},
		};

		render(<ProductModal product={mockProduct} />);

		const heading = screen.getByRole("heading", {
			name: mockProduct.name,
		});

		const [firstImage] = screen.getAllByRole("img");

		expect(heading).toBeInTheDocument();
		expect(firstImage).toHaveAttribute(
			"src",
			mockProduct.image.pictures[0].desktop.url
		);
	});
	it("Should call the function through the load event", async () => {
		const mockOnload = jest.fn();
		const mockProduct = {
			id: "project1",
			name: "project1",
			image: {
				pictures: [
					{
						id: "project1-picture1",
						phone: {
							url: "...",
						},
						tablet: {
							url: "...",
						},
						laptop: {
							url: "...",
						},
						desktop: {
							url: "...",
						},
					},
					{
						id: "project1-picture2",
						phone: {
							url: "...",
						},
						tablet: {
							url: "...",
						},
						laptop: {
							url: "...",
						},
						desktop: {
							url: "...",
						},
					},
				],
			},
		};

		render(<ProductModal product={mockProduct} onLoad={mockOnload} />);

		const [firstImage, secondImage] = screen.getAllByRole("img");

		fireEvent.load(firstImage);

		expect(mockOnload).toBeCalledTimes(1);

		fireEvent.load(secondImage);

		expect(mockOnload).toBeCalledTimes(2);
	});
});
