import { useState, useRef, useEffect } from "react";

import { getAvatar, getProductImages } from "../utils/handleFetchImages";

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
	const [showModal, setShowModal] = useState(false);

	const appRef = useRef(null);
	const aboutRef = useRef(null);
	const productsRef = useRef(null);
	const modalRef = useRef(null);

	const handleChangeTheme = () => setDarkTheme(!darkTheme);

	const handleShowModal = product => {
		setProduct(product);
		setShowModal(true);
	};

	const handleIfShowProduct = e =>
		showModal &&
		!e.target.closest(".productModal") &&
		!e.target.closest("header") &&
		handleCloseModal();

	const handleCloseModal = () => {
		setShowModal(false);
		modalRef.current.scrollTop = 0;
	};

	useEffect(() => {
		product && modalRef.current.focus();
	}, [product]);

	useEffect(() => {
		(async () => {
			const fakeResult = await getProducts();
			fakeResult && setAllProducts(fakeResult);
		})();
	}, []);

	return (
		<div
			className={`app ${darkTheme ? "dark" : "light"} ${
				showModal ? "unScroll" : ""
			}`}
			onClick={handleIfShowProduct}
			data-testid="app"
			ref={appRef}
		>
			<Modal
				onCloseModal={handleCloseModal}
				showModal={showModal}
				product={product}
				ref={modalRef}
			/>
			<Header
				aboutRef={aboutRef}
				productsRef={productsRef}
				appRef={appRef}
				darkTheme={darkTheme}
				onChangeTheme={handleChangeTheme}
				showModal={showModal}
			/>
			<main>
				<div className={`backdrop ${showModal ? "blur" : ""}`}></div>
				<div>
					<About ref={aboutRef} showModal={showModal} />
					<Products
						ref={productsRef}
						onShowProduct={handleShowModal}
						allProducts={allProducts}
						showModal={showModal}
					/>
					<Contact />
				</div>
			</main>
			<Footer showModal={showModal} />
		</div>
	);
};

export default App;
