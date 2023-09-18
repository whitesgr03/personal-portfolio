import { useState, useRef } from "react";

import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Products from "./Products";
import Modal from "./Modal";
import Contact from "./Contact";

const App = () => {
	const [showProduct, setShowProduct] = useState(false);
	const aboutRef = useRef(null);
	const productsRef = useRef(null);

	const [darkTheme, setDarkTheme] = useState(
		window.matchMedia("(prefers-color-scheme: dark)")
	);

	const handleChangeTheme = () => setDarkTheme(!darkTheme);

	const handleShowModal = (e, product) => {
		setShowProduct(true);
		// get product img
	};

	const handleIfShowProduct = e => showProduct && handleCloseModal(e.target);

	const handleCloseModal = target =>
		!target.closest(".productModal") &&
		!target.closest("header") &&
		setShowProduct(false);

	return (
		<div className={`app ${darkTheme ? "dark" : "light"}`}>
			<Modal
				showProduct={showProduct}
				onCloseModal={handleCloseModal}
			/>
			<Header
				aboutRef={aboutRef}
				productsRef={productsRef}
				darkTheme={darkTheme}
				onChangeTheme={handleChangeTheme}
			/>
			<main>
				<div
					className={`backdrop ${showProduct ? "blur" : ""}`}
					onClick={handleCloseModal}
				></div>
				<div>
					<About ref={aboutRef} />
					<Products
						ref={productsRef}
						onShowProduct={handleShowModal}
					/>
					<Contact />
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default App;
