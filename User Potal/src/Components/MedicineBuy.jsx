import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MedicineBuy = () => {
  const [medicineName, setMedicineName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  const buyMedicineHandler = async () => {
    const response = { status: 200 };

    if (response.status === 200) {
      navigate("/payment", { state: { medicineName, quantity } });
    } else {
      alert("Medicine Buying Failed");
    }
  };
  return (
    <div className="h-screen w-full bg-zinc-800 text-white">
      <div className="flex justify-center items-center">
        <div className="bg-zinc-900   flex flex-col p-4 rounded-lg mt-10">
          <h1 className="text-2xl font-bold">Medicine Buy</h1>
          <div className="flex flex-col  w-96 mt-4">
            <label className="text-lg">Medicine Name</label>
            <input
              type="text"
              onChange={(e) => {
                setMedicineName(e.target.value);
              }}
              className="p-2 rounded-lg mt-2 text-black"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-lg">Quantity</label>
            <input
              type="number"
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              className="p-2 rounded-lg mt-2 text-black"
            />
          </div>

          <button
            className="bg-blue-500 p-2 rounded-lg mt-4 justify-center"
            onClick={buyMedicineHandler}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicineBuy;
