const defaultState = {
  value:0,
};
 

export default function reducer(state = defaultState, action) {

  switch (action.type) {
    case 'ADD': 
      return Object.assign({}, state, { 
        value:action.value
      });
    case 'SUBTRACT':
      return Object.assign({}, state, { 
        value:action.value
      });
    default:
      return state;
  }
}