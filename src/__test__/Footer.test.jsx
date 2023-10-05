import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import Footer from "../components/Footer";

describe("Renders Footer Component", () => {
	it("Should press the Tab key to focus an link", async () => {

		render(<Footer showModal={mokeShowModal} />);

		const link = screen.getByRole("link");
		expect(link).toHaveAttribute("tabIndex", "");
	});
	it("Should disable tab key to focus an link", async () => {

		render(<Footer showModal={mokeShowModal} />);

		const link = screen.getByRole("link");
		expect(link).toHaveAttribute("tabIndex", "-1");
	});
});
