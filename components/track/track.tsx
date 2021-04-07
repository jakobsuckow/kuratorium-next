import React from "react";
import { GlobalDataContext } from "../../services/globalDataProvider";

interface Props {
  play: boolean;
}

const Track: React.FC<Props> = (props: Props) => {
  const { currentTrack, toggle } = React.useContext(GlobalDataContext);

  const audioref = React.useRef(new Audio(currentTrack?.preview.url));

  React.useEffect(() => {
    if (currentTrack?.isPlaying) {
      audioref.current.play();
      setInterval(() => {
        audioref?.current?.currentTime.toFixed(0);
      }, 1000);
    } else {
      console.log(`pause`);
      audioref.current.pause();
    }
  }, [toggle]);
  return <audio ref={audioref} src={currentTrack?.preview.url}></audio>;
};
export default Track;
