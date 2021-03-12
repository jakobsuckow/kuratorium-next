import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY as string, {
  apiVersion: "2020-08-27",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse<string>) {
  const { method, body } = req;

  if (method === "POST") {
    const { id, amount } = body;
    if (!id || !amount) {
      res.status(500).json("amount and id required");
    } else {
      return await chargeCard(id, amount);
    }
  } else {
    res.status(400);
  }
}

export const chargeCard = async (id: string, amount: number): Promise<any> => {
  try {
    const payment = stripe.paymentIntents.create({
      amount,
      currency: "EUR",
      payment_method: id,
      confirm: true,
    });
    return payment;
  } catch (error) {
    console.log(error);
  }
};
