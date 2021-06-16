import React, { FC, useState } from "react";

import { Route } from "react-router";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { Wrapper } from "../../styledHelpers/Components";

import { SeatsTable } from "../SeatsTable/SeatsTable";
import { StartPage } from "../StartPage/StartPage";
import { Summary } from "../Summary/Summary"

export const MainPage: FC = () => {

  const [seat, setSeat] = useState(0);
  const [checked, setChecked] = useState(true);

  const seatDuo = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    checked ? setChecked(false) : setChecked(true);
    console.log(checked);
  };
  const takeSeat = () => {
    const seatCount = (document.getElementById("seat") as HTMLInputElement)
      .value;
    setSeat(parseInt(seatCount));

  };


  return (
    <Router>
      <Switch>
        <Wrapper>
          <Route path="/SeatsTable">
            <SeatsTable seatCounts={seat} seatCheck={checked} />
          </Route>
          <Route path="/" exact>
            <StartPage seatCounts={takeSeat} seatCheck={seatDuo} />
          </Route>
          <Route path="/Summary">
            <Summary />
          </Route>
        </Wrapper>
      </Switch>
    </Router>
  );
};
