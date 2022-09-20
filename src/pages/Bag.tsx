import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../store";

import Button from "../components/Button";
import InputItemsAmount from "../components/InputItemsAmount";

import { increase, decrease, clearBag, calculateTotals } from "../features/bag/bagSlice";


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
				{bagItems.map((item) => {
					return <div key={item.id} className="bag-item-list__item">
						<p>{item.name}</p>
						<InputItemsAmount
							amount={item.amount}
							incFn={() => dispatch(increase(item.id))}
							decFn={() => dispatch(decrease(item.id))}
						/>
						<p className="bag-item-list__item-price">{(item.amount * item.price).toFixed(2)}</p>
					</div>
				})}
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