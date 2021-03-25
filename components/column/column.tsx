import styled from "styled-components";

interface Props {
  lg?: boolean;
}

const Column = styled.div`
  margin-top: 35px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
  padding: ${(props: Props) => (props.lg ? `0 40px` : `0 4px`)};

  ${(props: Props) => (props.lg ? `flex: 0 0 40%;` : `flex: 1;`)}

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
    -ms-overflow-style: none;
  }

  @media screen and (max-width: 600px) {
    overflow-y: visible;
    position: relative;
    height: auto;

    padding: 0 4px;

    ${(props: Props) => props.lg && `height: 100vh;`}
  }
`;

export default Column;
