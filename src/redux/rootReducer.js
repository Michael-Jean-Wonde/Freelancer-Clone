import { combineReducers } from "redux";

import AuthReducer from "./reducer";

const rootReducer = combineReducers ({
    data: AuthReducer,
});

export default rootReducer;