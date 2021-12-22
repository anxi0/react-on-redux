const ADD_TODO = "todo/ADD_TODO";
const UPDATE_TODO = "todo/UPDATE_TODO";
const DELETE_TODO = "todo/DELETE_TODO";

const initialState = [];

//Action Creator
export const addTodo = (text) => ({ type: ADD_TODO, payload: text });
export const updateTodo = (id, text) => ({
  type: UPDATE_TODO,
  payload: { id, text },
});
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });

//Reducer
export const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case UPDATE_TODO:
      return state.map((cur, idx) => {
        if (idx === action.payload.id) return action.payload.text;
        return cur;
      });
    case DELETE_TODO:
      return [...state.filter((_, idx) => idx !== action.payload)];
    default:
      return state;
  }
};
