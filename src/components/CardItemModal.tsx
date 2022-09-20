import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";
import InputItemsAmount from "./InputItemsAmount";
import { closeModal } from "../features/market/marketSlice";
import { increase, decrease } from "../features/bag/bagSlice";
import { RootStore } from "../store";

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
				<InputItemsAmount
					amount={cardItem.amount}
					incFn={() => dispatch(increase(cardItem.id))}
					decFn={() => dispatch(decrease(cardItem.id))}
				/>
				<p>{Number(cardItem.amount) * Number(cardItem.price)}</p>
			</div>
			<div className="card-item-list__modal-ctrl">
				<Button
					onClick={() => dispatch(closeModal())}
				>Continue shopping</Button>
				<Button
					appearance="primary"
					onClick={() => { }}
				>Look in the bag</Button>
			</div>
		</div>
	)
}

export default CardItemModal;