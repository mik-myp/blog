import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import AdminIndex from "../AdminIndex";
import Login from "../Login";
function Main() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/index"  component={AdminIndex} />
      {/* <Redirect to="/login" /> */}
    </Router>
  );
}
export default Main;
