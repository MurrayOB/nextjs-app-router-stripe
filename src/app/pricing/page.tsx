"use client";

import { checkout } from "../api/checkout/route";

export default function Pricing() {
  const priceId = "price_YOURPRICEID123";

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <h1>Pricing: </h1>
        <p>$25</p>
        <p>This is a product</p>
        <button
          onClick={async () =>
            await checkout({
              lineItems: [{ price: priceId, quantity: 1 }],
            })
          }
        >
          BUY
        </button>
      </div>
    </div>
  );
}
