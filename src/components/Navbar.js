import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="col-lg-10 navbar navbar-expand-lg navbar-light bg-light my-2 mx-auto">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                            <Link className="nav-link active" to="/avarage">Average</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/balok">Balok</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/book">Book</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/buku">Buku</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/market">Market</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/student">Student</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}