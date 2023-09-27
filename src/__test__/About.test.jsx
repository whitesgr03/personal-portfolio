import { render, screen } from "@testing-library/react";

import About from "../components/About";

describe("Renders Footer Component", () => {
	it("Should return Footer DOM", () => {
		const mokeShowProduct = false;

		render(<About showProduct={mokeShowProduct} />);

		const link = screen.getByRole("link");
		expect(link).toHaveAttribute("tabIndex", "");
	});
	it("Should disable link from being focused", () => {
		const mokeShowProduct = true;

		render(<About showProduct={mokeShowProduct} />);

		const link = screen.getByRole("link");
		expect(link).toHaveAttribute("tabIndex", "-1");
	});
});
