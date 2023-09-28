import { render, screen } from "@testing-library/react";

import Footer from "../components/Footer";

describe("Renders Footer Component", () => {
	it("Should be able to focus link", () => {
		const mokeShowModal = false;

		render(<Footer showModal={mokeShowModal} />);

		const link = screen.getByRole("link");
		expect(link).toHaveAttribute("tabIndex", "");
	});
	it("Should disable focus link", () => {
		const mokeShowModal = true;

		render(<Footer showModal={mokeShowModal} />);

		const link = screen.getByRole("link");
		expect(link).toHaveAttribute("tabIndex", "-1");
	});
});
