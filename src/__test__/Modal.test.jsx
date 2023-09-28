import { render, screen } from "@testing-library/react";

import Modal, { ProductModal } from "../components/Modal";

describe("Renders Modal Component", () => {
	it("should return modal DOM with show modal", () => {
		const mokeShowModal = true;
		render(<Modal showModal={mokeShowModal} />);

		const element = screen.getByTestId("modal");

		expect(element).toHaveClass("show");
	});
	it("should return modal DOM without show modal", () => {
		const mokeShowModal = false;
		render(<Modal showModal={mokeShowModal} />);

		const element = screen.getByTestId("modal");

		expect(element).not.toHaveClass("show");
	});
});

describe("Renders ProductModal Component", () => {
	it("Should return ProductModal DOM", () => {
		const mokeProduct = {
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
