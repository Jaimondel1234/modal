import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";
import { useDispatch } from "react-redux";
import { uiOpenModal } from "../../actions/ui";
import { FabStyle } from "../../styles/core";

const PlusFabStyle = styled(FabStyle)`
  border-radius: 100%;
  font-size: 50px;
  padding: 30px;
  position: fixed;
  right: 40px;
  bottom: 25px;
  color: white;
  background-color: #007bff;
`;

/*
  Button to Open the modal
*/
export const AddNewFab = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(uiOpenModal());
  };
  return (
    <PlusFabStyle onClick={handleClick}>
      <FontAwesomeIcon icon={faPlus} />
    </PlusFabStyle>
  );
};
