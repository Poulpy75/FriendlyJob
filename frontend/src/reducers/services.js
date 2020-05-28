import { SAVE_SERVICES } from "../action/servicesActions";

const initialState = {
  // Initial State
  /** List of service */
  serviceList: [],
};

const servicesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SERVICES:
      return {
        ...state,
        serviceList: action.newServices,
      };
    default: return state;
  }
};

export default servicesReducer;