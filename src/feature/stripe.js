import { loadStripe } from "@stripe/stripe-js";
export const makePayment = async (email) => {
    const url =
        process.env.NODE_ENV === "production"
            ? process.env.SERVER_URL
            : process.env.TEST_SERVER_URL;
    const loadStripePromise = await loadStripe(
        process.env.STRIPE_PUBLISHABLE_KEY
    );
    const response = await fetch(
        `${url}/payment/createPaymentIntent?email=${email}&name=${email}`
    );
    const session = await response.json();
    if (!session.error) {
        const result = await loadStripePromise.redirectToCheckout({
            sessionId: session?.data?.id,
        });
    }
};
