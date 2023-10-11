import PropTypes from "prop-types";

import { forwardRef } from "react";

import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";

const About = forwardRef(({ showModal, avatar, onLoad }, ref) => {
	return (
		<article className="about" ref={ref}>
			<div className="describe">
				<div className="imageWrap">
					<div
						className="imageLoading"
						data-testid="imageLoading"
					></div>
					<img
						sizes="(max-width: 1920px) 100vw, 1920px"
						srcSet={`${avatar?.small.url} 1004w, ${avatar?.large.url} 1372w`}
						src={avatar?.large.url}
						alt="avatar"
						width={imageSize?.width <= 1004 ? "150" : "250"}
						height={imageSize?.width <= 1004 ? "150" : "250"}
						onLoad={onLoad}
					/>
				</div>
				<p>
					<span>Hey I'm</span>
					<span>Weiss Bai</span>
				</p>
			</div>
			<div className="content">
				<h2>About me</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Molestiae temporibus illo blanditiis. Fugiat nisi pariatur,
					corrupti nam maxime magnam rem accusantium velit
					necessitatibus deleniti asperiores exercitationem illum
					doloribus minima unde? Enim magnam quia reiciendis, cumque
					saepe iure voluptatem, laboriosam deserunt facilis
					perspiciatis et vero quas velit dolorem ea ratione
					aspernatur repellat corrupti provident? Deserunt beatae
					rerum obcaecati architecto odio culpa. Voluptates,
					aspernatur velit autem, pariatur fuga nobis non
					exercitationem architecto optio perferendis quod laboriosam
					provident quos accusamus itaque dignissimos quia illum modi.
					Reiciendis porro sint qui! Asperiores adipisci qui dicta.
				</p>
				<div className="link">
					<a
						href="https://github.com/whitesgr03/personal-portfolio"
						target="_blank"
						rel="noreferrer"
						tabIndex={showModal ? "-1" : ""}
						aria-label="visit author's github"
					>
						<Icon path={mdiGithub} />
					</a>
				</div>
			</div>
		</article>
	);
});

About.propTypes = {
	showModal: PropTypes.bool,
};

export default About;
