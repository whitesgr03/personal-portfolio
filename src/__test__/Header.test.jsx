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
	it("Should scroll to target when button is clicked", async () => {
		const user = userEvent.setup();

		const mockScrollIntoView = jest.fn();
		const mockContains = jest.fn();

		mockContains.mockReturnValueOnce(true).mockReturnValue(false);

		const ref = {
			current: {
				scrollIntoView: mockScrollIntoView,
				classList: {
					contains: mockContains,
				},
			},
		};

		render(<Header appRef={ref} aboutRef={ref} productsRef={ref} />);

		const scrollToTopButton = screen.getByRole("button", { name: "Bai" });
		const scrollToAboutButton = screen.getByRole("button", {
			name: "About",
		});
		const scrollToProjectsButton = screen.getByRole("button", {
			name: "Projects",
		});

		await user.click(scrollToTopButton);

		expect(mockScrollIntoView).toBeCalledTimes(0);

		await user.click(scrollToAboutButton);

		expect(mockScrollIntoView).toBeCalledTimes(1);

		await user.click(scrollToProjectsButton);

		expect(mockScrollIntoView).toBeCalledTimes(2);
	});
});
