import { useState, useRef, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Products from "./Products";
import Modal from "./Modal";
import Contact from "./Contact";

const App = () => {
	const [darkTheme, setDarkTheme] = useState(
		window.matchMedia("(prefers-color-scheme: dark)")?.matches ?? false
	);
	const [allProducts, setAllProducts] = useState([]);
	const [product, setProduct] = useState(null);
	const appRef = useRef(null);
	const aboutRef = useRef(null);
	const productsRef = useRef(null);
	const modalRef = useRef(null);

	const handleChangeTheme = () => setDarkTheme(!darkTheme);

	const handleShowModal = (e, product) => {
		setShowProduct(true);
		// get product img
	};

	const handleIfShowProduct = e =>
		showProduct &&
		!e.target.closest(".productModal") &&
		!e.target.closest("header") &&
		handleCloseModal();

	const handleCloseModal = () => {
		setShowProduct(false);
		modalRef.current.scrollTop = 0;
	};

	useEffect(() => {
		showProduct && modalRef.current.focus();
	}, [showProduct]);

	return (
		<div
			className={`app ${darkTheme ? "dark" : "light"} ${
				showProduct ? "unScroll" : ""
			}`}
			onClick={handleIfShowProduct}
			data-testid="app"
			ref={appRef}
		>
			<Modal showProduct={showProduct} ref={modalRef} />
			<Header
				aboutRef={aboutRef}
				productsRef={productsRef}
				appRef={appRef}
				darkTheme={darkTheme}
				onChangeTheme={handleChangeTheme}
				showProduct={showProduct}
			/>
			<main>
				<div className={`backdrop ${showProduct ? "blur" : ""}`}></div>
				<div>
					<About ref={aboutRef} showProduct={showProduct} />
					<Products
						ref={productsRef}
						onShowProduct={handleShowModal}
						showProduct={showProduct}
					/>
					<Contact />
				</div>
			</main>
			<Footer showProduct={showProduct} />
		</div>
	);
};

export default App;
