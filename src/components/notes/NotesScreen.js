import React, { useEffect } from 'react';
import { NoteList } from './NoteList';
import { ContainerStyle } from '../../styles/core';
import { AddNewFab } from '../ui/AddNewFab';
import { ModalNote } from './ModalNote';
import { useSelector } from 'react-redux';
import { SelectionButtons } from './SelectionButtons';

/*
  Component of Screen Notes
*/
export const NotesScreen = () => {
  const { notes } = useSelector((state) => state.notes);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const { modalOpen } = useSelector((state) => state.ui);
  return (
    <>
      <ContainerStyle mt='20px'>
        <SelectionButtons />
        <NoteList />
        <AddNewFab />
      </ContainerStyle>
      {modalOpen && <ModalNote />}
    </>
  );
};
