import { render, screen } from "@testing-library/react";

import { fireEvent } from "@testing-library/react";

import About from "../components/About";

describe("About Component", () => {
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
	it("Should render src property of the img tag when providing avatar prop", () => {
		const mockAvatar = {
			phone_small: {
				url: "../",
			},
			phone_large: {
				url: "../",
			},
			desktop_small: {
				url: "../",
			},
			laptop: {
				url: "../",
			},
			desktop_medium: {
				url: "../",
			},
			desktop_large: {
				url: "../",
			},
		};

		render(<About avatar={mockAvatar} />);

		const image = screen.getByRole("img");

		expect(image).toHaveAttribute("src", mockAvatar.phone_small.url);
	});
	it("Should call the function through the load event", async () => {
		const mockOnload = jest.fn();

		render(<About onLoad={mockOnload} />);

		const image = screen.getByRole("img");

		fireEvent.load(image);

		expect(mockOnload).toBeCalledTimes(1);
	});
});
