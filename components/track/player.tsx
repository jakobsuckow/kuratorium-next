import dynamic from "next/dynamic";
import React from "react";
import styled from "styled-components";
import { GlobalDataContext } from "../../services/globalDataProvider";
import Button from "../button/button";
import Text from "../text/text";
import Pause from "./assets/pause";
import Play from "./assets/play";

interface Props {
  width: number;
  shifted: boolean;
}

const Wrapper = styled.div<Props>`
  transform: ${(props: Props) =>
    props.shifted ? `translateX(-${props.width}px)` : `translateX(-0px)`};
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

  @media only screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    position: fixed;
    bottom: 10px;
    width: calc(100% - 16px);
    margin-left: 8px;
    margin-right: 8px;
  }
`;

const StyledControls = styled.div`
  padding: 8px;
`;

const SongTitle = styled(Text)`
  padding: 8px;
  color: ${props => props.theme.colors.pink};
`;

const Player: React.FC<Props> = (props: Props) => {
  const { width, shifted } = props;

  const { currentTrack, setCurrentTrack, toggle } = React.useContext(GlobalDataContext);

  const handlePlay = () => {};

  const reset = React.useCallback(() => {
    setCurrentTrack(undefined);
  }, [toggle]);

  const DynamicTrack = dynamic(() => import("./track"));

  return (
    <Wrapper width={width} shifted={shifted}>
      <StyledControls>
        <Button noBorder onClick={handlePlay}>
          {currentTrack?.isPlaying ? <Pause /> : <Play />}
        </Button>
      </StyledControls>
      {currentTrack ? <DynamicTrack play={currentTrack.isPlaying} /> : null}
      <Button onClick={reset}>Stop</Button>
    </Wrapper>
  );
};
export default Player;
