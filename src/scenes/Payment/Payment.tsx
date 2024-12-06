import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<string>(""); // Tracks the selected payment method
  const [selectedUpiApp, setSelectedUpiApp] = useState<string>(""); // Tracks the selected UPI App
  const [upiId, setUpiId] = useState<string>(""); // Tracks UPI ID input
  const [selectedBank, setSelectedBank] = useState<string>(""); // Tracks selected bank
  const [accountNumber, setAccountNumber] = useState<string>(""); // Tracks Bank Account input

  const handlePaymentApproval = () => {
    if (selectedMethod === "upi" && (!selectedUpiApp || !upiId)) {
      alert("Please select a UPI app and enter your UPI ID.");
      return;
    }

    if (selectedMethod === "netbanking" && (!selectedBank || !accountNumber)) {
      alert("Please select a bank and enter your account number.");
      return;
    }

    alert("Payment approved! Redirecting to the exercises page...");
    navigate("/exercises"); // Redirect to the exercises page
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-pink-100 to-yellow-50">
      <div className="w-full max-w-2xl rounded-lg bg-white p-10 shadow-lg">
        {/* Header Section */}
        <h2 className="text-center text-3xl font-bold text-red-600">
          Payment Method
        </h2>
        <p className="mt-2 text-center text-gray-500">
          Choose your payment method to proceed.
        </p>

        {/* Payment Method Selection */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {["upi", "netbanking", "card"].map((method) => (
            <div
              key={method}
              className={`cursor-pointer rounded-lg border-2 p-4 text-center ${
                selectedMethod === method ? "border-red-500" : "border-gray-300"
              }`}
              onClick={() => setSelectedMethod(method)}
            >
              <h3 className="text-lg font-semibold capitalize text-gray-700">
                {`Pay by ${method}`}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {method === "upi" && "Use your UPI App for payment."}
                {method === "netbanking" && "Use your preferred bank."}
                {method === "card" &&
                  "Enter your debit or credit card details."}
              </p>
            </div>
          ))}
        </div>

        {/* Dynamic Form */}
        <div className="mt-8">
          {selectedMethod === "upi" && (
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Select UPI App
              </label>
              <select
                className="mt-2 w-full rounded border border-gray-300 p-3"
                onChange={(e) => setSelectedUpiApp(e.target.value)}
              >
                <option value="">Choose an option</option>
                <option value="googlepay">Google Pay</option>
                <option value="phonepe">PhonePe</option>
                <option value="paytm">Paytm</option>
                <option value="bhim">BHIM</option>
              </select>
              {selectedUpiApp && (
                <>
                  <label className="mt-4 block text-sm font-medium text-gray-600">
                    Enter UPI ID
                  </label>
                  <input
                    type="text"
                    placeholder="yourname@upi"
                    className="mt-2 w-full rounded border border-gray-300 p-3"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                  />
                </>
              )}
            </div>
          )}

          {selectedMethod === "netbanking" && (
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Select Bank
              </label>
              <select
                className="mt-2 w-full rounded border border-gray-300 p-3"
                onChange={(e) => setSelectedBank(e.target.value)}
              >
                <option value="">Choose a bank</option>
                <option value="sbi">State Bank of India</option>
                <option value="hdfc">HDFC Bank</option>
                <option value="icici">ICICI Bank</option>
                <option value="axis">Axis Bank</option>
              </select>
              {selectedBank && (
                <>
                  <label className="mt-4 block text-sm font-medium text-gray-600">
                    Enter Account Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter account number"
                    className="mt-2 w-full rounded border border-gray-300 p-3"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                </>
              )}
            </div>
          )}

          {selectedMethod === "card" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Card Holder Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded border border-gray-300 p-3"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="mt-2 w-full rounded border border-gray-300 p-3"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="mt-2 w-full rounded border border-gray-300 p-3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="mt-2 w-full rounded border border-gray-300 p-3"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={() => navigate("/")}
            className="rounded bg-red-500 px-6 py-2 text-white hover:bg-red-600"
          >
            Return
          </button>
          <button
            onClick={handlePaymentApproval}
            className="rounded bg-red-500 px-6 py-2 text-white hover:bg-red-600"
          >
            Submit Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
