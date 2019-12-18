import {
      INCREMENT,
      DECREMENT
} from '../actionconstants';

//BIZ LOGIC
export function counterReducer(state, action) {
      switch (action.type) {
            case INCREMENT:
                  //pure function: biz logic
                  let count = state.count + 1;
                  return {
                        ...state, count
                  };
            case DECREMENT:
                  //pure function: biz logic
                  return {
                        ...state, count: state.count - 1
                  };
            default:
                  throw new Error();

      }
}