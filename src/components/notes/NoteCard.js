import React, { useState } from "react";
import {
  PanelStyle,
  ImageStyle,
  TextStyle,
  ImgText,
  ImgContainer,
} from "../../styles/core";
import PropTypes from "prop-types";
import { DeleteEventFab } from "../ui/DeleteEventFab";
import { ModifyNoteFab } from "../ui/ModifyNoteFab";

/*
 Card with the information of a note
*/
export const NoteCard = ({ ...note }) => {
  const [isMouveIn, setIsMouseIn] = useState(false);

  const { id, title, imgUrl, description } = note;

  const handleMouseOver = () => {
    setIsMouseIn(true);
  };

  const handleMouseOut = () => {
    setIsMouseIn(false);
  };

  return (
    <PanelStyle
      ml='20px'
      mr='20px'
      width='450px'
      mb='50px'
      borderRadius='10px'
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <ImgContainer>
        <ImageStyle
          src={imgUrl}
          width='450px'
          height='400px'
          title={title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://www.escapadarural.com/blog/wp-content/uploads/2019/08/Playa-de-la-Tejita.-Tenerife.jpg";
          }}
        />
        {isMouveIn && <DeleteEventFab noteId={id} />}
        {isMouveIn && <ModifyNoteFab note={note} />}
        <ImgText color='white' fontSize='30px' fontWeight='bold'>
          {title}
        </ImgText>
      </ImgContainer>
      <TextStyle mb='30px' mr='25px' ml='30px' fontSize='25px'>
        {description}
      </TextStyle>
    </PanelStyle>
  );
};

NoteCard.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    imgUrl: PropTypes.string,
    description: PropTypes.string,
  }),
};
