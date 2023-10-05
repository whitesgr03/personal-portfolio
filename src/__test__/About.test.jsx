import { render, screen } from "@testing-library/react";

import { fireEvent } from "@testing-library/react";

import About from "../components/About";

describe("Renders Footer Component", () => {
	it("Should able link from being focused", () => {
		const mockShowModal = false;

		render(<About showModal={mockShowModal} />);

		const link = screen.getByRole("link");
		expect(link).toHaveAttribute("tabIndex", "");
	});
	it("Should unable link from being focused", () => {
		const mockShowModal = true;

		render(<About showModal={mockShowModal} />);

		const link = screen.getByRole("link");
		expect(link).toHaveAttribute("tabIndex", "-1");
	});
});
