import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GlobalStateProvider from './context/GlobalStateContext';


  ReactDOM.render(
    <React.StrictMode>
      <GlobalStateProvider>
        <App isOpen={false} setOpen={() => {}} />
      </GlobalStateProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  serviceWorker.unregister();

  
