import CardItemList from "../components/CardItemsList";
import { useSelector } from "react-redux";
import { RootStore } from "../store";

const MarketPage = () => {
	const { itemsList } = useSelector((store: RootStore) => store.market);

	return (
		<CardItemList items={itemsList} />
	)
}

export default MarketPage;