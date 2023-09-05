import { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Products from "./Products";

const App = () => {
	const [darkTheme, setDarkTheme] = useState(
		window.matchMedia("(prefers-color-scheme: dark)")
	);

	const handleChangeTheme = () => setDarkTheme(!darkTheme);

	return (
		<div className={`app ${darkTheme ? "dark" : "light"}`}>
			<Header darkTheme={darkTheme} onChangeTheme={handleChangeTheme} />
			<main>
				<About />
				<Products />
			</main>
			<Footer />
		</div>
	);
};

export default App;
