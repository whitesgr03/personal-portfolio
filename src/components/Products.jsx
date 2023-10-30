import PropTypes from "prop-types";

import { forwardRef, useState, useLayoutEffect } from "react";

import { getImageSize } from "../utils/handleGetImageSize";

import openNewTabIcon from "../image/open-in-new-icon.png";
import githubIcon from "../image/github-icon.png";

const Products = forwardRef(
	({ onShowProduct, productsImage, showModal, onLoad, onLoading }, ref) => {
		const [imageSize, setImageSize] = useState(null);

		useLayoutEffect(() => {
			const IMAGES_SIZE = [
				{
					device: "small",
					width: 628,
					height: 419,
				},
				{
					device: "large",
					width: 867,
					height: 578,
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
					viewPortWidth < 1024 ? getSize("small") : getSize("large")
				);
			};

			handleSetImageSize();

			window.addEventListener("resize", handleSetImageSize);

			return () => {
				window.removeEventListener("resize", handleSetImageSize);
			};
		}, []);

		return (
			<div id="products" className="products" ref={ref}>
				<h2>My Works</h2>
				<ul>
					{productsImage.map((product, index) => (
						<li key={product.id}>
							<button
								type="button"
								tabIndex={showModal ? "-1" : ""}
								aria-label="buttonForImage"
								onClick={() => onShowProduct(product)}
							>
								<div className="imageWrap">
									{index !== 0 && (
										<div className="imageLoading"></div>
									)}
									<img
										onLoad={e => {
											index !== 0
												? onLoad(e)
												: onLoading(false);
										}}
										sizes=" (min-width: 1024px) 30vw, (min-width: 900px) 60vw, (min-width: 768px) 70vw, (min-width: 600px) 80vw, 100vw"
										srcSet={`${product.image.preview.phone_small.url} 628w, ${product.image.preview.phone_large.url} 867w, ${product.image.preview.tablet.url} 1068w, ${product.image.preview.desktop_small.url} 1235w,  ${product.image.preview.laptop.url} 1378w,  ${product.image.preview.desktop_medium.url} 1561w,  ${product.image.preview.desktop_large.url} 1672w`}
										src={
											product.image.preview.phone_small
												.url
										}
										alt={product.name}
										loading={index > 0 ? "lazy" : "eager"}
										decoding={index > 0 ? "async" : "auto"}
										width={imageSize && imageSize.width}
										height={imageSize && imageSize.height}
									/>
								</div>
							</button>

							<article>
								<h3>
									<button
										type="button"
										tabIndex={showModal ? "-1" : ""}
										aria-label="buttonForTitle"
										onClick={() => onShowProduct(product)}
									>
										{product.name}
									</button>
								</h3>

								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Perspiciatis reprehenderit
									adipisci tenetur, rerum impedit ex atque
									fugiat repudiandae ad ipsum temporibus
									totam! Repudiandae iure nisi quidem unde
									laudantium, totam nobis!
								</p>

								<div className="link">
									<a
										href="#live"
										target="_blank"
										tabIndex={showModal ? "-1" : ""}
									>
										Live <span>(opens in new tab)</span>
										<img
											src={openNewTabIcon}
											alt=""
											width="20"
											height="20"
										/>
									</a>
									<a
										href="#source"
										target="_blank"
										tabIndex={showModal ? "-1" : ""}
									>
										Source <span>(opens in new tab)</span>
										<img
											src={githubIcon}
											alt=""
											width="20"
											height="20"
										/>
									</a>
								</div>
							</article>
						</li>
					))}
				</ul>
			</div>
		);
	}
);

Products.propTypes = {
	onShowProduct: PropTypes.func,
	productsImage: PropTypes.array,
	showModal: PropTypes.bool,
	onLoad: PropTypes.func,
	onLoading: PropTypes.func,
};

export default Products;
