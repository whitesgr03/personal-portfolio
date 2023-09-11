import { forwardRef } from "react";

import openNewTabIcon from "../image/open-in-new-icon.png";
import githubIcon from "../image/github-icon.png";

const Products = () => {
	return (
		<div id="products" className="products">
			<h2>
				My <span>Works</span>
			</h2>

			<ul>
				<li>
					<img src="https://fakeimg.pl/350x200/" alt="product1" />
					<article>
						<h3>product1</h3>

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
					<img src="https://fakeimg.pl/350x200/" alt="product2" />
					<article>
						<h3>product2</h3>

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
};

export default Products;
