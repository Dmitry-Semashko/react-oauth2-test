import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from 'react-oidc-context';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const oidcConfig = {
  authority: process.env.REACT_APP_AUTHORITY,
  client_id: process.env.REACT_APP_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_REDIRECT_URI,
  metadata: {
    authorization_endpoint: process.env.REACT_APP_AUTHORIZATION_ENDPOINT,
    token_endpoint: process.env.REACT_APP_TOKEN_ENDPOINT
  },
  scope: "email",
  onSigninCallback: (_user) => {
    window.history.replaceState(
      {},
      document.title,
      window.location.pathname
    )
  }
};

root.render(
  <AuthProvider {...oidcConfig}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
