import { render, screen } from "@testing-library/react";

import Modal, { ProductModal } from "../components/Modal";

describe("Renders Modal Component", () => {
	it("should return modal DOM with show modal", () => {
		const mockShowProduct = true;
		render(<Modal showProduct={mockShowProduct} />);

		const element = screen.getByTestId("modal");

		expect(element).toHaveClass("show");
	});
	it("should return modal DOM without show modal", () => {
		const mockShowProduct = false;
		render(<Modal showProduct={mockShowProduct} />);

		const element = screen.getByTestId("modal");

		expect(element).not.toHaveClass("show");
	});
});

describe("Renders ProductModal Component", () => {
	it("Should return Footer DOM", () => {
		const { container } = render(<ProductModal />);

		expect(container).toMatchSnapshot();
	});
});
