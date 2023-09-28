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
	it("Should disable focus button", () => {
		const mokeShowProduct = true;

		render(<Header showProduct={mokeShowProduct} />);

		const titleButton = screen.getByRole("button", { name: "Bai" });
		const aboutButton = screen.getByRole("button", { name: "About" });
		const productsButton = screen.getByRole("button", {
			name: "Projects",
		});
		const themeButton = screen.getByRole("button", { name: "Theme" });

		expect(titleButton).toHaveAttribute("tabIndex", "-1");
		expect(aboutButton).toHaveAttribute("tabIndex", "-1");
		expect(productsButton).toHaveAttribute("tabIndex", "-1");
		expect(themeButton).toHaveAttribute("tabIndex", "-1");
	});
});
