import {useReducer} from "react";
const initialState = {
  counterA: 0,
  counterB: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "incrementA":
        return { ...state, counterA: state.counterA + 1 };
    case "decrementA":
        return { ...state, counterA: state.counterA - 1 };
    case "incrementB":
        return { ...state, counterB: state.counterB + 1 };
    case "decrementB":
        return { ...state, counterB: state.counterB - 1 };
        case "reset":
        return initialState;
    default:
        return state;
  }
};
const DoubleCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Double Counter</h2>
      <p>Counter A: {state.counterA}</p>
      <p>Counter B: {state.counterB}</p>
      <button onClick={() => dispatch({ type: "incrementA" })}>
        Increment A
      </button>
      <button onClick={() => dispatch({ type: "decrementA" })} disabled={state.counterA <= 0}>
        Decrement A
      </button>
      <button onClick={() => dispatch({ type: "incrementB" })}>
        Increment B
      </button>
      <button onClick={() => dispatch({ type: "decrementB" })} disabled={state.counterB <= 0}>
        Decrement B
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset-Both</button>
    </div>
  );
};

export default DoubleCounter;
