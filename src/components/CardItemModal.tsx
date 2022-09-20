import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../store";
import Button from "./Button";
import { closeModal } from "../features/market/marketSlice";

const CardItemModal = () => {
	const { modalActiveItemId } = useSelector((store: RootStore) => store.market);
	const { bagItems } = useSelector((store: RootStore) => store.bag);
	const cardItem = bagItems.find(item => item.id === modalActiveItemId);
	const dispatch = useDispatch();

	if (!cardItem) return null;

	return (
		<div className="card-item-list__modal">
			<h1>Item added in the bag</h1>
			<div className="card-item-list__modal-info">
				<p>{cardItem.name}</p>
				<p>{cardItem.amount}</p>
				<p>{cardItem.price}</p>
			</div>
			<div className="card-item-list__modal-ctrl">
				<Button
					onClick={() => dispatch(closeModal())}
				>Continue shopping</Button>
				<Button
					onClick={() => { }}
				>Look in the bag</Button>
			</div>
		</div>
	)
}

export default CardItemModal;