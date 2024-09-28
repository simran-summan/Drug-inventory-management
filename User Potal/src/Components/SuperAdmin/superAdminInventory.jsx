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
  const [orderedMedicines, setOrderedMedicines] = useState([]);
  const [filter, setFilter] = useState("all");
  const [productionMessage, setProductionMessage] = useState("");

  const handleSelectMedicine = (medicine) => {
    setSelectedMedicine(medicine);
  };

  const handleAddRequest = (medicine) => {
    if (medicine.stock > 5) {
      // Disable adding request for stock > 5
      return;
    }

    setOrderedMedicines([...orderedMedicines, medicine.id]);
    setProductionMessage(`Production requested for ${medicine.name} successfully!`);
  };

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
      <div className="w-11/12">
        <h2 className="text-2xl font-bold underline mb-4">Medicines in Inventory</h2>
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
        {productionMessage && <p className="text-green-500 font-bold">{productionMessage}</p>}
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
                <td className="px-6 py-4 text-center">
                  {orderedMedicines.includes(medicine.id) ? (
                    <span className="text-green-500 font-bold">Request sent</span>
                  ) : (
                    <button
                      onClick={() => {
                        handleSelectMedicine(medicine);
                        handleAddRequest(medicine);
                      }}
                      className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ${
                        medicine.stock > 5 ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={medicine.stock > 5}
                    >
                      Produce...
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

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      {step === "list" && renderMedicineList()}
    </div>
  );
};

export default SuperAdminInventory;
