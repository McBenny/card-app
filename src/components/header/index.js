import Button from '../button';
import logo from '../../assets/logo.svg';
import profilePicture from '../../assets/profile.svg';

import './styles.scss';

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <a href="/">
                    <img src={logo} alt="Company logo" className="header__logo" />
                </a>
            </div>
            <ul className="header__tools">
                <li className="header__tool">
                    <Button additionalClasses={['menu']}>
                        <span className="sr-only">Menu</span>
                    </Button>
                </li>
                <li className="header__tool">
                    <Button additionalClasses={['profile']}>
                        <img src={profilePicture} alt="User Profile Picture" className="header__profile-picture" />
                    </Button>
                </li>
            </ul>
        </header>
    );
}

export default Header;
