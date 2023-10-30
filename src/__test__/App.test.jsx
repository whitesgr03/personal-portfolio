import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fireEvent } from "@testing-library/react";

import App from "../components/App";

jest.mock("../components/Header", () => ({ darkTheme, onChangeTheme }) => (
	<div>
		<button
			className={darkTheme ? "dark" : "light"}
			onClick={onChangeTheme}
			data-testid="changeTheme"
		>
			change
		</button>
	</div>
));

jest.mock("../components/Products", () => {
	const { forwardRef } = jest.requireActual("react");
	return {
		__esModule: true,
		default: forwardRef(({ onShowProduct, showModal, onLoad }, ref) => {
			return (
				<div>
					<button
						type="button"
						className={showModal ? "show" : ""}
						data-testid="showProduct"
						onClick={() => onShowProduct(null)}
					>
						<div>
							<div data-testid="sibling"></div>
							<img onLoad={onLoad} alt="" data-testid="image" />
						</div>
					</button>
				</div>
			);
		}),
	};
});

describe("App Component", () => {
	it("Should correctly handles changing Theme", async () => {
		window.matchMedia = jest.fn(() => ({
			matches: true,
		}));

		const user = userEvent.setup();

		render(<App />);

		const changeThemeButton = screen.getByTestId("changeTheme");

		await waitFor(async () => {
			await user.click(changeThemeButton);
		});
		expect(changeThemeButton).toHaveClass("light");
	});
	it("Should correctly handles load image", async () => {
		window.matchMedia = jest.fn(() => ({
			matches: true,
		}));

		render(<App />);

		const sibling = await screen.findByTestId("sibling");
		const image = await screen.findByTestId("image");

		fireEvent.load(image);

		expect(sibling).not.toBeVisible();
	});
	it("Should correctly handles showing product", async () => {
		window.matchMedia = jest.fn(() => ({
			matches: true,
		}));

		const user = userEvent.setup();

		render(<App />);

		const productsButton = screen.getByTestId("showProduct");

		expect(productsButton).not.toHaveClass("show");

		await waitFor(async () => {
			await user.click(productsButton);
		});

		expect(productsButton).toHaveClass("show");
	});
	it("Should close modal when app block is clicked", async () => {
		window.matchMedia = jest.fn(() => ({
			matches: true,
		}));

		const user = userEvent.setup();

		render(<App />);

		const appBlock = await screen.findByTestId("app");
		const productsButton = await screen.findByTestId("showProduct");

		expect(appBlock).not.toHaveClass("unScroll");

		await waitFor(async () => {
			await user.click(productsButton);
		});

		expect(appBlock).toHaveClass("unScroll");

		await waitFor(async () => {
			await user.click(appBlock);
		});

		expect(appBlock).not.toHaveClass("unScroll");
	});
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
