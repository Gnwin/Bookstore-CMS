import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../../assets/stylesheets/App.css';
import Navigation from './Navigation';
import ConnectedBooks from './Books';
import ConnectedCategories from './Categories';
import handleInitialData from '../../redux/shared/receivedata';

const App = (props) => {
  useEffect(() => {
    const { dispatch } = props;
    dispatch(handleInitialData());
  }, []);

  const { loading } = props;

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
          <Route path="books" element={<ConnectedBooks />} />
          <Route path="categories" element={<ConnectedCategories />} />
        </Routes>
      </div>

    </div>
  );
};

export default connect((store) => ({
  loading: store.loading,
}))(App);

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
