import { increment, decrement, incrementByAmount } from "../actions/index";

function Amount(state = { amount: 0 }, action) {
  switch (action.type) {
    case increment:
      return { amount: state.amount + 1 };
    case decrement:
      return { amount: state.amount - 1 };
    case incrementByAmount:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}

export default Amount;
