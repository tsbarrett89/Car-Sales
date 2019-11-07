import React from "react";
import {Route, Link} from "react-router-dom";

import CarPage from "./components/CarPage";

const App = () => {
  return (
    <>
      <Route exact path="/" render={props => (
      <div>
        <Link to="/car1">Car1</Link>
        <Link to="/car2">Car2</Link>
      </div>
      )}/>
      <Route path="/:carId" component={CarPage} />
    </>
  )
}

export default App;
