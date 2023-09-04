import Icon from "@mdi/react";
import { mdiEmailOutline, mdiGithub } from "@mdi/js";

const Footer = () => {
	return (
		<footer>
			<div className="contact">
				<h2>Contact me</h2>
				<p>
					Please get in touch if you think our work could be mutually
					beneficial!
				</p>
				<address>
					<Icon path={mdiEmailOutline} />
					<p>whitesgr03@gmail.com</p>
				</address>
			</div>
			<div className="copyright">
				<a href="#gitHub">
					<Icon path={mdiGithub} />
				</a>
				<p>&copy; 2023 - Designed & coded by Weiss Bai</p>
			</div>
		</footer>
	);
};

export default Footer;
