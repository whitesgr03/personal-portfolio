import { render } from "@testing-library/react";

import Contact from "../components/Contact";

describe("Contact Component", () => {
	it("Should render Contact component", () => {
		const { container } = render(<Contact />);

		expect(container).toMatchSnapshot();
	});
});
