import { useState, forwardRef } from "react";

import PropTypes from "prop-types";

const Modal = forwardRef(({ showModal,
}, ref) => {
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
			<ProductModal />
		</div>
	);
});

const ProductModal = () => (
	<div className="productModal">
		<div className="describe">
			<h3>Product 1 Product 1 Product 1</h3>
			<div>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
				voluptate.Lorem ipsum dolor sit amet consectetur, adipisicing
				elit. Modi, voluptate.Lorem ipsum dolor sit amet consectetur,
				adipisicing elit. Modi, voluptate.Lorem ipsum dolor sit amet
				consectetur, adipisicing elit. Modi, voluptate.Lorem ipsum dolor
				sit amet consectetur, adipisicing elit. Modi, voluptate.
			</div>
		</div>
		<ul>
			<li>
				<img
					sizes="(max-width: 1920px) 100vw, 1920px"
					srcSet={`https://fakeimg.pl/480x320/195c86/ 480w, https://fakeimg.pl/1004x669/195c86/ 1004w,https://fakeimg.pl/1372x915/195c86/ 1372w,https://fakeimg.pl/1820x1213/195c86/ 1820w`}
					src="https://fakeimg.pl/1920x1280/195c86/"
					alt="product1"
				/>
			</li>
			<li>
				<img
					sizes="(max-width: 1920px) 100vw, 1920px"
					srcSet={`https://fakeimg.pl/480x320/195c86/ 480w, https://fakeimg.pl/1004x669/195c86/ 1004w,https://fakeimg.pl/1372x915/195c86/ 1372w,https://fakeimg.pl/1820x1213/195c86/ 1820w`}
					src="https://fakeimg.pl/1920x1280/195c86/"
					alt="product1"
				/>
			</li>
		</ul>
	</div>
);

Modal.propTypes = {
	showModal: PropTypes.bool,
};
};

export { Modal as default, ProductModal };
