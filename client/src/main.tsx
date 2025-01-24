import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import "./index.css";
import App from "./App.tsx";
import Login from "./pages/Login.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
        domain="dev-o81j7dzzwbcfc6an.us.auth0.com"
        clientId="VEAQZRkfhcG8ljBnyD3vjkySjYMB7Ltt"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </Auth0Provider>
  </StrictMode>
);
