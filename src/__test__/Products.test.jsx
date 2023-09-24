import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Products from "../components/Products";

describe("Renders Products Component", () => {
	it("should return Products DOM", () => {
		const { container } = render(<Products />);

		expect(container).toMatchSnapshot();
	});

	it("should display the modal with pointerDown", async () => {
		const mockShowProduct = jest.fn();
		const user = userEvent.setup();

		render(<Products onShowProduct={mockShowProduct} />);

		const buttonForImage = screen.getByRole("button", {
			name: "buttonForImage",
		});

		await user.pointer({ keys: "[MouseLeft]", target: buttonForImage });

		expect(mockShowProduct).toBeCalledTimes(1);

		const buttonForTitle = screen.getByRole("button", {
			name: "buttonForTitle",
		});

		await user.pointer({ keys: "[MouseLeft]", target: buttonForTitle });

		expect(mockShowProduct).toBeCalledTimes(2);
	});
});