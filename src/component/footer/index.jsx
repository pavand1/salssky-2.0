import { useSelector } from "react-redux";
import BottomControls from "../main/BottomControls";
import "./style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Footer = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    return (
        <footer className="fixed-bottom">
            {/* {pathname === "/" ? (
                <div
                    className="get-started-btn"
                    onClick={() => navigate("/book")}
                >
                    <button className="btn">Get Started</button>
                </div>
            ) : pathname === "/book" && isAuthenticated ? (
                <BottomControls />
            ) : null} */}
            {pathname === "/" ? (
                <div
                    className="get-started-btn"
                    onClick={() => navigate("/book")}
                >
                    <button className="btn">Get Started</button>
                </div>
            ) : null}

            {/*get-started-btn*/}
            <nav className="footer-nav">
                <ul className="list-group list-group-horizontal">
                    <Link to="/">
                        <li
                            className={`list-group-item ${
                                pathname === "/" ? "active" : ""
                            }`}
                        >
                            <a href="#">
                                <svg
                                    width={24}
                                    className="footer-icon"
                                    height={24}
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M2.60355 12.0254L11.8096 2.81939C11.9169 2.71972 12.0831 2.71972 12.1904 2.81939L21.3964 12.0254C21.4989 12.1279 21.4989 12.294 21.3964 12.3964L21.2071 12.5857C20.6351 12.1239 19.75 12.5238 19.75 13.2891V19C19.75 19.8284 19.0784 20.5 18.25 20.5H15.5C14.6716 20.5 14 19.8284 14 19V15C14 13.8954 13.1046 13 12 13C10.8954 13 10 13.8954 10 15V19C10 19.8284 9.32843 20.5 8.5 20.5H5.75C4.92157 20.5 4.25 19.8284 4.25 19V13.2891C4.25 12.5238 3.36491 12.1239 2.79286 12.5857L2.60355 12.3964C2.5011 12.294 2.5011 12.1279 2.60355 12.0254ZM13.7678 5.13879C12.7915 4.16247 11.2085 4.16248 10.2322 5.13879L5.48223 9.88878C5.01339 10.3576 4.75 10.9935 4.75 11.6566V17.625C4.75 18.9367 5.81332 20 7.125 20C8.43668 20 9.5 18.9367 9.5 17.625V14C9.5 13.1716 10.1716 12.5 11 12.5H13C13.8284 12.5 14.5 13.1716 14.5 14V17.625C14.5 18.9367 15.5633 20 16.875 20C18.1867 20 19.25 18.9367 19.25 17.625V11.6566C19.25 10.9935 18.9866 10.3576 18.5178 9.88878L13.7678 5.13879Z" />
                                </svg>
                                <span> Home </span>
                            </a>
                        </li>
                    </Link>
                    <Link to="/book">
                        <li
                            className={`list-group-item the-book-icon ${
                                pathname === "/book" ? "active" : ""
                            }`}
                        >
                            <a href="#">
                                {pathname === "/book" ? (
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="2.5"
                                            y="2.5"
                                            width="19"
                                            height="19"
                                            rx="9.5"
                                            stroke="#D22F26"
                                        />
                                        <path
                                            d="M15.5035 11.4589C16.161 11.8558 16.1443 12.8149 15.4734 13.1886L10.5236 15.9456C9.85709 16.3169 9.03703 15.835 9.03703 15.072L9.03703 9.32723C9.03703 8.54875 9.88733 8.06881 10.5538 8.47111L15.5035 11.4589Z"
                                            fill="#D22F26"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                    >
                                        <rect
                                            x="2.5"
                                            y="2.5"
                                            width={19}
                                            height={19}
                                            rx="9.5"
                                        />
                                        <path d="M15.5035 11.4589C16.161 11.8558 16.1443 12.8149 15.4734 13.1886L10.5236 15.9456C9.85709 16.3169 9.03703 15.835 9.03703 15.072L9.03703 9.32723C9.03703 8.54875 9.88733 8.06881 10.5538 8.47111L15.5035 11.4589Z" />
                                    </svg>
                                )}

                                <span> The Book </span>
                            </a>
                        </li>
                    </Link>
                    <Link to="/community">
                        <li
                            className={`list-group-item ${
                                pathname === "/community" ? "active" : ""
                            }`}
                        >
                            <a href="#">
                                <svg
                                    width={24}
                                    height={24}
                                    className="footer-icon"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M2.25 4.5V18.75H9.75C10.5762 18.75 11.25 19.4238 11.25 20.25H12.75C12.75 19.4238 13.4238 18.75 14.25 18.75H21.75V4.5H14.25C13.3564 4.5 12.5508 4.89551 12 5.51953C11.4492 4.89551 10.6436 4.5 9.75 4.5H2.25ZM3.75 6H9.75C10.5762 6 11.25 6.67383 11.25 7.5H12.75C12.75 6.67383 13.4238 6 14.25 6H20.25V17.25H14.25C13.3564 17.25 12.5508 17.6455 12 18.2695C11.4492 17.6455 10.6436 17.25 9.75 17.25H3.75V6Z" />
                                    <circle
                                        cx={1}
                                        cy={1}
                                        r={1}
                                        transform="matrix(-0.0326158 0.999468 0.999468 0.0326158 5.06525 11)"
                                    />
                                    <circle
                                        cx={1}
                                        cy={1}
                                        r={1}
                                        transform="matrix(-1 0 0 1 19 11)"
                                    />
                                    <circle
                                        cx={1}
                                        cy={1}
                                        r={1}
                                        transform="matrix(-1 0 0 1 15 11)"
                                    />
                                    <circle
                                        cx={1}
                                        cy={1}
                                        r={1}
                                        transform="matrix(-1 0 0 1 11.0652 11)"
                                    />
                                </svg>
                                <span> Community </span>
                            </a>
                        </li>
                    </Link>
                    <Link to="/star">
                        <li
                            className={`list-group-item ${
                                pathname === "/star" ? "active" : ""
                            }`}
                        >
                            <a href="#">
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    className="footer-icon"
                                >
                                    <path d="M12 3C7.05762 3 3 6.85254 3 11.625C3 14.168 4.17773 16.4268 6 18V21.4688L9.32812 19.8047C10.1748 20.0596 11.0596 20.25 12 20.25C16.9424 20.25 21 16.3975 21 11.625C21 6.85254 16.9424 3 12 3ZM12 4.5C16.1689 4.5 19.5 7.69922 19.5 11.625C19.5 15.5508 16.1689 18.75 12 18.75C11.1035 18.75 10.248 18.5801 9.44531 18.3047L9.14062 18.2109L7.5 19.0312V17.3438L7.21875 17.1094C5.55469 15.7969 4.5 13.8311 4.5 11.625C4.5 7.69922 7.83105 4.5 12 4.5Z" />
                                    <path d="M9.375 8.3125C8.33789 8.3125 7.5 9.15039 7.5 10.1875C7.5 10.583 7.61719 10.9639 7.82812 11.2656C7.82812 11.2686 7.85156 11.2656 7.85156 11.2656L12 16L16.1484 11.2656L16.1719 11.2422C16.3828 10.9404 16.5 10.583 16.5 10.1875C16.5 9.15039 15.6621 8.3125 14.625 8.3125C13.3008 8.3125 12.9844 9.57812 12 9.57812C11.0156 9.57812 10.6992 8.3125 9.375 8.3125Z" />
                                </svg>
                                <span> Talk to Star </span>
                            </a>
                        </li>
                    </Link>
                    <Link to="/menu">
                        <li
                            className={`list-group-item ${
                                pathname === "/menu" ? "active" : ""
                            }`}
                        >
                            <a href="#">
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    className="footer-icon"
                                >
                                    <path d="M3 5.25V6.75H21V5.25H3ZM3 11.25V12.75H21V11.25H3ZM3 17.25V18.75H21V17.25H3Z" />
                                </svg>
                                <span> Menu </span>
                            </a>
                        </li>
                    </Link>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
