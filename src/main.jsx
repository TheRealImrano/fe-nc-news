import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styling/index.css';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext.jsx'
import { PageProvider } from './contexts/PageContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PageProvider>
          <App />
        </PageProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
