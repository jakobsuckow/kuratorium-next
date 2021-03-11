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
