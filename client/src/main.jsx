import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store.js";
import { ThemeProvider } from "./context/ThemeProvider.jsx";
// import "./index.css";
import App from "./App.jsx";
import "./styles/global.css";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <App />
          <Toaster position="top-right" />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
