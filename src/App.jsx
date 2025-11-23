import { useState } from "react";
import MainPage from "./pages/MainPage";
import OrderPage from "./pages/OrderPage";
import OrderCompletePage from "./pages/OrderCompletePage";
import "./App.css";

import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>

        <Route path="/order">
          <OrderPage />
        </Route>

        <Route path="/complete">
          <OrderCompletePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
