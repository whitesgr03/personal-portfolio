import { render, screen } from "@testing-library/react";

import App from "../components/App";

Object.defineProperty(window, "matchMedia", {
	writable: true,
	value: jest.fn().mockImplementation(query => ({
		matches: false,
		media: query,
		onchange: null,
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	})),
});

describe("Renders App Component", () => {
	it("Should return App DOM with dark scheme", async () => {
		window.matchMedia = jest.fn(() => ({
			matches: true,
		}));

		render(<App />);

		const element = await screen.findByTestId("app");
		const scheme = "dark";

		expect(element).toHaveClass(scheme);
	});
	it("Should return App DOM with light scheme", async () => {
		window.matchMedia = jest.fn(() => ({
			matches: false,
		}));

		render(<App />);

		const element = await screen.findByTestId("app");
		const scheme = "light";

		expect(element).toHaveClass(scheme);
	});
});
