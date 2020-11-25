import React from 'react';
import Modal from 'react-modal';
import { TextStyle } from '../../styles/core';
import { useSelector } from 'react-redux';
import { ModalNoteInputs } from './ModalNoteInputs';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    padding: '50px',
  },
};

/**
 * Component of modal to create or update a note
 */
export const ModalNote = () => {
  if (process.env.NODE_ENV !== 'test') {
    Modal.setAppElement('#root');
  }
  const { modalOpen } = useSelector((state) => state.ui);
  const { activeNote } = useSelector((state) => state.notes);

  return (
    <Modal
      isOpen={modalOpen}
      style={customStyles}
      closeTimeoutMS={200}
      ariaHideApp={!(process.env.NODE_ENV === 'test')}
    >
      <TextStyle fontSize='60px' fontWeight='bold' textAlign='center'>
        {activeNote ? 'Change your Note' : 'Create your Note'}
      </TextStyle>
      <hr />
      <ModalNoteInputs />
    </Modal>
  );
};
