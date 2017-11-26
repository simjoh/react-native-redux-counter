export const add = (one) => {
  return {
    type: 'ADD',
    value:one+1
  };
};

export const subtract = (one) => {
  return {
    type: 'SUBTRACT',
    value:one-1,
  };
};
