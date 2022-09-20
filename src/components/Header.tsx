import BagButton from "./BagButton";
import { useSelector } from "react-redux";
import { RootStore } from "../store";

const Header = () => {
	const { amount } = useSelector((store: RootStore) => store.bag);

	return (
		<header className="app-header">
			<div className="container">
				<h1>Golden Gobl Inn</h1>
				<div className="signed">
					<BagButton amount={amount} />
				</div>
			</div>
		</header>
	)
}

export default Header;