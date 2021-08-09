import classes from './Header.module.css';

import logo from '../../assets/logo/logo-option-2.png';
import qrCode from '../../assets/logo/qr-code_4.png';

const Header = () => {
    return (
    <header className={classes.header}>
        <img className={classes["header__logo"]} src={logo} height={210} alt={logo} />
        <img className={classes["header__qr"]} src={qrCode} alt="qr-code" />
      </header>
    )
}

export default Header;