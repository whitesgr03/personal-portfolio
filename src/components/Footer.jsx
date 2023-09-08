import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";

const Footer = () => {
	return (
		<footer>
			<a href="#gitHub">
				<Icon path={mdiGithub} />
			</a>
			<p>&copy; 2023 - Designed & coded by Weiss Bai</p>
		</footer>
	);
};

export default Footer;
