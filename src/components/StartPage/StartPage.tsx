import React, { FC } from "react";
import styled from "styled-components";
import { GlobalStyle } from "../../styledHelpers/GlobalStyle";
import { Link } from "react-router-dom";

import {
  Checkbox,
  SeatsInput,
  CheckButton,
  Wrapper,
} from "../../styledHelpers/Components";

const MainWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100vh;
  align-items: center;
  div {
    width: 270px;
    margin-top: 20px;
    position: relative;
  }
`;

interface props {
  seatCounts: any,
  seatCheck: any
}

export const StartPage: FC<props> = ({ seatCounts, seatCheck }) => {
  return (
    <MainWrapper >
      <GlobalStyle />
      <div>
        <span>Liczba miejsc: </span>
        <SeatsInput />
      </div>
      <div>
        <Checkbox onChange={seatCheck} />
        <span>Czy miejsca mają być obok siebie? </span>
      </div>
      <div>
        <Link to="/SeatsTable">
          <CheckButton onClick={seatCounts}>Wybierz miejsca</CheckButton>
        </Link>
      </div>
    </MainWrapper>
  );
};
