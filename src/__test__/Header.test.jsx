import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import Header from "../components/Header";

describe("Header Component", () => {
	it("Should render button icon with dark Theme", () => {
		const mockDarkTheme = true;

		render(<Header darkTheme={mockDarkTheme} />);

		const button = screen.getByRole("button", { name: "Theme" });

		expect(button).toHaveClass("dark");
	});
	it("Should render button icon with light Theme", () => {
		const mockDarkTheme = false;

		render(<Header darkTheme={mockDarkTheme} />);

		const button = screen.getByRole("button", { name: "Theme" });

		expect(button).toHaveClass("light");
	});
	it("Should able focus button when showModal is true", async () => {
		const user = userEvent.setup();
		const mockShowModal = false;

		render(<Header showModal={mockShowModal} />);

		const titleButton = screen.getByRole("button", {
			name: "Bai",
		});
		const aboutButton = screen.getByRole("button", {
			name: "About",
		});
		const productsButton = screen.getByRole("button", {
			name: "Projects",
		});
		const themeButton = screen.getByRole("button", {
			name: "Theme",
		});

		expect(document.body).toHaveFocus();

		await user.tab();
		expect(titleButton).toHaveFocus();

		await user.tab();
		expect(aboutButton).toHaveFocus();

		await user.tab();
		expect(productsButton).toHaveFocus();

		await user.tab();
		expect(themeButton).toHaveFocus();
	});
	it("Should unable focus button when showModal is false", async () => {
		const user = userEvent.setup();
		const mockShowModal = true;

		render(<Header showModal={mockShowModal} />);

		const titleButton = screen.getByRole("button", {
			name: "Bai",
		});
		const aboutButton = screen.getByRole("button", {
			name: "About",
		});
		const productsButton = screen.getByRole("button", {
			name: "Projects",
		});
		const themeButton = screen.getByRole("button", {
			name: "Theme",
		});

		expect(document.body).toHaveFocus();

		await user.tab();
		expect(titleButton).not.toHaveFocus();

		await user.tab();
		expect(aboutButton).not.toHaveFocus();

		await user.tab();
		expect(productsButton).not.toHaveFocus();

		await user.tab();
		expect(themeButton).not.toHaveFocus();
	});
	it("Should change theme with click", async () => {
		const user = userEvent.setup();
		const mockOnChangeTheme = jest.fn();

		render(<Header onChangeTheme={mockOnChangeTheme} />);

		const button = screen.getByRole("button", { name: "Theme" });

		await user.click(button);

		expect(mockOnChangeTheme).toBeCalledTimes(1);
	});
});
