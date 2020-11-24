import React from "react";
import Swal from "sweetalert2";
import { noteAddNew, noteUpdate, noteSetActive } from "../../actions/note";
import { useForm } from "../../hooks/useForm";
import styled from "styled-components";
import { InputStyle, FlexStyle, ButtonStyle } from "../../styles/core";
import { useDispatch, useSelector } from "react-redux";
import { uiCloseModal } from "../../actions/ui";

/** Style of modal input */
const ModalInputStyle = styled(InputStyle)`
  border-radius: 7px;
  font-size: 30px;
  margin-bottom: 20px;
  width: 95%;
  padding: 15px;
  padding-left: 25px;
`;

/*
 Modal Note Input
*/
export const ModalNoteInputs = () => {
  const dispatch = useDispatch();
  const { activeNote } = useSelector((state) => state.notes);
  const defaultEvent = {
    title: "",
    description: "",
    imgUrl: "",
  };

  const initEvent = activeNote || defaultEvent;
  const [formValues, handleInputChange, reset] = useForm(initEvent);

  const { description, title, imgUrl } = formValues;

  const closeModal = () => {
    dispatch(uiCloseModal());

    if (activeNote) {
      dispatch(noteUpdate(formValues));
      dispatch(noteSetActive(false));
    } else {
      const noteWithId = { id: new Date().getTime(), ...formValues };
      dispatch(noteAddNew([noteWithId]));
    }

    reset(initEvent);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      Swal.fire("The title is required", "", "error");
    } else if (description.trim().length === 0) {
      Swal.fire("The description is required", "", "error");
    } else {
      Swal.fire("Note Saved", "", "success");
      closeModal();
    }
  };
  return (
    <FlexStyle
      as='form'
      alignItems='center'
      flexDirection='column'
      onSubmit={handleSubmitForm}
    >
      <ModalInputStyle
        type='text'
        placeholder='Title'
        name='title'
        autoComplete='off'
        value={title}
        onChange={handleInputChange}
        mt='30px'
      />

      <ModalInputStyle
        as='textarea'
        type='text'
        placeholder='Description'
        rows='5'
        name='description'
        value={description}
        onChange={handleInputChange}
        p='10px'
      />

      <ModalInputStyle
        type='text'
        placeholder='Imagen (Url)'
        name='imgUrl'
        autoComplete='off'
        value={imgUrl}
        onChange={handleInputChange}
      />

      <ButtonStyle
        p='15px'
        fontSize='30px'
        fontWeight='bold'
        letterSpacing='3px'
        lineHeight='40px'
        width='100%'
        type='submit'
      >
        Save
      </ButtonStyle>
    </FlexStyle>
  );
};
