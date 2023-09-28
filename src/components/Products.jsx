import PropTypes from "prop-types";

import { forwardRef } from "react";

import openNewTabIcon from "../image/open-in-new-icon.png";
import githubIcon from "../image/github-icon.png";

const Products = forwardRef(
	({ onShowProduct, allProducts, showModal }, ref) => {
		return (
			<div id="products" className="products" ref={ref}>
				<h2>
					My <span>Works</span>
				</h2>
				<ul>
					{allProducts.map(product => (
						<li key={product.id}>
							<button
								type="button"
								tabIndex={showModal ? "-1" : ""}
								aria-label="buttonForImage"
								onClick={() => onShowProduct(product)}
								className="test"
							>
								<div className="wrap">
									<img
										sizes="(max-width: 1920px) 100vw, 1920px"
										srcSet={`${product.image.preview.url.phone} 480w, ${product.image.preview.url.table} 1004w, ${product.image.preview.url.laptop} 1372w, ${product.image.preview.url.desktop} 1820w`}
										src={product.image.preview.url.desktop}
										alt={product.name}
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
										Live
										<img
											src={openNewTabIcon}
											alt="(opens in new tab)"
										/>
									</a>
									<a
										href="#source"
										target="_blank"
										tabIndex={showModal ? "-1" : ""}
									>
										Source
										<img
											src={githubIcon}
											alt="(opens in new tab)"
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
	allProducts: PropTypes.array,
	showModal: PropTypes.bool,
};

export default Products;
