import { INCREMENT,DECREMENT } from "./action";

const initialValue={
    count:0
}
export const reducerData=(state=initialValue,action)=>{
    switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count:state>=0? state.count - 1:0 };
    default:
      return state;
  }

}