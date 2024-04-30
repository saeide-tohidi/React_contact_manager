import SearchContact from "./Contacts/SearchContact";
import { Link } from 'react-router-dom';
import { BACKGROUND, PURPLE } from "../helpers/colors";

const Navbar = () => {
    return (
        <nav
            className="navbar navbar-dark navbar-expand-sm shadow-lg"
            style={{ backgroundColor: BACKGROUND }}
        >
            <div className="container">
                <div className="row w-100">
                    <div className="col">
                        <div className="navbar-brand">
                            <i className="fas fa-id-badge" style={{ color: PURPLE }} />{" "}
                            وب اپلیکیشن مدیریت{"  "}
                            <span style={{ color: PURPLE }}>مخاطبین</span>
                        </div>
                    </div>
                    <div className="col">
                        <SearchContact />
                    </div>
                    <div className="col">
                        <Link to="/contacts/">مخاطبین</Link>
                    </div>
                    <div className="col">
                        <Link to="/books/">کتاب‌ها</Link>
                    </div>
                    <div className="col">
                        <Link to="/about/">درباه‌ ما</Link>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
