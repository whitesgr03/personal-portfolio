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

		await user.click(buttonForImage);

		expect(mockShowProduct).toBeCalledTimes(1);

		const buttonForTitle = screen.getByRole("button", {
			name: "product1",
		});

		await user.click(buttonForTitle);

		expect(mockShowProduct).toBeCalledTimes(2);
	});
	it("Should disable button from being focused", () => {
		const mokeShowProduct = true;

		render(<Products showProduct={mokeShowProduct} />);

		const [firstButtonForImage] = screen.getAllByRole("button", {
			name: "buttonForImage",
		});
		const [firstButtonForTitle] = screen.getAllByRole("button", {
			name: "buttonForTitle",
		});
		const [firstLinkForLive] = screen.getAllByRole("link", {
			name: "Live (opens in new tab)",
		});
		const [firstLinkForSource] = screen.getAllByRole("link", {
			name: "Source (opens in new tab)",
		});

		expect(firstButtonForImage).toHaveAttribute("tabIndex", "-1");
		expect(firstButtonForTitle).toHaveAttribute("tabIndex", "-1");
		expect(firstLinkForLive).toHaveAttribute("tabIndex", "-1");
		expect(firstLinkForSource).toHaveAttribute("tabIndex", "-1");
	});
});
