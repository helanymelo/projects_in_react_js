import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Feed from "../Feed/Feed"
import Edit from "../Edit/Edit";
import Posts from "../Posts/Posts";
import ReadMore from "../ReadMore/ReadMore";


function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Feed}/>
                <Route exact path="/editar" component={Edit}/>
                <Route exact path="/post" component={Posts}/>
                <Route exact path="/lermais" component={ReadMore}/>
                
            </Switch>
        </BrowserRouter>
    )
}

export default Router;