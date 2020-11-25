import styled, { keyframes } from 'styled-components';
import {
  space,
  layout,
  color,
  border,
  typography,
  shadow,
  flexbox,
  position,
} from 'styled-system';

/* 
 Animation fadeIn
*/
const FadeIn = keyframes`
from { opacity: 0; }
to   { opacity: 1; }
`;

/** Style of a container */
const ContainerStyle = styled.div`
  animation: ${FadeIn} 0.5s 0s both;
  ${layout}
  ${position}
  ${space}
  ${color}
`;
/** Style of a panel with boder and shadow*/
const PanelStyle = styled.div`
  animation: ${FadeIn} 0.5s 0s both;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  ${color}
  ${border}
  ${space}
  ${layout}
  ${typography}
`;

/** Style of text */
const TextStyle = styled.div`
  ${shadow}
  ${space}
  ${typography}
  ${color}
`;

/** Style of display flex*/
const FlexStyle = styled.div`
  display: flex;

  ${flexbox}
  ${layout}
  ${space}
`;
/** Style of input*/
const InputStyle = styled.input`
  height: 100;
  outline: none;
  width: 100%;

  ${layout}
  ${color}
  ${border}
  ${space}
  ${typography}
`;
/** Style of Button*/
const ButtonStyle = styled.button`
  background: #007bff;
  border: #007bff;
  border-radius: 7px;
  color: white;
  cursor: pointer;
  text-shadow: 2px 2px 4px #000000;
  width: 100%;

  &:hover {
    opacity: 0.75;
  }
  &:active {
    opacity: 0.75;
  }

  ${typography}
  ${space}
  ${layout}
`;

/** Style of Image*/
const ImageStyle = styled.img`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 7px;
  ${layout}
  ${space}
`;

/** Style of Navbar List */
const NavbarList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-left: 5px;
  padding-right: 20px;
  overflow: hidden;
  background-color: #1e90ff;
`;

/** Style of Navbar Element */
const NavbarElement = styled.li`
  float: ${(props) => props.float};

  a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-weight: bold;
    font-size: 40px;
    text-shadow: 2px 2px 4px #000000;
  }

  a:hover {
    opacity: 0.75;
  }
`;

NavbarElement.defaultProps = {
  float: 'left',
};

const FabStyle = styled.button`
  animation: ${FadeIn} 0.5s 0s both;
  border-radius: 100%;
  font-size: 50px;
  padding: 10px;
  border: none;
  cursor: pointer;
  position: absolute;
  display: inline-block;
  background-color: transparent;
  color: white;
`;

/* 
 Style of a image container
*/
const ImgContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 50px;
`;

/* 
 Style of a text in an image
*/
const ImgText = styled(TextStyle)`
  position: absolute;
  display: inline-block;
  left: 8%;
  top: 80%;
`;

export {
  ContainerStyle,
  PanelStyle,
  TextStyle,
  FlexStyle,
  InputStyle,
  ButtonStyle,
  ImageStyle,
  ImgContainer,
  ImgText,
  NavbarList,
  NavbarElement,
  FabStyle,
};
