import { NextApiRequest, NextApiResponse } from "next";
import { getData } from "../../../services/airtable";

export default async function handler(req: NextApiRequest, res: NextApiResponse<string>) {
  const response = await getData("Feed");
  res.status(200).json(response);
}

