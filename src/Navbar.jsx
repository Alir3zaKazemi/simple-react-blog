import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<span className="navbar-title">First component as Navbar</span>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/create">New blog</Link>
				<Link to="/contact">Contact us</Link>
			</div>
		</div>
	);
};

export default Navbar;
