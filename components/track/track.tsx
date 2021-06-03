import React from "react";
import styled from "styled-components";
import { GlobalDataContext } from "../../services/globalDataProvider";
import Button from "../button/button";
import Text from "../text/text";
import Pause from "./assets/pause";
import Play from "./assets/play";
import { useAudio } from "react-use";
import { transformTime } from "../../services/transformTime";

const StyledControls = styled.div`
  padding-left: 8px;
  width: 100%;
  display: flex;
  vertical-align: middle;
`;

const TrackInfo = styled(Text)`
  margin-left: 6px;
  padding: 12px 4px 0 1px;
  color: ${props => props.theme.colors.pink};
`;

const TrackImage = styled(Text)`
  padding-right: 4px;
  padding-top: 4px;
  color: ${props => props.theme.colors.pink};
`;

const Track: React.FC<{}> = () => {
  const { currentTrack } = React.useContext(GlobalDataContext);
  const [audio, state, controls, ref] = useAudio({
    src: currentTrack?.preview.url as string,
    autoPlay: false,
  });

  return (
    <StyledControls>
      {state.paused === true ? (
        <Button noBorder style={{ padding: "8px 8px" }} onClick={controls.play}>
          <Play />
        </Button>
      ) : (
        <Button noBorder style={{ padding: "8px 8px" }} onClick={controls.pause}>
          <Pause />
        </Button>
      )}
      {audio}
      <TrackImage>
        <img src={currentTrack?.Cover.formats.thumbnail.url} height={35} />
      </TrackImage>
      <TrackInfo>
        {transformTime(state.time)}/{transformTime(state.duration || 0)}
      </TrackInfo>
      <TrackInfo>{currentTrack?.title} -- </TrackInfo>
      <TrackInfo> {currentTrack?.artist}</TrackInfo>
    </StyledControls>
  );
};
export default Track;
