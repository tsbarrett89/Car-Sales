import React from "react";
import { connect } from "react-redux";

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.cars[props.carId].car.image} alt={props.cars[props.carId].car.name} />
      </figure>
      <h2>{props.cars[props.carId].car.name}</h2>
      <p>Amount: ${props.cars[props.carId].car.price}</p>
    </>
  );
};

const mapStateToProps = state => {
  return {
    cars: state
  };
};

export default connect(mapStateToProps)(Header);
