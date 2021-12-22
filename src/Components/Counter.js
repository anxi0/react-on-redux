import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../redux/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const num = useSelector((state) => state.counter.num);
  return (
    <div
      style={{
        backgroundColor: "#e8affe",
        width: "100vw",
        height: "100vh",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div style={{ fontSize: "100px", color: "#280137" }}>{num}</div>
        <div>
          <button
            onClick={() => dispatch(increase())}
            style={{
              backgroundColor: "white",
              border: "3px solid #280137",
              width: "100px",
              height: "50px",
              fontSize: "30px",
              marginRight: "10px",
            }}
          >
            INC
          </button>
          <button
            onClick={() => dispatch(decrease())}
            style={{
              backgroundColor: "white",
              border: "3px solid #280137",
              width: "100px",
              height: "50px",
              fontSize: "30px",
            }}
          >
            DEC
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
