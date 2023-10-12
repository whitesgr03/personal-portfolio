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
	it("Should return src property of the img tag", () => {
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
	it("Should return 150px width and height properties of the img tag", () => {
		const mockImageSize = {
			width: 1004,
		};

		render(<About imageSize={mockImageSize} />);

		const image = screen.getByRole("img");

		expect(image).toHaveAttribute("width", "150");
		expect(image).toHaveAttribute("height", "150");
	});
	it("Should return 250px width and height properties of the img tag", () => {
		const mockImageSize = {
			width: 1372,
		};

		render(<About imageSize={mockImageSize} />);

		const image = screen.getByRole("img");

		expect(image).toHaveAttribute("width", "250");
		expect(image).toHaveAttribute("height", "250");
	});
	it("Should call the function through the load event", async () => {
		const mockOnload = jest.fn();

		render(<About onLoad={mockOnload} />);

		const image = screen.getByRole("img");

		fireEvent.load(image);

		expect(mockOnload).toBeCalledTimes(1);
	});
});
