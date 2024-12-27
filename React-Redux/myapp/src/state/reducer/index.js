import { combineReducers } from 'redux'
import { reducer as amountReducer}  from '../reducer/amountReducer'
export const Allreducers = combineReducers({
     amt: amountReducer                          
})