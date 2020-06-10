
import { combineReducers } from 'redux';
import { default as company } from "./companyReducer";


const rootReducer = combineReducers({
    company
});

export default rootReducer;