import { useState } from "react";
import MainPage from "./pages/MainPage";
import OrderPage from "./pages/OrderPage";
import OrderCopmletePage from "./pages/OrderCompletePage";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/OrderPage">
          <OrderPage />
        </Route>
        <Route path="/OrderCopmletePage">
          <OrderCopmletePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
