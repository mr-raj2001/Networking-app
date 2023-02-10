import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <Auth0Provider
    domain="dev-4u100ymlu1b3m8pd.uk.auth0.com"
    clientId="WFYCwX7K2UdODEKRL2gDM2gKX4z7aUd3"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
  // </React.StrictMode>
);


reportWebVitals();
