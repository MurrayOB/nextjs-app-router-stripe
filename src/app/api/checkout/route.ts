import getStripe from "@/utils/get-stripe";

export async function checkout({ lineItems }: any) {
  const stripe = await getStripe();
  if (stripe) {
    await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: lineItems,
      successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: window.location.origin,
    });
  }
}
