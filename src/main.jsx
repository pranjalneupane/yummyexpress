import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartProvider.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { Bounce, ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <Auth0Provider
        domain="dev-bkjrde02v7m0q4ey.us.auth0.com"
        clientId="v1dX8NFwaCvGIWLeR19eEKxlLulB9zhO"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </Auth0Provider>
    </CartProvider>
  </BrowserRouter>
);
