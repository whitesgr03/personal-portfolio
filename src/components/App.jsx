import { useState, useRef } from "react";

import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";

const App = () => {
	const aboutRef = useRef(null);
	const productsRef = useRef(null);

	const [darkTheme, setDarkTheme] = useState(
		window.matchMedia("(prefers-color-scheme: dark)")
	);

	const handleChangeTheme = () => setDarkTheme(!darkTheme);

	return (
		<div className={`app ${darkTheme ? "dark" : "light"}`}>
			<Header
				aboutRef={aboutRef}
				productsRef={productsRef}
				darkTheme={darkTheme}
				onChangeTheme={handleChangeTheme}
			/>
			<main>
				<About ref={aboutRef} />
				<Products ref={productsRef} />
				<Contact />
			</main>
			<Footer />
		</div>
	);
};

export default App;
