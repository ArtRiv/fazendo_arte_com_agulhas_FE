import { ShippingOption } from "@/types/shipping/shipping_options";
import Stripe from "stripe";

export function getStripeCheckoutShippingOptionsFormat(
    shippingOptions: ShippingOption[],
    currency: string = "brl"
  ): Stripe.Checkout.SessionCreateParams.ShippingOption[] {
    return shippingOptions.map(option => ({
      shipping_rate_data: {
        type: "fixed_amount",
        fixed_amount: {
          amount: option.price * 100,
          currency: currency,
        },
        display_name: option.name,
        delivery_estimate: {
          minimum: {
            unit: "business_day" as Stripe.Checkout.SessionCreateParams.ShippingOption.ShippingRateData.DeliveryEstimate.Minimum.Unit,
            value: option.delivery_range.min,
          },
          maximum: {
            unit: "business_day" as Stripe.Checkout.SessionCreateParams.ShippingOption.ShippingRateData.DeliveryEstimate.Maximum.Unit,
            value: option.delivery_range.max,
          },
        },
      },
    }));
  }
  