import { useState, useLayoutEffect, forwardRef } from "react";

import PropTypes from "prop-types";

const Modal = forwardRef(({ showModal, onCloseModal, children }, ref) => {
	const [isModalScroll, setIsModalScroll] = useState(false);
	const [disableModalScroll, setDisableModalScroll] = useState(false);
	const [touchPosition, setTouchPosition] = useState(null);

	const handleScroll = e =>
		e.target.clientHeight +
			e.target.scrollTop +
			e.target.firstElementChild.clientHeight +
			e.target.nextElementSibling.clientHeight >=
		e.target.scrollHeight -
			e.target.firstElementChild.clientHeight -
			e.target.nextElementSibling.clientHeight
			? setIsModalScroll(true)
			: setIsModalScroll(false);
	const handlePointerOver = () => setDisableModalScroll(true);
	const handlePointerOut = () => setDisableModalScroll(false);
	const handleTouchStart = e =>
		e.target.closest(".productModal") &&
		setTouchPosition(e.changedTouches[0].clientY);
	const handleTouchEnd = e =>
		e.target.closest(".modal").scrollTop <= 0 &&
		e.changedTouches[0].clientY - touchPosition > 150 &&
		onCloseModal();

	return (
		<div
			className={`modal ${showModal ? "show" : ""} ${
				isModalScroll ? "bgc" : ""
			} ${disableModalScroll ? "unScroll" : ""}`}
			onScroll={handleScroll}
			data-testid="modal"
			ref={ref}
			tabIndex="-1"
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
		>
			<div
				className="padding"
				onPointerOver={handlePointerOver}
				onPointerOut={handlePointerOut}
				data-testid="padding"
			>
				<button
					type="button"
					className="close"
					aria-label="close button"
				></button>
			</div>
			{children}
		</div>
	);
});

const ProductModal = ({ product, onLoad }) => {
	const [imageSize, setImageSize] = useState(null);
	useLayoutEffect(() => {
		const IMAGES_SIZE = [
			{
				device: "phone_small",
				width: 810,
				height: 540,
			},
			{
				device: "tablet",
				width: 1372,
				height: 915,
			},
			{
				device: "desktop_medium",
				width: 1905,
				height: 1270,
			},
		];

		const getSize = target =>
			IMAGES_SIZE.find(item => item.device === target);

		const handleSetImageSize = () => {
			const viewPortWidth = Math.max(
				document.documentElement.clientWidth || 0,
				window.innerWidth || 0
			);
			setImageSize(
				viewPortWidth < 900
					? getSize("phone_small")
					: viewPortWidth < 1700
					? getSize("tablet")
					: getSize("desktop_medium")
			);
			console.log("resize modal");
		};

		handleSetImageSize();

		window.addEventListener("resize", handleSetImageSize);

		return () => {
			window.removeEventListener("resize", handleSetImageSize);
		};
	}, []);
	return (
		product && (
			<div className="productModal" data-testid="productModal">
				<div className="describe">
					<h3>{product.name}</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Modi, voluptate.Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Modi, voluptate.Lorem
						ipsum dolor sit amet consectetur, adipisicing elit.
						Modi, voluptate.Lorem ipsum dolor sit amet consectetur,
						adipisicing elit. Modi, voluptate.Lorem ipsum dolor sit
						amet consectetur, adipisicing elit. Modi, voluptate.
					</p>
				</div>
				<ul>
					{product.image.pictures.map((picture, index) => (
						<li key={picture.id}>
							<div className="imageWrap">
								<div className="imageLoading"></div>
								<img
									sizes="(min-width: 900px) 80vw, (min-width: 500px) 90vw, 100vw"
									srcSet={`${picture.phone_small.url} 810w, ${picture.phone_large.url} 1088w, ${picture.tablet.url} 1324w, ${picture.desktop_small.url} 1587w,  ${picture.laptop.url} 1814w,  ${picture.desktop_medium.url} 2400w,`}
									src={picture.phone_small.url}
									alt={picture.id}
									loading={index > 0 ? "lazy" : "eager"}
									decoding={index > 0 ? "async" : "auto"}
									width={imageSize && imageSize.width}
									height={imageSize && imageSize.height}
									onLoad={onLoad}
								/>
							</div>
						</li>
					))}
				</ul>
			</div>
		)
	);
};

Modal.propTypes = {
	showModal: PropTypes.bool,
	onCloseModal: PropTypes.func,
	children: PropTypes.node,
};

ProductModal.propTypes = {
	product: PropTypes.object,
	onLoad: PropTypes.func,
};

export { Modal as default, ProductModal };
