import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_API_KEY as string, { apiVersion: "2020-08-27" });

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
