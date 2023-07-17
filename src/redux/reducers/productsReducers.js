import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from "../actions/actionstypes";


const INITIAL_STATE = {
  loading: false,
  data: [],
  error: "",
};

const DataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true, error: "" };
    case FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      console.log(state);
      return state;
  }
};

export default DataReducer;
