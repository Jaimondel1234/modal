import styled from "styled-components";
import {
  space,
  layout,
  color,
  border,
  typography,
  shadow,
  flexbox,
  position,
} from "styled-system";

/** Style of a container */
const ContainerStyle = styled.div`
  ${layout}
  ${position}
  ${space}
  ${color}
`;
/** Style of a panel with boder and shadow*/
const PanelStyle = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  ${color}
  ${border}
  ${space}
  ${layout}
  ${typography}
`;

/** Style of card placeholder */
const PlaceHolderStyle = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: grey;
  width: 400px;
  height: 400px;
  opacity: 0.5;
  ${color}
  ${border} 
  ${space} 
  ${layout};
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

/** Style of Scroll*/
const ScrollContainer = styled.div`
  max-height: 90vh;
  overflow-y: scroll;
`;

/** Style of span **/
const SpanStyle = styled.span`
  ${border}
  ${shadow}
  ${space}
  ${typography}
  ${color}
  display:table;
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
  float: "left",
};

/* Style of Container List
 */
const ContainerList = styled.ul`
  ${space}
  ${color}
  ${layout}
  ${border}
  ${layout}
`;

/* Style of Elements of a list
 */
const ListElement = styled.li`
  ${space}
  ${color}
  ${layout}
  ${typography}
  ${shadow}
`;

export {
  ContainerStyle,
  PanelStyle,
  TextStyle,
  FlexStyle,
  InputStyle,
  ButtonStyle,
  ImageStyle,
  ScrollContainer,
  PlaceHolderStyle,
  SpanStyle,
  NavbarList,
  NavbarElement,
  ContainerList,
  ListElement,
};
