import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App /App";
import { Provider } from "react-redux";

import { store, persistor } from "./redux/store";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {" "}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
