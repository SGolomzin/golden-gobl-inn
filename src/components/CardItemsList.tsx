import CardItem from "./CardItem";
import { ICardItem } from "./CardItem";

interface ICardItemList {
	items: ICardItem[]
}

const CardItemList = ({
	items = []
}: ICardItemList) => {
	return (
		<div className="card-items-list">
			{items.map(item => (
				<CardItem key={item.id} {...item} />
			))}
		</div>
	)
}

export default CardItemList;