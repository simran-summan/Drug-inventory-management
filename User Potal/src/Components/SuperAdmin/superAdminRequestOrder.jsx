import React, { useState } from "react";

// Simulated data for available medicines (you can extend this with your actual data)
const availableMedicines = [
  { id: 1, name: "Aspirin", price: 10 },
  { id: 2, name: "Ibuprofen", price: 15 },
  { id: 3, name: "Amoxicillin", price: 20 },
  { id: 4, name: "Metformin", price: 12 },
  { id: 5, name: "Paracetamol", price: 8 },
];

const SuperAdminRequestOrder = () => {
  const [medicineName, setMedicineName] = useState("");
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [step, setStep] = useState("input"); // Step management: 'input', 'payment', 'confirmation'
  const [orderDetails, setOrderDetails] = useState({
    quantity: 1,
    upiId: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);

  const handleMedicineInputChange = (e) => {
    setMedicineName(e.target.value);
  };

  const handleMedicineSubmit = (e) => {
    e.preventDefault();
    const medicine = availableMedicines.find(
      (med) => med.name.toLowerCase() === medicineName.toLowerCase()
    );
    if (medicine) {
      setSelectedMedicine(medicine);
      setStep("payment");
    } else {
      alert("Medicine not found. Please enter a valid medicine name.");
    }
  };

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

  const totalCost = selectedMedicine
    ? selectedMedicine.price * orderDetails.quantity
    : 0;

  const renderMedicineInput = () => (
    <form onSubmit={handleMedicineSubmit} className="space-y-4 max-w-md mx-auto mt-8 bg-white shadow-md rounded-lg overflow-hidden p-6">
      <h2 className="text-2xl font-bold underline">Produce Medicine</h2>
      <div>
        <label className="block mb-1">Medicine Name:</label>
        <input
          type="text"
          name="medicineName"
          value={medicineName}
          onChange={handleMedicineInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Buy Medicine
      </button>
    </form>
  );

  const renderPaymentGateway = () => (
    <form onSubmit={handlePayment} className="space-y-4">
      <h2 className="text-2xl font-bold">Payment Gateway</h2>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-bold">{selectedMedicine.name}</h3>
        <p>Price: ₹{selectedMedicine.price}</p>
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
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Delivery Address:</label>
        <textarea
          name="address"
          value={orderDetails.address}
          onChange={handleOrderDetailsChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        disabled={loading}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );

  const renderConfirmation = () => (
    <div className="space-y-4 text-center">
      <h2 className="text-2xl font-bold">Payment Done!</h2>
      <p>
        Your order for {selectedMedicine.name} has been placed successfully.
      </p>
      <button
        onClick={() => {
          setStep("input");
          setSelectedMedicine(null);
          setMedicineName("");
          setOrderDetails({ quantity: 1, upiId: "", address: "" });
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Back to Request Order
      </button>
    </div>
  );

  return (
    <div className="container mx-auto p-4 max-w-md">
      {step === "input" && renderMedicineInput()}
      {step === "payment" && selectedMedicine && renderPaymentGateway()}
      {step === "confirmation" && renderConfirmation()}
    </div>
  );
};

export default SuperAdminRequestOrder;
