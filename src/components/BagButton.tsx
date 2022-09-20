import { BagIcon } from "../icons";

const BagButton = ({ amount = 0 }) => {
	return (
		<span className="bag-page-link">
			<BagIcon />
			{amount > 0 && <span>{amount}</span>}
		</span>
	)
}

export default BagButton;