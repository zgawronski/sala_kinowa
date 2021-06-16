import { ISingleSeat } from "../entities/seats";
import * as actionTypes from "../actions/actionTypes/userTypes";

export interface IUsersReducer {
  seatsList: ISingleSeat[];
}

const defaultState = (): IUsersReducer => ({
  seatsList: [],
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_SEATS: {
      const data: actionTypes.IUserTypes["GET_SEATS"] = action;
      return {
        ...state,
        seatsList: data.seatsList,
      };
    }
    default: {
      return state;
    }
  }
};
