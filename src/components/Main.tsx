import CardItemList from "./CardItemsList";
import { useSelector } from "react-redux";
import { RootStore } from "../store";

const Main = () => {
	const { itemsList } = useSelector((store: RootStore) => store.market);

	return (
		<main className="app-main">
			<div className="container">
				<CardItemList items={itemsList} />
			</div>
		</main>
	)
}

export default Main;