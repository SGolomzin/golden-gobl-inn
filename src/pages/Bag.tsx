import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../store";

import Button from "../components/Button";
import BagCardItem from '../components/BagCardItem';

import { clearBag, calculateTotals } from "../features/bag/bagSlice";


const Bag = () => {
	const { bagItems, amount, total } = useSelector((store: RootStore) => store.bag);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(calculateTotals())
	}, [bagItems, dispatch]);

	if (amount < 1) {
		return (
			<section className='bag'>
				<header>
					<h2>your bag</h2>
					<h4 className='empty-bag'>is currently empty</h4>
				</header>
			</section>
		)
	}

	return (
		<section className='bag'>
			<header>
				<h2>your bag</h2>
			</header>
			<div className="bag-item-list">
				{bagItems.map((item) => <BagCardItem key={item.id} item={item} />)}
			</div>
			<footer>
				<hr />
				<div className='bag-total'>
					<h4>total <span>{total.toFixed(2)} g</span></h4>
				</div>
				<Button
					appearance="danger"
					onClick={() => dispatch(clearBag())}
				>clear bag</Button>
			</footer>
		</section>
	)
}

export default Bag;