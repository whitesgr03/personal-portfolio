import { useState, forwardRef } from "react";

import PropTypes from "prop-types";

const Modal = forwardRef(({ showModal, product }, ref) => {
	const [isModalScroll, setIsModalScroll] = useState(false);
	const [disableModalScroll, setDisableModalScroll] = useState(false);

	const handlePointerOver = () => setDisableModalScroll(true);
	const handlePointerOut = () => setDisableModalScroll(false);

	const handleScroll = e => {
		e.target.scrollTop > e.target.firstElementChild.clientHeight
			? setIsModalScroll(true)
			: setIsModalScroll(false);
	};

	return (
		<div
			className={`modal ${showModal ? "show" : ""} ${
				isModalScroll ? "bgc" : ""
			} ${disableModalScroll ? "unScroll" : ""}`}
			onScroll={handleScroll}
			data-testid="modal"
			ref={ref}
			tabIndex="-1"
		>
			<div
				className="padding"
				onPointerOver={handlePointerOver}
				onPointerOut={handlePointerOut}
				data-testid="padding"
			>
				<button type="button" className="close"></button>
			</div>
			<ProductModal product={product} />
		</div>
	);
});

const ProductModal = ({ product }) => {
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
					{product.image.pictures.map(picture => (
						<li key={picture.id}>
							<img
								sizes="(max-width: 1920px) 100vw, 1920px"
								srcSet={`${picture.url.phone} 480w, ${picture.url.table} 1004w, ${picture.url.laptop} 1372w, ${picture.url.desktop} 1820w`}
								src={picture.url.desktop}
								alt={product.name}
							/>
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
};

ProductModal.propTypes = {
	product: PropTypes.object,
};

export { Modal as default, ProductModal };
