import './styles.scss';

/**
 * The navigation bar is a fully static component displaying a chain of breadcrumbs with links and the title of the page.
 * Would benefit from receiving the current title and an array of breadcrumbs with their links:
 *
 * ```
 * {
 *     title: string,
 *     breadcrumbs: [
 *         {
 *             label: string,
 *             url: string
 *         }
 *     ]
 * }
 * ```
 */
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
