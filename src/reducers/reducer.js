import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/actions";

const initialState = {
  car1: {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: "2019 Ford Mustang",
      image:
        "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
      features: []
    },
    additionalFeatures: [
      { id: 1, name: "V-6 engine", price: 1500 },
      { id: 2, name: "Racing detail package", price: 1500 },
      { id: 3, name: "Premium sound system", price: 500 },
      { id: 4, name: "Rear spoiler", price: 250 }
    ]
  },
  car2: {
    additionalPrice: 0,
    car: {
      price: 25000,
      name: "MustangToo",
      image:
        "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
      features: []
    },
    additionalFeatures: [
      { id: 1, name: "Beans", price: 1111 },
      { id: 2, name: "Bing", price: 900 },
      { id: 3, name: "Extra Chorgle", price: 350 },
      { id: 4, name: "Cronkstyle", price: 999 }
    ]
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      console.log({ ...state[action.payload.carId].car.features})
      return {
        ...state,
        [action.payload.carId]: {
          additionalPrice: state[action.payload.carId].additionalPrice + action.payload.feature.price,
          car: {
            ...state[action.payload.carId].car,
            features: [...state[action.payload.carId].car.features, action.payload.feature]
          },
          additionalFeatures: state[action.payload.carId].additionalFeatures.filter(
            el => el.id !== action.payload.feature.id
          )
        }
      };
    case REMOVE_FEATURE:
      return {
        ...state,
        [action.payload.carId]: {
          additionalPrice: state[action.payload.carId].additionalPrice - action.payload.feature.price,
          car: {
            ...state[action.payload.carId].car,
            features: state[action.payload.carId].car.features.filter(el => el.id !== action.payload.feature.id)
          },
          additionalFeatures: [...state[action.payload.carId].additionalFeatures, action.payload.feature]
      }
      };
    default:
      return state;
  }
};

export default reducer;