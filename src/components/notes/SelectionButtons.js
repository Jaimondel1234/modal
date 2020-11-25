import React from "react";
import styled from "styled-components";
import { FlexStyle, ButtonStyle } from "../../styles/core";
import { useDispatch } from "react-redux";
import { setListMode } from "../../actions/note";

const SelectorButtonStyle = styled(ButtonStyle)`
  padding: 7px;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 3px;
  margin-right: 10px;
`;

/**
 * It shows the buttons of selections (asc, desc, ..)
 */
export const SelectionButtons = () => {
  const dispatch = useDispatch();

  const handleClick = (listMode) => () => {
    dispatch(setListMode(listMode));
  };
  return (
    <FlexStyle alignItem='center' justifyContent='center' flexDirection='row'>
      <SelectorButtonStyle onClick={handleClick("oldToNew")}>
        ASC
      </SelectorButtonStyle>
      <SelectorButtonStyle onClick={handleClick("newToOld")}>
        DESC
      </SelectorButtonStyle>
      <SelectorButtonStyle onClick={handleClick("AToZ")}>
        A-Z
      </SelectorButtonStyle>
      <SelectorButtonStyle onClick={handleClick("ZToA")}>
        Z-A
      </SelectorButtonStyle>
    </FlexStyle>
  );
};
