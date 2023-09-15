import { forwardRef } from "react";

import openNewTabIcon from "../image/open-in-new-icon.png";
import githubIcon from "../image/github-icon.png";

const Products = forwardRef((props, ref) => {
	const { onShowProduct } = props;

	return (
		<div id="products" className="products" ref={ref}>
			<h2>
				My <span>Works</span>
			</h2>

			<ul>
				<li>
					<div className="wrap">
						<button
							type="button"
							onClick={e => onShowProduct(e, "product1")}
						>
						</button>
					</div>
					<article>
						<h3>
							<button
								type="button"
								onClick={e => onShowProduct(e, "product1")}
							>
								product1
							</button>
						</h3>

						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Perspiciatis reprehenderit adipisci tenetur,
							rerum impedit ex atque fugiat repudiandae ad ipsum
							temporibus totam! Repudiandae iure nisi quidem unde
							laudantium, totam nobis!
						</p>

						<div className="link">
							<a href="#live" target="_blank">
								Live
								<img
									src={openNewTabIcon}
									alt="live (opens in new tab)"
								/>
							</a>
							<a href="#source" target="_blank">
								Source
								<img
									src={githubIcon}
									alt="github (opens in new tab)"
								/>
							</a>
						</div>
					</article>
				</li>
				<li>
					<div className="wrap">
						<button
							type="button"
							onClick={e => onShowProduct(e, "product1")}
						>
						</button>
					</div>
					<article>
						<h3>
							<button
								type="button"
								onClick={e => onShowProduct(e, "product1")}
							>
								product2
							</button>
						</h3>

						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Quisquam optio quis dicta laborum
							reprehenderit iste asperiores doloremque labore
							molestiae delectus?
						</p>

						<div className="link">
							<a href="#live" target="_blank">
								Live
								<img
									src={openNewTabIcon}
									alt="live (opens in new tab)"
								/>
							</a>
							<a href="#source" target="_blank">
								Source
								<img
									src={githubIcon}
									alt="github (opens in new tab)"
								/>
							</a>
						</div>
					</article>
				</li>
			</ul>
		</div>
	);
});

export default Products;
