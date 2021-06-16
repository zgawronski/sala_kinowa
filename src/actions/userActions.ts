import { Dispatch } from "redux";
import * as actionTypes from "../actions/actionTypes/userTypes";
import { ISingleSeat } from "../entities/seats";

export const getSeats = (): Promise<ISingleSeat[]> =>
  ((dispatch: Dispatch) => {
    return fetch("http://localhost:3004/seats")
      .then((response) => response.json())
      .then((seatsList: ISingleSeat[]) => {
        dispatch({
          type: actionTypes.GET_SEATS,
          seatsList,
        });
      });
  }) as any;
