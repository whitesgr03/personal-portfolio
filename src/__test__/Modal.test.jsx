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

		const { container } = render(<ProductModal product={mokeProduct} />);

		expect(container).toMatchSnapshot();
	});
});
