import { createStore } from "redux";
import { persistReducer } from "redux-persist";
import { config } from "./persistConfig";

import usersReducers from "../reducers";

const persisted = persistReducer(config, usersReducers);

const otherStore = createStore(persisted);

export default otherStore;
