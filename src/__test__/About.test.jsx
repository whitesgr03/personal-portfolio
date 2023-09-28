import { render, screen } from "@testing-library/react";

import About from "../components/About";

describe("Renders Footer Component", () => {
	it("Should able link from being focused", () => {
		const mokeShowModal = false;

		render(<About showModal={mokeShowModal} />);

		const link = screen.getByRole("link");
		expect(link).toHaveAttribute("tabIndex", "");
	});
	it("Should disable link from being focused", () => {
		const mokeShowModal = true;

		render(<About showModal={mokeShowModal} />);

		const link = screen.getByRole("link");
		expect(link).toHaveAttribute("tabIndex", "-1");
	});
});
