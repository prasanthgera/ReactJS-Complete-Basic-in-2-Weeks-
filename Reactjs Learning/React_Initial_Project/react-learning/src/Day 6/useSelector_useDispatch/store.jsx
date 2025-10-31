import { configureStore } from "@reduxjs/toolkit";
import counterreducer  from '../useSelector_useDispatch/counterSlice'

export const stores =configureStore({
    reducer:{
        counter:counterreducer
    }
})