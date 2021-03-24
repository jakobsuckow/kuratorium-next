import React, { useState } from "react";
import { Event, News } from "../../@types";
import List from "../list/list";
import ListItem from "../list/listItem";
import Link from "../link/link";
import HoverDiv, { StyledHoverImageDiv } from "../hoverImage/hoverDiv";
import { relative } from "node:path";
import Image from "next/image";

interface Props {
  events: Event[];
  news: News[];
}

const Dates: React.FC<Props> = (props: Props) => {
  const { events, news } = props;
  return (
    <>
      <h1>Feed</h1>
      {news.map((n: News, index: number) => (
        <Link href={n.link} key={index}>
          <List key={n.id}>
            <ListItem>{n.date}</ListItem>
            <ListItem>{n.headline}</ListItem>
          </List>
        </Link>
      ))}
      <h1>Events</h1>
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
    </>
  );
};

export default Dates;
