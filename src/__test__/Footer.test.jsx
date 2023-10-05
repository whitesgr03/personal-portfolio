import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import Footer from "../components/Footer";

describe("Renders Footer Component", () => {
	it("Should press the Tab key to focus an link", async () => {
		const user = userEvent.setup();
		const mockShowModal = false;

		render(<Footer showModal={mokeShowModal} />);

		const link = screen.getByRole("link");

		expect(document.body).toHaveFocus();

		await user.tab();

		expect(link).toHaveFocus();
	});
	it("Should disable tab key to focus an link", async () => {
		const user = userEvent.setup();
		const mockShowModal = true;

		render(<Footer showModal={mokeShowModal} />);

		const link = screen.getByRole("link");

		expect(document.body).toHaveFocus();

		await user.tab();

		expect(link).not.toHaveFocus();
	});
});
