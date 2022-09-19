import { BagIcon } from "../icons";

const BagButton = ({ amount = 0 }) => {
	return (
		<a href="#" className="bag-page-link">
			<BagIcon />
			{amount > 0 && <span>{amount}</span>}
		</a>
	)
}

export default BagButton;