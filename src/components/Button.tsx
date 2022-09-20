const Button = ({
	children,
	...props
}: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
	return (
		<button
			className="btn"
			{...props}
		>{children}</button>
	)
}

export default Button;