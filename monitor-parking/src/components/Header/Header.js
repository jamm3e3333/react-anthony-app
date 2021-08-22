import classes from './Header.module.css';

import logo from '../../assets/logo/logo-option-2.png';
import qrCode from '../../assets/logo/qr-code_4.png';

const Header = props => {
  const langs = Object.keys(props.lngs);
  
  const langHandler = e => {
    props.setLang(e.target.value.toLowerCase());
  }

  return (
    <header className={classes.header}>
        <select className={classes['lang__selector']} onChange={langHandler}>
        {langs.map((lng) => {
          return (
            <option 
              key={props.lngs[lng].nativeName}
              value={props.lngs[lng].nativeName}
            >
              {props.lngs[lng].nativeName}
            </option>
          )
        })}
      </select>
        <img className={classes["header__logo"]} src={logo} alt={logo} />
        <img className={classes["header__qr"]} src={qrCode} alt="qr-code" />
      </header>
    )
}

export default Header;