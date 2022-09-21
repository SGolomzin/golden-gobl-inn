const Footer = () => {
	return (
		<footer className="app-footer">
			<div className="container">
				<p>Learning React, Redux & TypeScript</p>
				<p>sg - {new Date().getFullYear()}</p>
			</div>
		</footer>
	)
}

export default Footer;