import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) {
      setIsProcessing(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: "Jenny Rosen",
      },
    });

    if (error) {
      console.error("Error creating payment method:", error);
      setErrorMessage(error.message);
      setIsProcessing(false);
      return;
    }

    console.log("PaymentMethod created:", paymentMethod);

    try {
      const response = await fetch("http://localhost:5000/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          payment_method_id: paymentMethod.id,
        }),
      });

      const serverResponse = await response.json();
      handleServerResponse(serverResponse);
    } catch (error) {
      console.error("Error processing payment:", error);
      setErrorMessage("Payment processing error. Please try again.");
      setIsProcessing(false);
    }
  };

  const handleServerResponse = (serverResponse) => {
    if (serverResponse.error) {
      setErrorMessage(serverResponse.error);
    } else {
      alert("Payment successful!");
    }
    setIsProcessing(false);
  };

  const handleCardChange = (event) => {
    if (event.error) {
      setErrorMessage(event.error.message);
    } else {
      setErrorMessage(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement onChange={handleCardChange} />
        <button type="submit" disabled={!stripe || isProcessing}>
          {isProcessing ? "Processing..." : "Submit Payment"}
        </button>
      </form>
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

export default CheckOutForm;
