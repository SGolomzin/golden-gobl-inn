import BagButton from "./BagButton";
import { useSelector } from "react-redux";
import { RootStore } from "../store";

import { Link } from "react-router-dom";

const Header = () => {
	const { amount } = useSelector((store: RootStore) => store.bag);

	return (
		<header className="app-header">
			<div className="container">
				<nav className="app-header-nav">
					<ul className="app-header-nav-list">
						<li>
							<Link className="app-header-logo" to="/">Golden Gobl Inn</Link>
						</li>
						<li>
							<Link to="bag"><BagButton amount={amount} /></Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header;