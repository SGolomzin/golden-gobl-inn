import Button from "./Button";
import { ChevronDown, ChevronUp } from "../icons";

const InputItemsAmount = ({
	incFn = () => { },
	decFn = () => { },
	amount = 0
}) => {

	return (
		<div className="input-items-amount">
			<Button icon={true} onClick={() => decFn()} disabled={amount < 2}>
				<ChevronDown />
			</Button>
			{amount}
			<Button icon={true} onClick={() => incFn()}>
				<ChevronUp />
			</Button>
		</div>
	)
}

export default InputItemsAmount;