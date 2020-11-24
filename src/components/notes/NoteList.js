import React from "react";
import { FlexStyle } from "../../styles/core";
import map from "lodash/map";
import { NoteCard } from "./NoteCard";
import { useSelector } from "react-redux";
import { getListByMode } from "../../helpers/helpers";

/*
 Cards List
*/
export const NoteList = () => {
  const { notes, listMode } = useSelector((state) => state.notes);
  let noteListToShow = getListByMode(listMode, notes);

  return (
    <FlexStyle
      alignItem='center'
      justifyContent='center'
      flexDirection='column'
      mt='30px'
    >
      <FlexStyle
        alignItem='center'
        justifyContent='center'
        flexDirection='row'
        flexWrap='wrap'
      >
        {noteListToShow &&
          noteListToShow.length > 0 &&
          map(noteListToShow, (props) => (
            <NoteCard key={props.id} {...props} />
          ))}
      </FlexStyle>
    </FlexStyle>
  );
};
