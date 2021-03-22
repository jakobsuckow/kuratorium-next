import styled from "styled-components";

interface Props {
  portrait: boolean;
  src: string;
}

export const StyledHoverImage = styled.img`
  display: none;
  visibility: hidden;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 15%;
  left: 0;
  right: 0;
  ${(props: Props) => (props.portrait ? `max-width: 25%;` : `max-width: 50%;`)}
`;

const HoverDiv = styled.div`
  &:hover ${StyledHoverImage} {
    display: block;
    visibility: visible;
  }
`;

export default HoverDiv;
