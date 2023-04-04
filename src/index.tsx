import * as ReactDOMClient from "react-dom/client";
import "./styles/index.scss";
import App from "./App";

import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root") as HTMLDivElement;
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
