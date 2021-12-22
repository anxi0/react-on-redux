import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, deleteTodo } from "../redux/todo";
import { useRef } from "react";

const Todo = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo);
  const addInputRef = useRef();
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "block" }}>
        <h1>Todo List</h1>
        <div>
          <input
            ref={addInputRef}
            placeholder="Write down and ass up"
            onKeyPress={(e) => {
              if (e.code === "Enter" && addInputRef.current.value !== "") {
                dispatch(addTodo(addInputRef.current.value));
                addInputRef.current.value = "";
              }
            }}
          />
          <button
            onClick={() => {
              if (addInputRef.current.value !== "") {
                dispatch(addTodo(addInputRef.current.value));
                addInputRef.current.value = "";
              }
            }}
          >
            Down&Up
          </button>
        </div>
        <div>
          <ul>
            {todoList.map((cur, idx) => {
              return (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    width: "200px",
                    justifyContent: "space-between",
                  }}
                >
                  <li
                    onClick={() => {
                      const change = prompt("In more effective sentence");
                      if (change !== "") dispatch(updateTodo(idx, change));
                    }}
                  >
                    {cur}
                  </li>
                  <button onClick={() => dispatch(deleteTodo(idx))}>
                    Waste
                  </button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
