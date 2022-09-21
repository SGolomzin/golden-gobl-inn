import { IBagItem } from '../features/bag/bagSlice';
import InputItemsAmount from './InputItemsAmount';
import Button from './Button';

import { useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "../features/bag/bagSlice";

import { Cancel } from "../icons";

interface BagCardItemProps {
	item: IBagItem
}

const BagCardItem = ({
	item,
	...props
}: BagCardItemProps) => {
	const dispatch = useDispatch();
	return (
		<div
			className="bag-item-list__item"
			{...props}
		>
			<p>{item.name}</p>
			<InputItemsAmount
				amount={item.amount}
				incFn={() => dispatch(increase(item.id))}
				decFn={() => dispatch(decrease(item.id))}
			/>
			<p className="bag-item-list__item-price">{(item.amount * item.price).toFixed(2)}</p>
			<Button
				size="sm"
				icon={true}
				onClick={() => dispatch(removeItem(item.id))}
				className="btn-remove-item"
			>
				<Cancel />
			</Button>
		</div>
	)
}

export default BagCardItem;