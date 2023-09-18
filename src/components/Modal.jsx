import { useState } from "react";
const Modal = ({ showProduct, onIfShowProduct }) => {
	return (
		<div className={`modal ${showProduct ? "show" : ""}`}>
			<ProductModal onCloseModal={onCloseModal} />
		</div>
	);
};

const ProductModal = ({ onCloseModal }) => (
	<div className="productModal">
		<button type="button" className="close" onClick={onCloseModal}></button>
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
export default Modal;
