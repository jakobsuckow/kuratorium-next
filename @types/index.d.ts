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
  artwork: Artwork[];
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
  artwork: Artwork[];
  artworkBy: string;
}

export interface News {
  date: Date;
  headline: string;
  link: string;
  id: string;
}

export interface CartItem {
  id: string;
  name: string;
  size?: string;
  price: number;
  quantity: number;
}

export interface Merch {
  id: string;
  name: string;
  description: string;
  images: Artwork[];
  price: number;
  sizes: string[];
}

export interface Order {
  street: string;
  postal: string;
  city: string;
  country: string;
  subtotal: number;
  shipping: number;
  total: number;
}

export interface Artwork {
  id: string;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: Sizes;
}

export interface Sizes {
  small: Size;
  large: Size;
  full: Size;
}

// thumbnails: {
//   small: {
//   url: "https://dl.airtable.com/.attachmentThumbnails/fb66c6ed1645297f29fc5419242524cc/530c4211",
//   width: 36,
//   height: 36
//   },
//   large: {
//   url: "https://dl.airtable.com/.attachmentThumbnails/4e9bd188f826b1184b138a0fbcc441b2/2ee26e1c",
//   width: 512,
//   height: 512
//   },
//   full: {
//   url: "https://dl.airtable.com/.attachmentThumbnails/1d8a8a24e3a508a4fe9dcd10c1e544a6/a480ce2b",
//   width: 3000,
//   height: 3000
//   }
//   }

export interface Size {
  url: string;
  width: string;
  height: string;
}

export interface Order {
  firstName: string;
  lastName: string;
  emailAddress: string;
  streetName: string;
  streetNumber: string;
  city: string;
  postal: string;
  country: string;
  shippingCost: number;
  paymentMethod: string;
}
