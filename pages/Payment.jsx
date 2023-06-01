import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

export default function Payment({calculateTotalPrice}) {

  const config = {
    public_key: "FLWPUBK_TEST-2b48238e51ac4340932feb8556865d5b-X",
    tx_ref: Date.now(),
    amount: calculateTotalPrice,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phone_number: "070********",
      name: "john doe",
    },
    customizations: {
      title: "Godwin Foods",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      <button
        className="outline-none border-none py-[6px] px-5 bg-cyan-600 text-white rounded-full text-lg font-semibold w-full"
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Proceed To Buy
      </button>
    </div>
  );
}
