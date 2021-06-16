import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "../../styledHelpers/GlobalStyle";

import { Wrapper, CheckButton } from "../../styledHelpers/Components";
import { Colors } from "../../styledHelpers/Colors";

import { IState } from "../../reducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { useDispatch, useSelector } from "react-redux";
import { getSeats } from "../../actions/userActions";
import { warehouse } from "../../tools/warehouse"
import { Link } from "react-router-dom";


type GetSeats = ReturnType<typeof getSeats>;

const TableWrapper = styled(Wrapper)`
  display: flex;
  margin-top: 50px;
`;


const TableDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(15, 50px);
  grid-template-rows: repeat(12, 50px);
  column-gap: 10px;
  row-gap: 15px;
  margin: auto;
  margin-bottom: 20px;
  div{
    border: 1px solid ${Colors.black};
    &.colorowe{
      background-color: ${Colors.orange};
    }
    &.rezerwa{
      background-color: ${Colors.black};
    }

  }

`;


const WhiteDiv = styled.div`
  border: 1px solid ${Colors.black};

  grid-column: 1;
  grid-row: 12;
`;

const FirstSpan = styled.span`
  grid-column: 2;
  grid-row: 12;
`;

const OrangeDiv = styled.div`
  border: 1px solid ${Colors.black};
  grid-column: 4;
  grid-row: 12;
  background-color: ${Colors.orange};
`;

const SecondSpan = styled.span`
  grid-column: 5;
  grid-row: 12;
`;

const BlackDiv = styled.div`
  border: 1px solid ${Colors.black};
  grid-column: 8;
  grid-row: 12;
  background-color: ${Colors.black};
`;
const ThirdSpan = styled.span`
  grid-column: 9;
  grid-row: 12;
`;
const ReservationButton = styled(CheckButton)`
  border: none;
  width: 100%;
`;

const ButtonDiv= styled.div`
  border: 1px solid ${Colors.black};
  width: 289px;
  height: 50px;
  grid-column: 11;
  grid-row: 12;
`;

interface props {
  seatCounts: any,
  seatCheck: any
}

export const SeatsTable: FC<props> = ({ seatCounts, seatCheck }) => {
  const { seatsList } = useSelector<IState, IUsersReducer>((state) => ({
    ...state.users,
  }));
  const [checkedSeats, setCheckedSeats] = useState(0);
  // ponieważ za mało czasu zamiast atrybutu sprawdzam po klasie
  const countSelectedSeats = (e: any) => {
    let target = e.target.classList;
    target.value === "" ? setCheckedSeats(checkedSeats - 1) : setCheckedSeats(checkedSeats + 1);
  };

  const highLightsSelectedSeat = (e: any) => {
    let target = e.target.classList;
    target.value === "" ? target.add("colorowe") : target.remove("colorowe");
  };


  localStorage.setItem("names", JSON.stringify(warehouse));

  const handleSeatSelection = (e: any) => {
    //1.zmien kolor
    highLightsSelectedSeat(e);
    //2.wylicz ile?
    countSelectedSeats(e);

    //3.przekaż wartość siedzenia do storage
    const seatId = { id: e.target.id };
    warehouse.push(seatId);
    console.log(warehouse);
    localStorage.setItem("names", JSON.stringify(warehouse));
    // @ts-ignore: Object is possibly 'null'.
    const tmp = JSON.parse(localStorage.getItem("names"));
    localStorage.setItem("names", JSON.stringify(tmp));
    tmp.push(seatId);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetSeats>(getSeats());

  }, [dispatch]);


  return (
    <TableWrapper>
      <GlobalStyle />
      <TableDiv>
        {seatsList.map((seat: any) => {

          const divStyle = {
            gridColumn: seat.cords.y + 1,
            gridRow: seat.cords.x + 1,

          }
          const divStyleBlack = {
            gridColumn: seat.cords.y + 1,
            gridRow: seat.cords.x + 1,
	          backgroundColor: "black"
          }


          return (
            <div onClick={(e) => checkedSeats <= seatCounts ? handleSeatSelection(e) : ""} id={seat.id} key={seat.id} style={seat.reserved ? divStyleBlack : divStyle} data-reserved={seat.reserved}></div>
          )
        })}

          <WhiteDiv></WhiteDiv>
          <FirstSpan>Miejsca dostępne</FirstSpan>
          <BlackDiv></BlackDiv>
          <SecondSpan>Miejsca zarezerwowan</SecondSpan>
          <OrangeDiv></OrangeDiv>
          <ThirdSpan>Twój wybór</ThirdSpan>
          <ButtonDiv>
          <Link to="/Summary">
            <ReservationButton >Rezerwuj</ReservationButton>
          </Link>
          </ButtonDiv>
      </TableDiv>

    </TableWrapper >
  );
};



