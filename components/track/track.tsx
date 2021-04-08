import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { GlobalDataContext } from "../../services/globalDataProvider";
import Button from "../button/button";
import Text from "../text/text";
import Pause from "./assets/pause";
import Play from "./assets/play";

const StyledControls = styled.div`
  padding-left: 8px;
  width: 100%;
  display: flex;
  vertical-align: middle;
`;

const TrackInfo = styled(Text)`
  padding-right: 4px;
  padding-top: 4px;
  color: ${props => props.theme.colors.pink};
`;

interface Props {}

const Track: React.FC<Props> = (props: Props) => {
  const { currentTrack } = React.useContext(GlobalDataContext);

  const audioref = React.useRef(new Audio(currentTrack?.preview.url));

  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);

  const [currentTime, setCurrentTime] = React.useState<number>(0);

  const transformTime = (seconds: number) => {
    if (seconds) return new Date(seconds * 1000).toISOString().substr(14, 5);
    else return new Date(0 * 1000).toISOString().substr(14, 5);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  React.useEffect(() => {
    if (isPlaying) {
      audioref.current.play();
      const timer = setInterval(() => {
        setCurrentTime(audioref?.current?.currentTime);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      console.log(`pause`);
      audioref.current.pause();
    }
  }, [togglePlay]);

  return (
    <StyledControls>
      <Button noBorder onClick={togglePlay}>
        {isPlaying ? <Pause /> : <Play />}
      </Button>
      <audio ref={audioref} src={currentTrack?.preview.url} autoPlay={false}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <TrackInfo>
        <img src={currentTrack?.Cover.formats.thumbnail.url} height={35} />
      </TrackInfo>
      <TrackInfo>
        {transformTime(currentTime)}/{transformTime(currentTrack?.time || 0)}
      </TrackInfo>
      <TrackInfo>{currentTrack?.title} -- </TrackInfo>
      <TrackInfo> {currentTrack?.artist}</TrackInfo>
    </StyledControls>
  );
};
export default Track;
