import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {store} from "./store";
import {Provider} from "react-redux";
import {Toaster} from "sonner";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster position="bottom-left" richColors expand={true} />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
