//import React from 'react';

import styled from "styled-components";
import { Colors } from "./Colors";

export type Styles = {
  [ruleOrSelector: string]: string | number | Styles;
};

export const Wrapper = styled.section``;

export const CheckButton = styled.button`
  width: 270px;
  height: 50px;
  background-color: ${Colors.white};
  border: 1px solid ${Colors.black};
  padding: 0;
`;

export const SeatsInput = styled.input.attrs({ id: "seat", type:"number" })`
  margin-left: 20px;
  height: 4ch;
  text-align: right;
  padding-right: 5px;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
  -webkit-appearance: none;}
  -moz-appearance: textfield;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  position: relative;
  margin: 5px;
  left: 0;
`;
