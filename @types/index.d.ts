declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

export interface Album {
  name: string;
  artist: string;
  artwork: any[];
  text: string;
  trackids: string[];
  tracknames: string[];
}

export interface Event {
  id: string;
  date: Date;
  name: string;
  link: string;
  venue: string;
  city: string;
  musicBy: string;
  artwork: any[];
  artworkBy: string;
}

export interface News {
  date: Date;
  headline: string;
  link: string;
  id: string;
}
