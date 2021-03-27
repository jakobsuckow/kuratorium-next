import React from "react";
import styled from "styled-components";
import { GlobalDataContext } from "../../services/globalDataProvider";
import Button from "../button/button";
import Text from "../text/text";

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

const Play = () => {
  return (
    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 1.76619C0 0.988895 0.847971 0.508783 1.5145 0.908698L18.5708 11.1425C19.2182 11.5309 19.2182 12.4691 18.5708 12.8575L1.5145 23.0913C0.847971 23.4912 0 23.0111 0 22.2338V1.76619Z"
        fill="#0D6893"
      />
    </svg>
  );
};

const Pause = () => {
  return (
    <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="9" height="24" rx="1" fill="#0D6893" />
      <rect x="12" width="9" height="24" rx="1" fill="#0D6893" />
    </svg>
  );
};

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
