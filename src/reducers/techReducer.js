import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from "../actions/types";

const initalState = {
  tech: null,
  loading: false,
  error: null,
};
// eslint-disable-next-line
export default (state = initalState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_TECHS:
      return {
        ...state,
        tech: action.payload,
        loading: false,
      };
    case ADD_TECH:
      return {
        ...state,
        tech: [...state.tech, action.payload],
        loading: false,
      };
    case DELETE_TECH:
      return {
        ...state,
        tech: state.tech.filter((t) => t.id !== action.payload),
        loading: false,
      };
    case TECHS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
