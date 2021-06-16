import { ISingleSeat } from "../../entities/seats";

export const GET_SEATS = "GET_SEATS";

export interface IUserTypes {
  GET_SEATS: {
    seatsList: ISingleSeat[];
  };
}
