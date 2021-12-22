const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initialState = {
  num: 0,
};

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, num: state.num + 1 };
    case DECREASE:
      return { ...state, num: state.num - 1 };
    default:
      return state;
  }
};
