import Icon from "@mdi/react";
import {
	mdiWeatherSunny,
	mdiWeatherNight,
	mdiClipboardListOutline,
	mdiAccountOutline,
} from "@mdi/js";

const Header = ({ aboutRef,
	darkTheme, onChangeTheme }) => {
	return (
		<header>
			<nav>
				<h1>
					<a href="#home">Bai</a>
				</h1>
				<ul>
					<li>
						<a href="#about">
							<Icon path={mdiAccountOutline} />
							<span>About</span>
						</a>
					</li>
					<li>
						<a href="#products">
							<Icon path={mdiClipboardListOutline} />
							<span>Projects</span>
						</a>
					</li>
					<li>
						<button
							type="button"
							aria-label="theme"
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

export default Header;
