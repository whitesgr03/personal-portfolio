import { render, screen } from "@testing-library/react";

import Header from "../components/Header";

describe("Renders Header Component", () => {
	it("Should return Header DOM with dark Theme", () => {
		const mockDarkTheme = true;

		render(<Header darkTheme={mockDarkTheme} />);

		const button = screen.getByRole("button", { name: "Theme" });

		expect(button).toHaveClass("dark");
	});
	it("Should return Header DOM with light Theme", () => {
		const mockDarkTheme = false;

		render(<Header darkTheme={mockDarkTheme} />);

		expect(screen.getByRole("button", { name: "Theme" })).toHaveClass(
			"light"
		);
	});
	// it("Should scroll to 'about' block with pointerDown", async () => {
	// 	const mockDarkTheme = false;
	// 	const mockScrollIntoView = jest.fn();
	// 	const mockScroll = jest.fn();

	// 	window.scrollTo = mockScroll;

	// 	const mockAboutRef = {
	// 		current: {
	// 			scrollIntoView: mockScrollIntoView,
	// 		},
	// 	};

	// 	const user = userEvent.setup();

	// 	render(<Header aboutRef={mockAboutRef} darkTheme={mockDarkTheme} />);

	// 	const link = screen.getByRole("link", { name: "About" });

	// 	await user.pointer({ keys: "[MouseLeft]", target: link });

	// 	expect(mockScrollIntoView).toBeCalledTimes(1);
	// });
	// it("Should scroll to 'products' block with pointerDown", async () => {
	// 	const mockDarkTheme = false;
	// 	const mockScrollIntoView = jest.fn();
	// 	const mockScroll = jest.fn();

	// 	const mockProductsRef = {
	// 		current: {
	// 			scrollIntoView: mockScrollIntoView,
	// 		},
	// 	};
	// 	window.scrollTo = mockScroll;

	// 	const user = userEvent.setup();

	// 	render(
	// 		<Header productsRef={mockProductsRef} darkTheme={mockDarkTheme} />
	// 	);

	// 	const link = screen.getByRole("link", { name: "Projects" });

	// 	await user.pointer({ keys: "[MouseLeft]", target: link });

	// 	expect(mockScrollIntoView).toBeCalledTimes(1);
	// });
	// it("Should scroll to top with pointerDown", async () => {
	// 	const mockDarkTheme = false;
	// 	const mockScroll = jest.fn();

	// 	window.scrollTo = mockScroll;

	// 	const user = userEvent.setup();

	// 	render(<Header darkTheme={mockDarkTheme} />);

	// 	const link = screen.getByRole("link", { name: "Bai" });

	// 	await user.pointer({ keys: "[MouseLeft]", target: link });

	// 	expect(mockScroll).toBeCalledTimes(1);
	// });
});
