import Icon from "@mdi/react";
import {
	mdiWeatherSunny,
	mdiWeatherNight,
	mdiClipboardListOutline,
	mdiAccountOutline,
} from "@mdi/js";

const Header = ({ aboutRef, productsRef, darkTheme, onChangeTheme }) => {
	const handleScroll = (e, ref) => {
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
					<a href="#home" onClick={handleScroll}>
						Bai
					</a>
				</h1>
				<ul>
					<li>
						<a
							href="#about"
							onClick={e => handleScroll(e, aboutRef)}
						>
							<Icon path={mdiAccountOutline} />
							<span>About</span>
						</a>
					</li>
					<li>
						<a
							href="#products"
							onClick={e => handleScroll(e, productsRef)}
						>
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
