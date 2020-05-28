import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import Shop from './Shop';
import 'semantic-ui-css/semantic.min.css';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <Shop/>
    </Provider>
  );
}

export default App;
