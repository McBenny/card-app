import './styles.scss';
import BackToTop from '../back-to-top';

/**
 * Displays the footer of the application. Has some responsiveness (stacking or spreading of the 2 pieces of text).
 */
function Footer() {
    return (
        <footer className="footer">
            <BackToTop />
            <p className="footer__copyright">
                2019 @ NetFront
            </p>
            <ul className="footer__links">
                <li className="footer__link-item">
                    <a href="#privacy" className="footer__link">Privacy</a>
                </li>
                <li className="footer__link-item">
                    <a href="#tandc" className="footer__link">Terms & Conditions</a>
                </li>
                <li className="footer__link-item">
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
