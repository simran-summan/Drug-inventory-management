import React, { useState } from "react";

// Simulated data for medicines
const medicines = [
  { id: 1, name: "Aspirin", stock: 5, price: 10 },
  { id: 2, name: "Ibuprofen", stock: 0, price: 15 },
  { id: 3, name: "Amoxicillin", stock: 3, price: 20 },
  { id: 4, name: "Metformin", stock: 0, price: 12 },
  { id: 5, name: "Paracetamol", stock: 7, price: 8 },
  { id: 6, name: "Ciprofloxacin", stock: 2, price: 25 },
  { id: 7, name: "Omeprazole", stock: 4, price: 18 },
  { id: 8, name: "Losartan", stock: 1, price: 30 },
  { id: 9, name: "Simvastatin", stock: 0, price: 22 },
  { id: 10, name: "Warfarin", stock: 6, price: 35 },
  { id: 11, name: "Levothyroxine", stock: 2, price: 15 },
  { id: 12, name: "Azithromycin", stock: 0, price: 28 },
];

const SuperAdminInventory = () => {
  const [step, setStep] = useState("list");
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [orderDetails, setOrderDetails] = useState({
    quantity: 1,
    upiId: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [orderedMedicines, setOrderedMedicines] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleSelectMedicine = (medicine) => {
    setSelectedMedicine(medicine);
    setStep("payment");
  };

  const handleOrderDetailsChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulating payment process
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    // Add the selected medicine ID to orderedMedicines
    setOrderedMedicines([...orderedMedicines, selectedMedicine.id]);
    setStep("confirmation");
  };

  const totalCost = selectedMedicine
    ? selectedMedicine.price * orderDetails.quantity
    : 0;

  const renderMedicineList = () => {
    let filteredMedicines = medicines;

    if (filter === "low") {
      filteredMedicines = medicines.filter(
        (medicine) => medicine.stock > 0 && medicine.stock < 10
      );
    } else if (filter === "no") {
      filteredMedicines = medicines.filter((medicine) => medicine.stock === 0);
    }

    return (
      <div className=" w-11/12">
        <h2 className="text-2xl font-bold underline mb-4">
          Medicines in Inventory
        </h2>
        <div className="space-x-4 mb-4">
          <label>
            <input
              type="radio"
              value="all"
              checked={filter === "all"}
              onChange={() => setFilter("all")}
              className="mr-2"
            />
            All
          </label>
          <label>
            <input
              type="radio"
              value="low"
              checked={filter === "low"}
              onChange={() => setFilter("low")}
              className="mr-2"
            />
            Low Stock
          </label>
          <label>
            <input
              type="radio"
              value="no"
              checked={filter === "no"}
              onChange={() => setFilter("no")}
              className="mr-2"
            />
            No Stock
          </label>
        </div>
        <table className="min-w-full table-fixed border-collapse shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-4 text-center">Medicine Name</th>
              <th className="px-6 py-4 text-center">Stock</th>
              <th className="px-6 py-4 text-center">Price (₹)</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredMedicines.map((medicine) => (
              <tr key={medicine.id} className="bg-white border-b">
                <td className="px-6 text-center py-4">{medicine.name}</td>
                <td className="px-6 text-center py-4">{medicine.stock}</td>
                <td className="px-6 text-center py-4">{medicine.price}</td>
                <td className="px-6  py-4 text-center">
                  {orderedMedicines.includes(medicine.id) ? (
                    <span className="text-green-500 font-bold">
                      Order Placed
                    </span>
                  ) : (
                    <button
                      onClick={() => handleSelectMedicine(medicine)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Add to Request
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

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
          setStep("list");
          setSelectedMedicine(null);
          setOrderDetails({ quantity: 1, upiId: "", address: "" });
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Back to Medicine List
      </button>
    </div>
  );

  return (
    <div className="container mx-auto p-4  max-w-2xl">
      {step === "list" && renderMedicineList()}
      {step === "payment" && selectedMedicine && renderPaymentGateway()}
      {step === "confirmation" && renderConfirmation()}
    </div>
  );
};

export default SuperAdminInventory;
