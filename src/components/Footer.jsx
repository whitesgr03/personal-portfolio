import PropTypes from "prop-types";

import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";

const Footer = ({ showModal }) => {
	return (
		<footer>
			<a
				href="https://github.com/whitesgr03/personal-portfolio"
				rel="noreferrer"
				target="_blank"
				tabIndex={showModal ? "-1" : ""}
				aria-label="visit author's github"
			>
				<Icon path={mdiGithub} />
			</a>
			<p>&copy; 2023 - Designed & coded by Weiss Bai</p>
		</footer>
	);
};

Footer.propTypes = {
	product: PropTypes.bool,
};

export default Footer;
