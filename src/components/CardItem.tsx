import Button from './Button';
import { SwordIcon } from '../icons';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/bag/bagSlice';
import { openModal } from '../features/market/marketSlice';

export interface ICardItem {
	id: string,
	name: string,
	price: string,
	thumbnail: string,
	description: string
}

const CardItem = ({
	id, name, price, thumbnail, description
}: ICardItem) => {
	const dispatch = useDispatch();
	return (
		<div className="card-item">
			<div className="card-item__thumbnail">
				<SwordIcon />
				{/* <img src={thumbnail} alt={name} /> */}
			</div>
			<div className="card-item__info">
				<h4 className='card-item__price'>{price} g</h4>
				<p className='card-item__name'>{name}</p>
			</div>
			<Button appearance='primary' onClick={() => {
				dispatch(addItem({ id, name, price, thumbnail, description }))
				dispatch(openModal(id))
			}}>Add in the bag</Button>
		</div>
	)
}

export default CardItem;