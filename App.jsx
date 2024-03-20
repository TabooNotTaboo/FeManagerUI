import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import SidebarWithSearch from './components/SidebarWithSearch';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <SidebarWithSearch />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
