import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import Feed from "../Feed";
import PostDetails from "../PostDetails"


export const routes = {
  root: "/",
  feed: "/feed",
  register: "/register",
  postDetails: "/details",
};


function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage}/>
        <Route exact path={routes.register} component={RegisterPage}/> 
        <Route exact path={routes.feed} component={Feed}/> 
        <Route exact path={routes.postDetails} component={PostDetails}/> 
      </Switch>
    </ConnectedRouter>
  );
}



export default Router;
