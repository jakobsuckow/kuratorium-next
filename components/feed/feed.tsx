import React, { useState } from "react";
import { Event, News } from "../../@types";

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
              {event.artwork && (
                <div
                  className={
                    event.artwork[0].thumbnails.large.height >
                    event.artwork[0].thumbnails.large.width
                      ? `hoverImage portrait`
                      : `hoverImage landscape`
                  }>
                  <figure>
                    <img key={index} alt={event.name} src={event.artwork[0].thumbnails.large.url} />
                    <figcaption>{event.artworkBy}</figcaption>
                  </figure>
                </div>
              )}
            </ul>
          </a>
        ))}
      </>
    </>
  );
};

export default Dates;
