import './navbar.css'

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary bg-navbar">
			<div className="container-fluid bg-navbar">
				<a className="navbar-brand" href="/">
					<img src="https://as1.ftcdn.net/v2/jpg/05/22/65/52/1000_F_522655221_xdvmHkOeIZzSKEL9zLNSEuwJz3U9G8WL.jpg" alt="logo" className='logo'/>
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav nav-items">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/cart">Cart</a>
						</li>
						{/* <li className="nav-item">
							<a className="nav-link" href="/">Pricing</a>
						</li> */}
						{/* <li className="nav-item">
							<a className="nav-link disabled" aria-disabled="true">Disabled</a>
						</li> */}
					</ul>
				</div>
			</div>
		</nav>
	)
}
