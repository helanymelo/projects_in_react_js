import { BrowserRouter, Switch, Route } from "react-router-dom";
import Filme from "../pages/Filme/Filme";
import Favoritos from "../pages/Favoritos/Favoritos"


import Home from "../pages/Home/Home";
import Header from "../components/Header/Header";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filme/:id" component={Filme} />
        <Route exact path="/favoritos" component={Favoritos} />
        
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
