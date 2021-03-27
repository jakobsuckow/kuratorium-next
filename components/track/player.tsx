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

  const { currentTrack, toggle } = React.useContext(GlobalDataContext);

  const [count, setCount] = React.useState<string>("");

  const audioref = React.useRef(new Audio(currentTrack?.src));

  React.useEffect(() => {
    if (currentTrack?.isPlaying) {
      audioref.current.play();
      setInterval(() => {
        setCount(audioref.current.currentTime.toFixed(0));
      }, 1000);
    } else {
      audioref.current.pause();
    }
  }, [toggle]);

  return (
    <Wrapper>
      <StyledControls>
        <Button noBorder onClick={toggle}>
          {currentTrack?.isPlaying ? <Pause /> : <Play />}
        </Button>
      </StyledControls>
      <SongTitle> {count}</SongTitle>
    </Wrapper>
  );
};
export default Player;
