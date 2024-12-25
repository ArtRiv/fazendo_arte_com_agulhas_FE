import { loadStripe } from '@stripe/stripe-js';
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { useCallback } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export const PaymentForm = () => {
    const fetchClientSecret = useCallback(async () => {
        const priceId = "price_1PxH6JC072cq1xZ7YJe74UV3"; 
        const customerEmail = "arthurfelaco707@gmail.com";
        const res = await fetch("http://localhost:3000/api/stripe-checkout", {
            method: "POST",
            body: JSON.stringify({ priceId, customerEmail }),
        });

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.error || "Failed to fetch client secret");
        }

        const data = await res.json();
        return data.clientSecret;
    }, []);

    const options = { fetchClientSecret };

    return (
        <ScrollArea className='flex items-center h-full'>
            <div id="checkout" className='h-full'>
                <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
                    <EmbeddedCheckout />
                </EmbeddedCheckoutProvider>
            </div>
        </ScrollArea>
    )
}