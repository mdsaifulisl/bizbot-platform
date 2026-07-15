import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store.ts" // আপনার স্টোরের সঠিক পাথ দিন
import App from "./App.tsx"
// @ts-ignore: Allow side-effect CSS import without type declarations
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)