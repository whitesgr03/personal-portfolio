import PropTypes from "prop-types";

import { forwardRef } from "react";

import openNewTabIcon from "../image/open-in-new-icon.png";
import githubIcon from "../image/github-icon.png";

const Products = forwardRef(
	(
		{
			onShowProduct,
			productsImage,
			showModal,
			imageSize,
			onLoad,
			onLoading,
		},
		ref
	) => {
		const handleLoad = (e, index) => {
			index === 0 && onLoading(false);
			onLoad(e);
		};

		return (
			<div id="products" className="products" ref={ref}>
				<h2>
					My <span>Works</span>
				</h2>
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
									<div className="imageLoading"></div>
									<img
										onLoad={e => handleLoad(e, index)}
										sizes="(max-width: 1920px) 100vw, 1920px"
										srcSet={`${product.image.preview.phone.url} 480w, ${product.image.preview.tablet.url} 1004w, ${product.image.preview.laptop.url} 1372w, ${product.image.preview.desktop.url} 1820w`}
										src={product.image.preview.desktop.url}
										alt={product.name}
										loading={index > 0 ? "lazy" : "eager"}
										decoding={index > 0 ? "async" : "auto"}
										width={imageSize?.width}
										height={imageSize?.height}
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
	imageSize: PropTypes.object,
	onLoad: PropTypes.func,
	onLoading: PropTypes.func,
};

export default Products;
