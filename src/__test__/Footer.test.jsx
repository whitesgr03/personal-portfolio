import { render, screen } from "@testing-library/react";

import Footer from "../components/Footer";

describe("Renders Footer Component", () => {
	it("Should be able to focus link", () => {

		expect(container).toMatchSnapshot();
	});
	it("Should disable focus link", () => {
		const mokeShowProduct = true;

		render(<Footer showProduct={mokeShowProduct} />);

		const link = screen.getByRole("link");
		expect(link).toHaveAttribute("tabIndex", "-1");
	});
});
