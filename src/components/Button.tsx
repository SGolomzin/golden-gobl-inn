interface IButton {
	value: string
}

const Button = ({
	value,
	...props
}: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & IButton) => {
	return (
		<button
			className="btn"
			{...props}
		>{value}</button>
	)
}

export default Button;