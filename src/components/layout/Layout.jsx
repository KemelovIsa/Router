import { Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import HomePage from "../pages/HomePage";

const Layout = () => {
	return (
		<div>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />

				</Routes>
			</main>
		</div>
	);
};

export default Layout;
