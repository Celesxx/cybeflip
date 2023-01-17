import React from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/css/global.assets.css';
import BaseRoute from "routes/global.routes.jsx";
import reportWebVitals from './reportWebVitals';
import Loading from 'components/blocks/loading.block.jsx'
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux";
import { store } from "store/store.js";
import { persistStore } from 'redux-persist'

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

let persistor = persistStore(store);


root.render(
  <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <BaseRoute />
        </PersistGate>
      </Provider>
  </BrowserRouter>
);


reportWebVitals();
