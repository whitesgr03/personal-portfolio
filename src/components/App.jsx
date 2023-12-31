import { useState, useRef, useEffect } from "react";

import { getAvatar, getProductImages } from "../utils/handleFetchImages";

import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Products from "./Products";
import Modal, { ProductModal } from "./Modal";
import Contact from "./Contact";

import Icon from "@mdi/react";
import { mdiLoading } from "@mdi/js";

const App = () => {
	const [darkTheme, setDarkTheme] = useState(
		window.matchMedia("(prefers-color-scheme: dark)")?.matches ?? false
	);
	const [productsImage, setProductsImage] = useState([]);
	const [avatar, setAvatar] = useState(null);

	const [product, setProduct] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [loading, setLoading] = useState(true);

	const appRef = useRef(null);
	const aboutRef = useRef(null);
	const productsRef = useRef(null);
	const modalRef = useRef(null);

	const handleChangeTheme = () => setDarkTheme(!darkTheme);

	const handleShowProduct = product => {
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
		product &&
			(() => {
				modalRef.current.scrollTop = 0;
			})();
	};

	const handleLoad = e => (e.target.previousElementSibling.hidden = true);

	useEffect(() => {
		product && modalRef.current.focus();
	}, [product]);

	useEffect(() => {
		let ignore = false;
		(async () => {
			const fakeAvatar = await getAvatar();
			fakeAvatar && !ignore && setAvatar(fakeAvatar);
		})();
		return () => {
			ignore = true;
		};
	}, []);

	useEffect(() => {
		let ignore = false;
		(async () => {
			const fakeProducts = await getProductImages();
			fakeProducts && !ignore && setProductsImage(fakeProducts);
		})();
		return () => {
			ignore = true;
		};
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
			<div className="loading" hidden={!loading}>
				<Icon path={mdiLoading} spin={1} size={3} />
				Loading...
			</div>
			<Modal
				ref={modalRef}
				onCloseModal={handleCloseModal}
				showModal={showModal}
			>
				<ProductModal product={product} onLoad={handleLoad} />
			</Modal>
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
					<About
						ref={aboutRef}
						showModal={showModal}
						avatar={avatar}
						onLoad={handleLoad}
					/>
					<Products
						ref={productsRef}
						onShowProduct={handleShowProduct}
						productsImage={productsImage}
						showModal={showModal}
						onLoad={handleLoad}
						onLoading={setLoading}
					/>
					<Contact />
				</div>
			</main>
			<Footer showModal={showModal} />
		</div>
	);
};

export default App;
