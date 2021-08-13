import React, { useState, Fragment } from 'react';

import Header from './components/Header/Header';
import ParkingInfoCard from './components/ParkingInfoComponents/ParkingInfoCard';
import Modal from './components/UI/Modal';

const App = () => {
  
  const [isError, setIsError ] = useState(false);

  const errorHandler = (error) => {
    setIsError(error);
  }
  
  return (
    <Fragment>
      {isError && <Modal>oops! Error while fetching data</Modal>}
      <Header />
      <ParkingInfoCard passError={errorHandler}/>
    </Fragment>
  );
}

export default App;
