import { combineReducers } from "@reduxjs/toolkit";
import plaidReducer from "./plaidReducer";
import authReducer from "./authReducer";
import appBarReducer from "./appBarReducer";

const rootReducer = combineReducers({plaid: plaidReducer, auth: authReducer, appBar: appBarReducer})

export default rootReducer