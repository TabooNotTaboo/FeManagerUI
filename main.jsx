import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';
import { router } from './routes/router';

ReactDOM.render(
  <React.StrictMode>
     <RouterProvider
    router={router}
  />
  </React.StrictMode>,
  document.getElementById('root')
);
