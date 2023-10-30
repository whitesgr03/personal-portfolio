import { render, screen } from "@testing-library/react";

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
