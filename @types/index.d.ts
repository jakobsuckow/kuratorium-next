declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare global {
  interface Window {
    paypal: any;
  }
}

export interface Album {
  title: string;
  artist: string;
  cover: Image;
  text: string;
  trackids: string[];
  tracknames: string[];
  description: string;
  date_created: Date;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
  tracks: any;
}

export interface Event {
  id: string;
  date: Date;
  published_at: Date;
  created_at: Date;
  title: string;
  link: string;
  venue: string;
  city: string;
  musicby: string;
  artwork: Artwork[];
  artworkby: string;
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

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  date_added: Date;
  active: boolean;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
  image: Image;
  sizes: string[];
}

export interface SKU {
  id: any;
  size: string;
  stock: string;
  published_at: string;
  created_at: Date;
  updated_at: Date;
  product: any;
  slug: string;
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

export interface Image {
  id: any;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  created_at: Date;
  updated_at: Date;
}

export interface Formats {
  large: Format;
  small: Format;
  medium: Format;
  thumbnail: Format;
}

export interface Format {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Sizes {
  small: Size;
  large: Size;
  full: Size;
}

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

interface Track {
  // title: string;
  // artist: string;
  // time: number;
  src: string;
  isPlaying: boolean;
}
