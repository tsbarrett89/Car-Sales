import React from "react";
import { connect } from "react-redux";

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.cars[props.carId].car.price + props.cars[props.carId].additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cars:state
  };
};

export default connect(mapStateToProps)(Total);