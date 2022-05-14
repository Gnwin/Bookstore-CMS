/* eslint-disable */
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import '../../assets/stylesheets/App.css';
import Navigation from './Navigation';
import ConnectedBooks from './Books';
import ConnectedCategories from './Categories';
import { createAppID } from '../../redux/shared/API';
import { handleInitialData } from '../../redux/shared/receivedata';

const App = () => {
  // const [appid, setAppId] = useState('');
  const state = useSelector((state) => state);
  // const appid = useSelector((state) => state.id);
  console.log(state);
  const dispatch = useDispatch();
  // createAppID();
  // let appid;
  useEffect(() => {
    // if (localStorage.getItem('bkstoreid') === null) {
    // createAppID()
      // .then((response) => {
        // console.log(response);
        // setAppId(response);
      // });
    // }
    // else {
    // appid = JSON.parse(localStorage.getItem(key));
    // }
    dispatch(handleInitialData());
  }, []);

  // const state = useSelector((state) => state);
  //   console.log(state);

  const { loading } = state;
  if (loading === true) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="app" data-testid="app-1">
      <div className="header white">
        <Navigation />
      </div>

      <div className="main">
        <Routes>
          <Route exact path="/" element={<ConnectedBooks />} />
          <Route path="/categories" element={<ConnectedCategories />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

/* eslint-enable */
