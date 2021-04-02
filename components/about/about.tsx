import React from "react";
import Inner from "../column/inner";
import Block from "../text/block";

interface Props {}

const About: React.FC<Props> = (props: Props) => {
  const {} = props;
  return (
    <Inner>
      <Block>
        The last years saw a massive increase in record labels; most of them with the concept to
        showcase the music of friends and associates. This led to competition in a market that used
        to flourish through coexistence. With the disappearance of previous natural boundaries in
        the release of music, such as financial and capacitative limitations, people from all sides
        of the scene search for excellent curation to find their way in an overcrowded and
        overwhelming field.
      </Block>
      <Block>
        Still, there are many skilled curators without a platform to curate: DJs lacking the
        capacities or a worked-out concept for an own label; bookers whose curational drive exceeds
        the boundaries of the home institution; label heads with more ideas than one label can
        cover; producers with the abilities to inspire a whole wave of artists; individuals with a
        vision to share, not a taste to show off.
      </Block>
      <Block>
        Kuratorium operates on a project-basis, reducing the urge to release music for the sake of
        releasing something and giving a platform to those who will do something special with it.
        Each project has a different curator with a unique overall topic. The basic idea to distill
        the values of the curator’s vision. There are no artistic or curational boundaries in terms
        of a project’s extent. For each project, every aspect of its operational nature can be
        defined from scratch.
      </Block>
    </Inner>
  );
};
export default About;
