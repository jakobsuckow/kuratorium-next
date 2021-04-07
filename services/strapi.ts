const baseUrl: string = process.env.NEXT_PUBLIC_API as string;

export const getEvents = async () => {
  const res = await fetch(`https://kuratorium-strapi.herokuapp.com/events`);
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("error fetching data");
  }
};

export const getLinks = async () => {
  const res = await fetch(`https://kuratorium-strapi.herokuapp.com/links`);
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("error fetching data");
  }
};

export const getProducs = async () => {
  const res = await fetch(`https://kuratorium-strapi.herokuapp.com/products`);
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("error fetching data");
  }
};



export const getAlbums = async () => {
  const res = await fetch(`https://kuratorium-strapi.herokuapp.com/albums`);
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("error fetching data");
  }
};
