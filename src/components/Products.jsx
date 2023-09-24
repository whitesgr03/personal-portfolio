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
							aria-label="buttonForImage"
							onPointerDown={e => onShowProduct(e, "product1")}
						>
							<img
								sizes="(max-width: 1920px) 100vw, 1920px"
								srcSet={`https://fakeimg.pl/480x320/195c86/ 480w, https://fakeimg.pl/1004x669/195c86/ 1004w,https://fakeimg.pl/1372x915/195c86/ 1372w,https://fakeimg.pl/1820x1213/195c86/ 1820w`}
								src="https://fakeimg.pl/1920x1280/195c86/"
								alt="product1"
							/>
						</button>
					</div>
					<article>
						<h3>
							<button
								type="button"
								aria-label="buttonForTitle"
								onPointerDown={e =>
									onShowProduct(e, "product1")
								}
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
							aria-label="product2Img"
							onPointerDown={e => onShowProduct(e, "product2")}
						>
							<img
								sizes="(max-width: 1920px) 100vw, 1920px"
								srcSet={`https://fakeimg.pl/480x320/195c86/ 480w, https://fakeimg.pl/1004x669/195c86/ 1004w,https://fakeimg.pl/1372x915/195c86/ 1372w,https://fakeimg.pl/1820x1213/195c86/ 1820w`}
								src="https://fakeimg.pl/1920x1280/195c86/"
								alt="product2"
							/>
						</button>
					</div>
					<article>
						<h3>
							<button
								type="button"
								onPointerDown={e =>
									onShowProduct(e, "product2")
								}
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
