import cn from "classnames";

interface IButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	size?: "sm" | "md" | "lg",
	appearance?: "none" | "primary" | "ghost",
	icon?: boolean
}

const Button = ({
	size = "md",
	appearance = "none",
	icon = false,
	children,
	className,
	...props
}: IButton) => {
	return (
		<button
			className={cn("btn", className, {
				"btn-primary": appearance === "primary",
				"btn-ghost": appearance === "ghost"
			}, {
				"btn-sm": size === "sm",
				"btn-md": size === "md",
				"btn-lg": size === "lg"
			}, {
				"btn-with-icon": icon === true
			})}
			{...props}
		>{children}</button>
	)
}

export default Button;