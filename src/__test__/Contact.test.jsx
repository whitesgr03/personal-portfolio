import { render } from "@testing-library/react";

import Contact from "../components/Contact";

describe("Renders Footer Component", () => {
	it("Should return Footer DOM", () => {
		const { container } = render(<Contact />);

		expect(container).toMatchSnapshot();
	});
});
