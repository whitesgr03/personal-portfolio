import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Modal, { ProductModal } from "../components/Modal";

describe("Renders Modal Component", () => {
	it("should return modal DOM and display the modal", () => {
		const mockShowProduct = true;
		render(<Modal showProduct={mockShowProduct} />);

		const element = screen.getByTestId("modal");

		expect(element).toHaveClass("show");
	});
	it("should return modal DOM without showing the modal", () => {
		const mockShowProduct = false;
		render(<Modal showProduct={mockShowProduct} />);

		const element = screen.getByTestId("modal");

		expect(element).not.toHaveClass("show");
	});
	it("should close modal DOM with click", async () => {
		const mockCloseModal = jest.fn();
		const user = userEvent.setup();

		render(<Modal onCloseModal={mockCloseModal} />);

		const button = screen.getByRole("button");

		await user.pointer({ keys: "[MouseLeft]", target: button });

		expect(mockCloseModal).toBeCalledTimes(1);
	});
	// it("should disable scroll event when pointer over modal block", async () => {
	// 	const mockShowProduct = true;
	// 	const user = userEvent.setup();

	// 	render(<Modal showProduct={mockShowProduct} />);

	// const paddingBlock = screen.getByTestId("padding");
	// const modalBlock = screen.getByTestId("modal");

	// 	await waitFor(() => {
	// 		user.pointer([
	// 			{ keys: "[TouchA]", target: modalBlock },
	// 			{ pointerName: "TouchA", target: paddingBlock },
	// 			{ keys: "[/TouchA]" },
	// 		]);

	// 		expect(modalBlock).toHaveClass("modal", "show", "unScroll");
	// 	});
	// });
	// it("should trigger scroll event when pointer out modal block", async () => {
	// 	const mockShowProduct = true;
	// 	const user = userEvent.setup();

	// 	render(<Modal showProduct={mockShowProduct} />);

	// 	const modalBlock = screen.getByTestId("modal");
	// 	const paddingBlock = screen.getByTestId("padding");

	// 	await waitFor(() => {
	// 		user.pointer([
	// 			{ keys: "[TouchA]", target: modalBlock },
	// 			{ pointerName: "TouchA", target: paddingBlock },
	// 			{ pointerName: "TouchA", target: modalBlock },
	// 			{ keys: "[/TouchA]" },
	// 		]);

	// 		expect(modalBlock).not.toHaveClass("unScroll");
	// 	});
	// });
	// it("should change modal block background color with scroll", async () => {
	// 	const mockShowProduct = true;
	// 	render(<Modal showProduct={mockShowProduct} />);

	// 	// const modalBlock = screen.getByTestId("modal");
	// 	const paddingBlock = screen.getByTestId("padding");

	// 	// paddingBlock.height = 500;

	// 	// console.log(getComputedStyle(paddingBlock));
	// 	// await fireEvent.scroll(modalBlock, { target: { scrollTop: 400 } });

	// 	expect(paddingBlock).toHaveStyle("height: 200px");
	// 	// console.log(modalBlock.className);
	// });
});

describe("Renders ProductModal Component", () => {
	it("Should return Footer DOM", () => {
		const { container } = render(<ProductModal />);

		expect(container).toMatchSnapshot();
	});
});
