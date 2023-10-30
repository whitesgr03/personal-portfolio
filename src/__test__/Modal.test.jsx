import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Modal, { ProductModal } from "../components/Modal";

describe("Modal Component", () => {
	it("Should add class name if showModal is true", () => {
		const mockShowModal = true;
		render(<Modal showModal={mockShowModal} />);

		const element = screen.getByTestId("modal");

		expect(element).toHaveClass("show");
	});
	it("Should not add class name if showModal is false", () => {
		const mockShowModal = false;
		render(<Modal showModal={mockShowModal} />);

		const element = screen.getByTestId("modal");

		expect(element).not.toHaveClass("show");
	});
	it("Should render children props", () => {
		const mockChildren = <button type="button">mock button</button>;

		render(<Modal children={mockChildren} />);

		const button = screen.getByRole("button", { name: "mock button" });

		expect(button).toBeInTheDocument();
	});
	it("Should disable scrolling on modal block when padding block is pointOver.", async () => {
		const user = userEvent.setup();

		render(<Modal />);

		const div = screen.getByTestId("padding");
		const element = screen.getByTestId("modal");

		await waitFor(async () => {
			await user.pointer([{ target: div }]);
		});

		expect(element).toHaveClass("unScroll");
	});
	it("Should scroll on modal block when padding block goes from pointerover to pointerout.", async () => {
		const user = userEvent.setup();

		render(<Modal />);

		const div = screen.getByTestId("padding");
		const element = screen.getByTestId("modal");

		await waitFor(async () => {
			await user.pointer([{ target: div }]);
		});

		expect(element).toHaveClass("unScroll");

		await waitFor(async () => {
			await user.pointer({ target: element });
		});

		expect(element).not.toHaveClass("unScroll");
	});
});

describe("ProductModal Component", () => {
	it("Should render ProductModal when providing product prop", () => {
		const mockProduct = {
			id: "project1",
			name: "project1",
			image: {
				pictures: [
					{
						id: "project1-picture1",
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
					{
						id: "project1-picture2",
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
			mockProduct.image.pictures[0].phone_small.url
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
					{
						id: "project1-picture2",
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
