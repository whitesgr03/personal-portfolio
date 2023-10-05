import { render, screen } from "@testing-library/react";

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
		};

		const { container } = render(<ProductModal product={mokeProduct} />);

		expect(container).toMatchSnapshot();
	});
});
