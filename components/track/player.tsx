import dynamic from "next/dynamic";
import React from "react";
import styled from "styled-components";
import { Track } from "../../@types";
import { GlobalDataContext } from "../../services/globalDataProvider";
import Button from "../button/button";
import Text from "../text/text";
import Pause from "./assets/pause";
import Play from "./assets/play";

interface Props {
  width: number;
  shifted: boolean;
}

interface WrapperProps {
  hidden: boolean;
}

const Wrapper = styled.div<WrapperProps & Props>`
  transform: ${props => (props.shifted ? `translateX(-${props.width}px)` : `translateX(-0px)`)};
  transition: transform 0.7s;
  margin-top: auto;
  display: flex;
  width: calc(${(props: Props) => props.width}px - 70px);
  margin-left: 40px;
  background-color: ${props => props.theme.colors.grey};
  height: 42px;
  border-radius: 1px;
  position: absolute;
  bottom: 20px;
  z-index: 10;

  ${props =>
    props.hidden
      ? `transform: translateY(100px); width: 0px;`
      : `transform: translateY(0); width: 100%`}

  @media only screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    position: fixed;
    bottom: 10px;
    width: calc(100% - 16px);
    margin-left: 8px;
    margin-right: 8px;
  }
`;

const Player: React.FC<Props> = (props: Props) => {
  const { width, shifted } = props;

  const { currentTrack } = React.useContext(GlobalDataContext);

  const DynamicTrack = dynamic(() => import("./track"));

  return (
    <Wrapper width={width} shifted={shifted} hidden={Boolean(!currentTrack)}>
      {currentTrack ? <DynamicTrack /> : null}
    </Wrapper>
  );
};
export default Player;
