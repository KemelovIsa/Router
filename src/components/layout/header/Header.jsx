import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import scss from "./Header.module.scss";

const links = [
	{
		name: "Home",
		href: "/",
	},

];

const Header = () => {
	const location = useLocation();
	console.log(location.pathname);

	return (
		<>
			<header className={scss.Header}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.logo}>
							<h1>Logo</h1>
						</div>

						<nav>
							<ul>
								{links.map((item, index) => (
									<li key={index}>
										<NavLink
											to={item.href}
											className={
												location.pathname === item.href
													? `${scss.link} ${scss.active}`
													: `${scss.link}`
											}>
											{item.name}
										</NavLink>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
