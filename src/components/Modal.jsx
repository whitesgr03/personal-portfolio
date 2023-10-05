import { useState, forwardRef } from "react";

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

const ProductModal = ({ product, imageSize, onLoad }) => {
	return (
		product && (
			<div className="productModal">
				<div className="describe">
					<h3>{product.name}</h3>
					<div>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Modi, voluptate.Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Modi, voluptate.Lorem
						ipsum dolor sit amet consectetur, adipisicing elit.
						Modi, voluptate.Lorem ipsum dolor sit amet consectetur,
						adipisicing elit. Modi, voluptate.Lorem ipsum dolor sit
						amet consectetur, adipisicing elit. Modi, voluptate.
					</div>
				</div>
				<ul>
					{product.image.pictures.map((picture, index) => (
						<li key={picture.id}>
							<div className="imageWrap">
								<div className="imageLoading"></div>
								<img
									sizes="(max-width: 1920px) 100vw, 1920px"
									srcSet={`${picture.phone.url} 480w, ${picture.tablet.url} 1004w, ${picture.laptop.url} 1372w, ${picture.desktop.url} 1820w`}
									src={picture.desktop.url}
									alt={product.name}
									loading={index > 0 ? "lazy" : "eager"}
									decoding={index > 0 ? "async" : "auto"}
									width={imageSize?.width}
									height={imageSize?.height}
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
	product: PropTypes.object,
	imageSize: PropTypes.object,
	onLoad: PropTypes.func,
};

ProductModal.propTypes = {
	product: PropTypes.object,
	imageSize: PropTypes.object,
	onLoad: PropTypes.func,
};

export { Modal as default, ProductModal };
