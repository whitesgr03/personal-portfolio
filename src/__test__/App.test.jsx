import { render, screen } from "@testing-library/react";

import App from "../components/App";

	it("Should render App component with dark scheme", async () => {
		window.matchMedia = jest.fn(() => ({
			matches: true,
		}));
		const scheme = "dark";
		render(<App />);
		const element = await screen.findByTestId("app");
		expect(element).toHaveClass(scheme);
	});
	it("Should render App component with light scheme", async () => {
		window.matchMedia = jest.fn(() => ({
			matches: false,
		}));
		const scheme = "light";
		render(<App />);
		const element = await screen.findByTestId("app");
		expect(element).toHaveClass(scheme);
	});
});
