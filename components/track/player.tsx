import dynamic from "next/dynamic";
import React from "react";
import styled from "styled-components";
import { GlobalDataContext } from "../../services/globalDataProvider";
import Button from "../button/button";
import Text from "../text/text";
import Pause from "./assets/pause";
import Play from "./assets/play";

interface Props {}

const Wrapper = styled.div`
  margin-top: auto;
  display: flex;
  width: 100%;
  background-color: ${props => props.theme.colors.grey};
  height: 42px;
  border-radius: 1px;
  position: relative;
  bottom: 20px;

  @media only screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    display: flex;
    position: fixed;
    bottom: 20px;
    left: 0;
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
  const {} = props;

  const { currentTrack, setCurrentTrack, toggle } = React.useContext(GlobalDataContext);

  const handlePlay = () => {
    if (currentTrack.src === "") {
      setCurrentTrack({
        isPlaying: true,
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      });
    } else {
      toggle();
    }
  };

  const reset = React.useCallback(() => {
    setCurrentTrack({
      src: "",
      isPlaying: false,
    });
  }, [toggle]);

  const DynamicTrack = dynamic(() => import("./track"));

  return (
    <Wrapper>
      <StyledControls>
        <Button noBorder onClick={handlePlay}>
          {currentTrack?.isPlaying ? <Pause /> : <Play />}
        </Button>
      </StyledControls>
      {currentTrack.src !== "" ? <DynamicTrack play={currentTrack.isPlaying} /> : null}
      <Button onClick={reset}>Stop</Button>
    </Wrapper>
  );
};
export default Player;
