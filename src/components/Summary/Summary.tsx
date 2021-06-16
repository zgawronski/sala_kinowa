import React, { FC } from "react";
import styled from "styled-components";
//import { GlobalStyle } from "../../styledHelpers/GlobalStyle";
import { Wrapper } from "../../styledHelpers/Components";

const SummaryWrapper = styled(Wrapper)`
  display: flex;
  margin-top: 50px;

`;
const DivTitle=styled.div`
  font-weight: bold;
  margin: auto;
  margin-top: 70px;
`;

interface props {
    summarySend: any
  }

export const Summary: FC = () => {


    return(
    <SummaryWrapper>
        <DivTitle>Twoja rezerwacja przebiegła pomyślnie!! </DivTitle>
        <div> wybrałeś miejsca:</div>
        <div></div>

    </SummaryWrapper>
    );
};