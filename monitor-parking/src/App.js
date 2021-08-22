import React, { useState, Fragment } from 'react';

import { useTranslation } from 'react-i18next';


import Header from './components/Header/Header';
import ParkingInfoCard from './components/ParkingInfoComponents/ParkingInfoCard';
import Modal from './components/UI/Modal';

const lngs = {
  cz: { nativeName: 'CZ'},
  en: { nativeName: 'EN'},
  es: { nativeName: 'ES'},
}

const App = () => {

  const { t, i18n } = useTranslation();
  const setLangHandler = lang => {
    i18n.changeLanguage(lang);
  }  

  const [isError, setIsError ] = useState(false);

  const errorHandler = (error) => {
    setIsError(error);
  }
  
  return (
    <Fragment>
      {isError && <Modal>{t('error.text')}</Modal>}
      <Header lngs={lngs} setLang={setLangHandler} />
      <ParkingInfoCard t={t} passError={errorHandler}/>
    </Fragment>
  );
}

export default App;
