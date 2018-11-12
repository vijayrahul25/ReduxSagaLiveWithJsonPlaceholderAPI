import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import ShowPosts from "../container/ShowPosts.js";
import ShowPostById from "../container/ShowPostById.js";
import showAuthors from "../container/showAuthors.js";
import EditPost from "../container/EditPost.js";
import Home from "./Home.js";

const App = () => {
  return (
    <div className="container">
      <div>
        <Navigation />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ShowPosts" component={ShowPosts} />
        <Route exact path="/ShowPost/:id" component={ShowPostById} />
        <Route exact path="/EditPost/:id" component={EditPost} />
        <Route exact path="/showAuthors" component={showAuthors} />
      </Switch>
    </div>
  );
};
export default App;
