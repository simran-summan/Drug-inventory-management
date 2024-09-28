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
  const [quantity, setQuantity] = useState(1); // New state for quantity
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [step, setStep] = useState("input"); // Step management: 'input', 'confirmation'

  const handleMedicineInputChange = (e) => {
    setMedicineName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleMedicineSubmit = (e) => {
    e.preventDefault();
    const medicine = availableMedicines.find(
      (med) => med.name.toLowerCase() === medicineName.toLowerCase()
    );
    if (medicine) {
      setSelectedMedicine(medicine);
      setStep("confirmation");
    } else {
      alert("Medicine not found. Please enter a valid medicine name.");
    }
  };

  const renderMedicineInput = () => (
    <form
      onSubmit={handleMedicineSubmit}
      className="space-y-4 max-w-md mx-auto mt-8 bg-white shadow-md rounded-lg overflow-hidden p-6"
    >
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
      <div>
        <label className="block mb-1">Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Produce Medicine
      </button>
    </form>
  );

  const renderConfirmation = () => (
    <div className="space-y-4 text-center">
      <h2 className="text-2xl font-bold">Production Request</h2>
      <p>
        Your request for {quantity} {selectedMedicine.name}(s) has been
        processed successfully.
      </p>
      <button
        onClick={() => {
          setStep("input");
          setSelectedMedicine(null);
          setMedicineName("");
          setQuantity(1); // Reset quantity when going back
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Back to Produce Another Medicine
      </button>
    </div>
  );

  return (
    <div className="container mx-auto p-4 max-w-md">
      {step === "input" && renderMedicineInput()}
      {step === "confirmation" && selectedMedicine && renderConfirmation()}
    </div>
  );
};

export default SuperAdminRequestOrder;
