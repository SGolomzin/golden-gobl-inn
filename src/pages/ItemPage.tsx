import Button from "../components/Button";
import Modal from "../components/Modal";
import CardItemModal from "../components/CardItemModal";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../store";
import { SwordIcon } from "../icons";

import { addItem } from "../features/bag/bagSlice";
import { openModal } from "../features/market/marketSlice";

const ItemPage = () => {
	const dispatch = useDispatch();
	const { itemId } = useParams();
	const { itemsList } = useSelector((store: RootStore) => store.market);
	const item = itemsList.find(item => item.id === itemId);

	if (!item) return <h2>Sorry can't find anything</h2>

	const { id, name, description, price } = item;

	return (
		<>
			<Modal><CardItemModal /></Modal>
			<div className="item-view">
				<div className="item-view__thumbnail">
					<SwordIcon />
					{/* <img src={thumbnail} alt={name} /> */}
				</div>
				<div className="item-view__info">
					<h2>{name}</h2>
					<h3>{price} g</h3>
					<p className="item-view__info-description">{description}</p>
				</div>
				<div className="item-view__controls">
					<Button appearance='primary' onClick={() => {
						dispatch(addItem(item))
						dispatch(openModal(id))
					}}>Add in the bag</Button>
				</div>
			</div>
		</>
	)
}

export default ItemPage;