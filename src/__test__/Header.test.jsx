import { render, screen } from "@testing-library/react";

import Header from "../components/Header";

describe("Renders Header Component", () => {
	it("Should return button icon with dark Theme", () => {
		const mockDarkTheme = true;

		render(<Header darkTheme={mockDarkTheme} />);

		const button = screen.getByRole("button", { name: "Theme" });

		expect(button).toHaveClass("dark");
	});
	it("Should return button icon with light Theme", () => {
		const mockDarkTheme = false;

		render(<Header darkTheme={mockDarkTheme} />);

		const button = screen.getByRole("button", { name: "Theme" });

		expect(button).toHaveClass("light");
	});
	it("Should unable focus button", () => {
		const mockShowModal = true;

		render(<Header showModal={mockShowModal} />);

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
