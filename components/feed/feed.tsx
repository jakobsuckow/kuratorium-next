import React, { useState } from "react";
import { Event } from "../../pages/api/event/all";
import { News } from "../../pages/api/news/all";

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
        <a href={n.link} key={index}>
          <ul key={n.id} className="feed">
            <li>{n.date}</li>
            <li className="underline">{n.headline}</li>
          </ul>
        </a>
      ))}
      <br />
      <h1>Events</h1>
      <>
        {events.map((event: Event, index: number) => (
          <a href={event.link} key={index}>
            <ul key={event.id} className="event">
              <li className="date underline">{event.date}</li>
              <li>{event.name}</li>
              <li>{event.venue}</li>
              <li>{event.city}</li>
              <li>{event.musicBy}</li>
            </ul>
          </a>
        ))}
      </>
    </>
  );
};

export default Dates;
