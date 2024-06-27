import { Link } from "react-router-dom";
import '../styling/NavBar.css'

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-page-container">
                <Link className="navbar-page-link" to="/">
                    <button className="navbar-page-button">
                        Home
                    </button>
                </Link>
                <Link className="navbar-page-link" to="/aboutme">
                    <button className="navbar-page-button">
                        About Me
                    </button>
                </Link>
                <Link className="navbar-page-link" to="/resume">
                    <button className="navbar-page-button">
                        Resume
                    </button>
                </Link>
                <Link className="navbar-page-link" to="/contact">
                    <button className="navbar-page-button">
                        Contact
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;