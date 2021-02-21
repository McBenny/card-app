import './styles.scss';

function Nav() {
    return (
        <nav className="nav">
            <div className="nav__content">
                <ul className="nav__breadcrumbs">
                    <li className="nav__breadcrumb">
                        <a href="/" className="nav__link">Dashboard</a>
                    </li>
                    <li className="nav__breadcrumb">
                        My apps
                    </li>
                </ul>
                <h1 className="nav__title">My apps</h1>
            </div>
        </nav>
    );
}

export default Nav;
