import Icon from "@mdi/react";
import {
	mdiWeatherSunny,
	mdiWeatherNight,
	mdiClipboardListOutline,
	mdiAccountOutline,
} from "@mdi/js";

const Header = ({ aboutRef,
	productsRef,
	darkTheme, onChangeTheme }) => {
	const handleScrollToAbout = e => {
		e.preventDefault();
		aboutRef.current.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
		e.target.closest("a").blur();
	};

	const handleScrollToProducts = e => {
		e.preventDefault();
		productsRef.current.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
		e.target.closest("a").blur();
	};

	return (
		<header>
			<nav>
				<h1>
					<a href="#home">Bai</a>
				</h1>
				<ul>
					<li>
						<a href="#about" onClick={handleScrollToAbout}>
							<Icon path={mdiAccountOutline} />
							<span>About</span>
						</a>
					</li>
					<li>
						<a href="#products" onClick={handleScrollToProducts}>
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
