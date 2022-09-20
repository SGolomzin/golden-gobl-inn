import CardItem from "./CardItem";
import Modal from "./Modal";
import CardItemModal from "./CardItemModal";
import { ICardItem } from "./CardItem";

interface ICardItemList {
	items: ICardItem[]
}

const CardItemList = ({
	items = []
}: ICardItemList) => {
	return (
		<div className="card-items-list">
			<Modal><CardItemModal /></Modal>
			{items.map(item => (
				<CardItem key={item.id} {...item} />
			))}
		</div>
	)
}

export default CardItemList;