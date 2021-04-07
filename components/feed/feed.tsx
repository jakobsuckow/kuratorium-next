import React from "react";
import { Event, News } from "../../@types";
import List from "../list/list";
import ListItem from "../list/listItem";
import Link from "../link/link";
import HoverDiv, { StyledHoverImageDiv } from "../hoverImage/hoverDiv";
import Image from "next/image";
import Inner from "../column/inner";

interface Props {
  events: Event[];
  news: News[];
  shifted: boolean;
}

const Dates: React.FC<Props> = (props: Props) => {
  const { events, news, shifted } = props;
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
                <ListItem>{event.title}</ListItem>
                <ListItem>{event.venue}</ListItem>
                <ListItem>{event.city}</ListItem>
                <ListItem>{event.musicby}</ListItem>
                {!shifted ? (
                  <StyledHoverImageDiv
                    portrait={Boolean(event.artwork[0].height > event.artwork[0].width)}>
                    <Image
                      src={event.artwork[0].formats.medium.url}
                      width={event.artwork[0].formats.medium.width}
                      height={event.artwork[0].formats.medium.height}
                      alt={event.title}
                      layout="responsive"
                    />
                  </StyledHoverImageDiv>
                ) : (
                  <></>
                )}
              </List>
            </HoverDiv>
          </Link>
        ))}
      </>
    </Inner>
  );
};

export default Dates;
