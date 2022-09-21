import Button from "./Button";
import InputItemsAmount from "./InputItemsAmount";

import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../store";
import { closeModal } from "../features/market/marketSlice";
import { increase, decrease } from "../features/bag/bagSlice";

import { useNavigate } from "react-router-dom";

const CardItemModal = () => {
	const { modalActiveItemId } = useSelector((store: RootStore) => store.market);
	const { bagItems } = useSelector((store: RootStore) => store.bag);
	const cardItem = bagItems.find(item => item.id === modalActiveItemId);
	const dispatch = useDispatch();

	const navigate = useNavigate();

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
				<p>{(cardItem.amount * cardItem.price).toFixed(2)}</p>
			</div>
			<div className="card-item-list__modal-ctrl">
				<Button
					onClick={() => dispatch(closeModal())}
				>Continue shopping</Button>
				<Button
					appearance="primary"
					onClick={() => {
						navigate("/bag")
						dispatch(closeModal())
					}}
				>Look in the bag</Button>
			</div>
		</div>
	)
}

export default CardItemModal;