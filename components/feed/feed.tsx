import React from "react";
import { Event, News } from "../../@types";
import List from "../list/list";
import ListItem from "../list/listItem";
import Link from "../link/link";
import HoverDiv, { StyledHoverImageDiv } from "../hoverImage/hoverDiv";
import Image from "next/image";
import Inner from "../column/inner"

interface Props {
  events: Event[];
  news: News[];
}

const Dates: React.FC<Props> = (props: Props) => {
  const { events, news } = props;
  return (
    <Inner>
      {news.map((n: News, index: number) => (
        <Link href={n.link} key={index}>
          <List key={n.id}>
            <ListItem>{n.date}</ListItem>
            <ListItem>{n.headline}</ListItem>
          </List>
        </Link>
      ))}
      <>
        {events.map((event: Event, index: number) => (
          <Link href={event.link} key={index}>
            <HoverDiv>
              <List key={event.id}>
                <ListItem>{event.date}</ListItem>
                <ListItem>{event.name}</ListItem>
                <ListItem>{event.venue}</ListItem>
                <ListItem>{event.city}</ListItem>
                <ListItem>{event.musicBy}</ListItem>
                <StyledHoverImageDiv
                  portrait={Boolean(
                    event.artwork[0].thumbnails.large.height >
                      event.artwork[0].thumbnails.large.width
                  )}>
                  <Image
                    src={event.artwork[0].thumbnails.large.url}
                    width={event.artwork[0].thumbnails.large.width}
                    height={event.artwork[0].thumbnails.large.height}
                    alt={event.name}
                    layout="responsive"
                  />
                </StyledHoverImageDiv>
              </List>
            </HoverDiv>
          </Link>
        ))}
      </>
    </Inner>
  );
};

export default Dates;
