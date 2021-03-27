import React from "react";
import Button from "../button/button";

interface Props {}

const Track: React.FC<Props> = (props: Props) => {
  const url = `http://localhost:1337/uploads/02_Wie_Wolken_da4aa472a5.mp3`;
  const {} = props;

  const audioref = React.useRef(new Audio(url));

  const [playing, setPlaying] = React.useState(false);

  const toggle = () => {
    setPlaying(!playing);
  };

  React.useEffect(() => {
    playing ? audioref.current.play() : audioref.current.pause();
  }, [playing]);

  return <Button onClick={toggle}>{playing ? `Pause` : `Play`}</Button>;
};
export default Track;
