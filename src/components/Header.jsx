import PropTypes from "prop-types";

import Icon from "@mdi/react";
import {
	mdiWeatherSunny,
	mdiWeatherNight,
	mdiClipboardListOutline,
	mdiAccountOutline,
} from "@mdi/js";

const Header = ({ aboutRef, productsRef, darkTheme, onChangeTheme }) => {
	const handlePointerDown = (e, ref) => {
		e.preventDefault();

		ref
			? ref.current.scrollIntoView({
					behavior: "smooth",
					block: "start",
			  })
			: window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<header>
			<nav>
				<h1>
					<button
						type="button"
						onPointerDown={() => handlePointerDown(appRef)}
					>
						Bai
					</button>
				</h1>
				<ul>
					<li>
						<button
							type="button"
							onPointerDown={() => handlePointerDown(aboutRef)}
						>
							<Icon path={mdiAccountOutline} />
							<span>About</span>
						</button>
					</li>
					<li>
						<button
							type="button"
							onPointerDown={() => handlePointerDown(productsRef)}
						>
							<Icon path={mdiClipboardListOutline} />
							<span>Projects</span>
						</button>
					</li>
					<li>
						<button
							type="button"
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
	darkTheme: PropTypes.bool,
	onChangeTheme: PropTypes.func,
};

export default Header;
