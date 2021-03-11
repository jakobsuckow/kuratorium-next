import Airtable from "airtable";

const connection = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY as string,
});

const base = connection.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE as string);

// General Function:

async function sanitize(data: any) {
  const res = await data;
  let array: Array<any> = [];
  res.forEach((el: any) => {
    const { id, createdTime, fields } = el._rawJson;
    array.push({ id, createdTime, ...fields });
  });
  return array;
}

export const getData = async (table: string): Promise<any> => {
  const res = base(table).select({ maxRecords: 100, view: "Grid view" }).all();
  return sanitize(res);
};

export const getTracks = async (album: string): Promise<any> => {
  const res = base("Tracks")
    .select({
      view: "Grid view",
      filterByFormula: `Album="${album}"`,
    })
    .all();
  return sanitize(res);
};

export const addEmail = async (email: String): Promise<any> => {
  const d = new Date();
  const data = [
    {
      fields: {
        Date: `${d}`,
        EmailAddress: email,
      },
    },
  ];
  return base("Emails").create(data);
};

export const addOrder = async (
  date: any,
  id: any,
  status: any,
  email: any,
  description: any,
  amount: any
): Promise<any> => {
  const data = [
    {
      fields: {
        Timestamp: date,
        ID: id,
        Status: status,
        PaypalEmail: email,
        Products: description,
        Amount: amount,
      },
    },
  ];
  return base("Orders").create(data);
};

export class Album {
  id: string;
  createdTime: string;
  test: string;
  artwork: Array<any>;
  artist: string;
  trackids: Array<string>;
  tracknames: Array<string>;
}
