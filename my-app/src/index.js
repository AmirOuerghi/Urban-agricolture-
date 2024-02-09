import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ShopContextProvider from './ShopContext'; 

ReactDOM.render(
  <React.StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
