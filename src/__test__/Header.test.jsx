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
});
