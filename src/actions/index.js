export const increment = "amount/INCREMENT";
export const decrement = "amount/DECREMENT";
export const incrementByAmount = "amount/INCREMENT_BY_AMOUNT";

export function inc() {
  return { type: increment };
}

export function dec() {
  return { type: decrement };
}

export function increByAmt(value) {
  return { type: incrementByAmount, payload: value };
}
