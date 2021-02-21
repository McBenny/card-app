import './styles.scss';

function Footer() {
    return (
        <footer className="footer">
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
