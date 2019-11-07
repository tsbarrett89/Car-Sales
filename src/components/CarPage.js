import React from "react";
import { connect } from "react-redux";
import { addFeature, removeFeature } from "../actions/actions";

import {Link} from "react-router-dom";
import Header from "./Header";
import AddedFeatures from "./AddedFeatures";
import AdditionalFeatures from "./AdditionalFeatures";
import Total from "./Total";

const App = props => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
  };

  return (
    <>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div className="boxes">
        {console.log(props.match.params.carId)}
        <div className="box">
          <Header carId={props.match.params.carId}/>
          <AddedFeatures carId={props.match.params.carId} removeItem={removeFeature} />
        </div>
        <div className="box">
          <AdditionalFeatures carId={props.match.params.carId} addItem={buyItem} />
          <Total carId={props.match.params.carId} />
        </div>
      </div>
    </>
  );
};

export default connect(
  null,
  { addFeature, removeFeature }
)(App);