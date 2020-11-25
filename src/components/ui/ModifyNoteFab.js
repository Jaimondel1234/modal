import React from 'react';
import PropTypes from 'prop-types';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { noteSetActive } from '../../actions/note';
import { uiOpenModal } from '../../actions/ui';
import { FabStyle } from '../../styles/core';

const PencilAltFabStyle = styled(FabStyle)`
  right: 8%;
  bottom: 75%;
`;

/*
  Button to modify a note
*/
export const ModifyNoteFab = ({ note }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(noteSetActive(note));
    dispatch(uiOpenModal());
  };

  return (
    <PencilAltFabStyle onClick={handleClick}>
      <FontAwesomeIcon icon={faPencilAlt} />
    </PencilAltFabStyle>
  );
};

ModifyNoteFab.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    imgUrl: PropTypes.string,
    description: PropTypes.string,
  }),
};
