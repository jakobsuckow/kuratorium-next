import React, { useState } from "react";

interface Props {}

const Dates: React.FC<Props> = (props: Props) => {
  const {} = props;
  const [dates, setDates] = useState<any[]>([]);
  const [feed, setFeed] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <h1>Feed</h1>
      {isLoading ? (
        <div className="loading">Loading Feed... &nbsp;</div>
      ) : (
        <>
          {feed.map((f, index) => (
            <a href={f.Link} key={index}>
              <ul key={f.id} className="feed">
                <li>{f.Date}</li>
                <li className="underline">{f.Headline}</li>
              </ul>
            </a>
          ))}
        </>
      )}
      <br />
      <h1>Events</h1>
      {isLoading ? (
        <div className="loading">Loading Dates... &nbsp;</div>
      ) : (
        <>
          {dates.map((date, index) => (
            <a href={date.Link} key={index}>
              <ul key={date.id} className="event">
                <li className="date underline">{date.Date}</li>
                <li>{date.Name}</li>
                <li>{date.Venue}</li>
                <li>{date.City}</li>
                <li>{date.MusicBy}</li>
              </ul>
            </a>
          ))}
        </>
      )}
    </>
  );
};

export default Dates;
