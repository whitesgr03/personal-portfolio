import { forwardRef } from "react";

import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";

const About = () => {
	return (
		<article id="about" className="about">
			<div className="describe">
				<img src="https://fakeimg.pl/150/" alt="Weiss Bai" />
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
					<a href="#github">
						<Icon path={mdiGithub} />
					</a>
				</div>
			</div>
		</article>
	);
};

export default About;
