import PropTypes from "prop-types";

import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";

const Footer = ({ showProduct }) => {
	return (
		<footer>
			<a
				href="https://github.com/whitesgr03/personal-portfolio"
				rel="noreferrer"
				target="_blank"
				tabIndex={showProduct ? "-1" : ""}
			>
				<Icon path={mdiGithub} />
			</a>
			<p>&copy; 2023 - Designed & coded by Weiss Bai</p>
		</footer>
	);
};

Footer.propTypes = {
	onShowProduct: PropTypes.func,
};

export default Footer;
