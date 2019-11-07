import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import { connect } from "react-redux";

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.cars[props.carId].additionalFeatures.length ? (
        <ol type="1">
          {props.cars[props.carId].additionalFeatures.map(item => (
            <AdditionalFeature
              key={item.id}
              feature={item}
              addItem={props.addItem}
              carId={props.carId}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cars: state
  };
};

export default connect(mapStateToProps)(AdditionalFeatures);