import React, { useState, useEffect } from "react";

const SOS = () => {
  const [emergencyLevel, setEmergencyLevel] = useState("");
  const [medicineName, setMedicineName] = useState("");
  const [location, setLocation] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [timer, setTimer] = useState(null);
  const [step, setStep] = useState("form");
  const [orderDetails, setOrderDetails] = useState({
    quantity: 1,
    upiId: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    if (location.trim() !== "") {
      setTimer(
        setTimeout(() => {
          setEstimatedTime("30 minutes");
        }, 2000)
      );
    }
  }, [location]);

  const handleOrderDetailsChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setStep("confirmation");
  };

  const totalCost = 100 * orderDetails.quantity; // Example price per unit

  const renderForm = () => (
    <div className="max-w-md mx-auto mt-8 bg-white shadow-md rounded-lg overflow-hidden p-6">
      <h2 className="text-2xl underline font-bold mb-4">SOS Request</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Emergency Level:</label>
        <select
          value={emergencyLevel}
          onChange={(e) => setEmergencyLevel(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select an emergency level</option>
          <option value="OT">OT</option>
          <option value="ICU">ICU</option>
          <option value="CCU">CCU</option>
          <option value="HDU">HDU</option>
          <option value="Accident">Accident</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Medicine Name:</label>
        <input
          type="text"
          value={medicineName}
          onChange={(e) => setMedicineName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      {estimatedTime && (
        <div className="mb-4">
          <p className="text-red-500 font-bold">
            Estimated Time of Delivery: {estimatedTime}
          </p>
        </div>
      )}
      <button
        onClick={() => setStep("payment")}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
      >
        Proceed to Payment
      </button>
    </div>
  );

  const renderPaymentGateway = () => (
    <form
      onSubmit={handlePayment}
      className="max-w-md mx-auto mt-8 bg-white shadow-md rounded-lg overflow-hidden p-6"
    >
      <h2 className="text-2xl font-bold mb-4">Payment Gateway</h2>
      <div className="bg-white p-4 rounded shadow mb-4">
        <h3 className="font-bold">Emergency Level: {emergencyLevel}</h3>
        <p>Medicine: {medicineName}</p>
        <p>Manufacturer: HealthPlus</p>
        <p>Location: {location}</p>
        <p>Estimated Time: {estimatedTime}</p>
        <p>Price per unit: ₹100</p>
        <div className="mt-2">
          <label className="block mb-1">Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={orderDetails.quantity}
            onChange={handleOrderDetailsChange}
            min="1"
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </div>
      <div>
        <label className="block mb-1">Total Cost:</label>
        <p className="font-bold">₹{totalCost}</p>
      </div>
      <div>
        <label className="block mb-1">UPI ID:</label>
        <input
          type="text"
          name="upiId"
          value={orderDetails.upiId}
          onChange={handleOrderDetailsChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 mb-2 text-white px-4 py-2 rounded hover:bg-green-600"
        disabled={loading}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );

  const renderConfirmation = () => (
    <div className="max-w-md mx-auto mt-8 bg-red-500 text-white shadow-md rounded-lg overflow-hidden p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">
        High Priority Delivery Confirmed!
      </h2>
      <p>Your order for {medicineName} has been placed successfully.</p>
      <p className="font-bold text-lg">
        Your delivery will arrive in {estimatedTime}
      </p>
      <button
        onClick={() => {
          setStep("form");
          setEmergencyLevel("");
          setMedicineName("");
          setLocation("");
          setEstimatedTime("");
          setOrderDetails({ quantity: 1, upiId: "" });
        }}
        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Back to Main Page
      </button>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      {step === "form" && renderForm()}
      {step === "payment" && renderPaymentGateway()}
      {step === "confirmation" && renderConfirmation()}
    </div>
  );
};

export default SOS;
