import { render, screen } from "@testing-library/react";

import Footer from "../components/Footer";

describe("Renders Footer Component", () => {
	it("Should return Footer DOM", () => {
		const { container } = render(<Footer />);

		expect(container).toMatchSnapshot();
	});
	it("Should disable link from being focused", () => {
		const mokeShowProduct = true;

		render(<Footer showProduct={mokeShowProduct} />);

		const link = screen.getByRole("link");
		expect(link).toHaveAttribute("tabIndex", "-1");
	});
});
