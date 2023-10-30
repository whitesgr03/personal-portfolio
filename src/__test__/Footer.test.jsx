import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import Footer from "../components/Footer";

describe("Footer Component", () => {
	it("Should unable focus link when showModal is false", async () => {
		const user = userEvent.setup();
		const mockShowModal = false;

		render(<Footer showModal={mockShowModal} />);

		const link = screen.getByRole("link");

		expect(document.body).toHaveFocus();

		await user.tab();

		expect(link).toHaveFocus();
	});
	it("Should able focus link when showModal is true", async () => {
		const user = userEvent.setup();
		const mockShowModal = true;

		render(<Footer showModal={mockShowModal} />);

		const link = screen.getByRole("link");

		expect(document.body).toHaveFocus();

		await user.tab();

		expect(link).not.toHaveFocus();
	});
});
