import PropTypes from "prop-types";

import Icon from "@mdi/react";
import {
	mdiWeatherSunny,
	mdiWeatherNight,
	mdiClipboardListOutline,
	mdiAccountOutline,
} from "@mdi/js";

const Header = ({
	appRef,
	aboutRef,
	productsRef,
	darkTheme,
	onChangeTheme,
	showModal,
}) => {
	const handleClick = ref =>
		ref.current.classList.contains("app")
			? (ref.current.scrollTop = 0)
			: ref.current.scrollIntoView({
					behavior: "smooth",
					block: "start",
			  });
	return (
		<header>
			<nav>
				<h1>
					<button
						type="button"
						tabIndex={showModal ? "-1" : ""}
						onClick={() => handleClick(appRef)}
					>
						Bai
					</button>
				</h1>
				<ul>
					<li>
						<button
							type="button"
							tabIndex={showModal ? "-1" : ""}
							onClick={() => handleClick(aboutRef)}
						>
							<Icon path={mdiAccountOutline} />
							<span>About</span>
						</button>
					</li>
					<li>
						<button
							type="button"
							tabIndex={showModal ? "-1" : ""}
							onClick={() => handleClick(productsRef)}
						>
							<Icon path={mdiClipboardListOutline} />
							<span>Projects</span>
						</button>
					</li>
					<li>
						<button
							type="button"
							tabIndex={showModal ? "-1" : ""}
							className={darkTheme ? "dark" : "light"}
							onClick={onChangeTheme}
						>
							{darkTheme ? (
								<Icon path={mdiWeatherNight} />
							) : (
								<Icon path={mdiWeatherSunny} />
							)}
							<span>Theme</span>
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};

Header.propTypes = {
	aboutRef: PropTypes.object,
	productsRef: PropTypes.object,
	appRef: PropTypes.object,
	darkTheme: PropTypes.bool,
	onChangeTheme: PropTypes.func,
	showModal: PropTypes.bool,
};

export default Header;
