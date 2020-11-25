import React from "react";
import PropTypes from "prop-types";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { noteDelete } from "../../actions/note";
import { FabStyle } from "../../styles/core";

const TrashFabStyle = styled(FabStyle)`
  left: 8%;
  bottom: 75%;
`;

/*
  Button to delete a note
*/
export const DeleteEventFab = ({ noteId }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(noteDelete(noteId));
  };

  return (
    <TrashFabStyle onClick={handleClick}>
      <FontAwesomeIcon icon={faTrash} />
    </TrashFabStyle>
  );
};

DeleteEventFab.propTypes = {
  noteId: PropTypes.number.isRequired,
};
