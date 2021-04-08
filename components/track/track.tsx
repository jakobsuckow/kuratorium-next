import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { GlobalDataContext } from "../../services/globalDataProvider";
import Text from "../text/text";

const TrackInfo = styled(Text)`
  color: ${props => props.theme.colors.pink};
`;

interface Props {
  play: boolean;
}

const Track: React.FC<Props> = (props: Props) => {
  const { currentTrack, toggle } = React.useContext(GlobalDataContext);

  const audioref = React.useRef(new Audio(currentTrack?.preview.url));

  const [currentTime, setCurrentTime] = React.useState<number>(0);

  const transformTime = (seconds: number) => {
    if (seconds) {
      return new Date(seconds * 1000).toISOString().substr(14, 5);
    } else return new Date(0 * 1000).toISOString().substr(14, 5);
  };

  React.useEffect(() => {
    if (currentTrack?.isPlaying) {
      audioref.current.play();
      setInterval(() => {
        setCurrentTime(audioref?.current?.currentTime);
      }, 1000);
    } else {
      console.log(`pause`);
      audioref.current.pause();
    }
  }, [toggle]);

  return (
    <>
      <audio ref={audioref} src={currentTrack?.preview.url} autoPlay={false}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <TrackInfo>
        {transformTime(currentTime)}/{transformTime(currentTrack?.time || 0)}
      </TrackInfo>
      <TrackInfo>{currentTrack?.title} -- </TrackInfo>
      <TrackInfo> {currentTrack?.artist}</TrackInfo>
    </>
  );
};
export default Track;
