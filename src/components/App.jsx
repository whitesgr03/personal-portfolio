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

	const getProducts = () => {
		const fakeProducts = [
			{
				id: "project1",
				name: "project1",
				image: {
					preview: {
						url: {
							phone: "https://fakeimg.pl/480x320/195c86/",
							table: "https://fakeimg.pl/1004x669/195c86/",
							laptop: "https://fakeimg.pl/1372x915/195c86/",
							desktop: "https://fakeimg.pl/1820x1213/195c86/",
						},
					},
					pictures: [
						{
							id: "project1-picture1",
							url: {
								phone: "https://fakeimg.pl/480x320/195c86/",
								table: "https://fakeimg.pl/1004x669/195c86/",
								laptop: "https://fakeimg.pl/1372x915/195c86/",
								desktop: "https://fakeimg.pl/1820x1213/195c86/",
							},
						},
						{
							id: "project1-picture2",
							url: {
								phone: "https://fakeimg.pl/480x320/195c86/",
								table: "https://fakeimg.pl/1004x669/195c86/",
								laptop: "https://fakeimg.pl/1372x915/195c86/",
								desktop: "https://fakeimg.pl/1820x1213/195c86/",
							},
						},
						{
							id: "project1-picture3",
							url: {
								phone: "https://fakeimg.pl/480x320/195c86/",
								table: "https://fakeimg.pl/1004x669/195c86/",
								laptop: "https://fakeimg.pl/1372x915/195c86/",
								desktop: "https://fakeimg.pl/1820x1213/195c86/",
							},
						},
					],
				},
			},
			{
				id: "project2",
				name: "project2",
				image: {
					preview: {
						url: {
							phone: "https://fakeimg.pl/480x320/195c86/",
							table: "https://fakeimg.pl/1004x669/195c86/",
							laptop: "https://fakeimg.pl/1372x915/195c86/",
							desktop: "https://fakeimg.pl/1820x1213/195c86/",
						},
					},
					pictures: [
						{
							id: "project2-picture1",
							url: {
								phone: "https://fakeimg.pl/480x320/195c86/",
								table: "https://fakeimg.pl/1004x669/195c86/",
								laptop: "https://fakeimg.pl/1372x915/195c86/",
								desktop: "https://fakeimg.pl/1820x1213/195c86/",
							},
						},
						{
							id: "project2-picture2",
							url: {
								phone: "https://fakeimg.pl/480x320/195c86/",
								table: "https://fakeimg.pl/1004x669/195c86/",
								laptop: "https://fakeimg.pl/1372x915/195c86/",
								desktop: "https://fakeimg.pl/1820x1213/195c86/",
							},
						},
						{
							id: "project2-picture3",
							url: {
								phone: "https://fakeimg.pl/480x320/195c86/",
								table: "https://fakeimg.pl/1004x669/195c86/",
								laptop: "https://fakeimg.pl/1372x915/195c86/",
								desktop: "https://fakeimg.pl/1820x1213/195c86/",
							},
						},
					],
				},
			},
		];

		return fakeProducts;
	};

	useEffect(() => {
		product && modalRef.current.focus();
	}, [product]);

	useEffect(() => {
		(async () => {
			const fakeResult = await getProducts();

			if (!fakeResult) {
				return;
			}

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
			<Modal showModal={showModal} product={product} ref={modalRef} />
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
