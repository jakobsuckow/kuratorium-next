import { NextApiRequest, NextApiResponse } from "next";
import { getData } from "../../../services/airtable";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Event>) {
  const response = await getData("Events");
  res.status(200).json(response);
}

