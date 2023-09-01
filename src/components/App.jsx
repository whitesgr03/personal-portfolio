import { useState } from "react";

import Header from "./Header";
const App = () => {
	const [darkTheme, setDarkTheme] = useState(
		window.matchMedia("(prefers-color-scheme: dark)")
	);

	const handleChangeTheme = () => setDarkTheme(!darkTheme);

	return (
		<div className={`app ${darkTheme ? "dark" : "light"}`}>
		</div>
	);
};

export default App;
