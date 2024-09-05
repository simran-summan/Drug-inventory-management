import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const { medicineName, quantity } = location.state;
  const [upiID, setupiID] = useState("");
  const navigate = useNavigate();
  const medicinePricesDetails = {
    Aspirin: 4.99,
    Tylenol: 6.49,
    Ibuprofen: 5.29,
    Benadryl: 7.99,
    Claritin: 8.49,
    aspirin: 4.99,
    tylenol: 6.49,
    ibuprofen: 5.29,
    benadryl: 7.99,
    claritin: 8.49
  };

  const paynowhandler = async () => {
    setTimeout(() => {
      alert("Payment Successfull");
      navigate("/Purchase-Medicine");
    }, 2000);


  };

  return (
    <>
      <div className="h-screen w-full bg-zinc-800 text-white">
        <div className="flex justify-center items-center">
          <div className="bg-zinc-900   flex flex-col p-4 rounded-lg mt-10">
            <h1 className="text-2xl font-bold">Medicine Buy</h1>
            <div className="flex flex-col  w-96 mt-4">
              <label className="text-lg">Medicine Name</label>
              <input
                type="text"
                value={medicineName}
                className="p-2 rounded-lg mt-2 text-black"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-lg">Quantity</label>
              <input
                type="number"
                value={quantity}
                className="p-2 rounded-lg mt-2 text-black"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-lg">Total Price </label>
              <input
                type="text"
                value={medicinePricesDetails[medicineName] * quantity}
                className="p-2 rounded-lg mt-2 text-black"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-lg">UPI ID </label>
              <input
                type="text"
                onChange={(e) => setupiID(e.target.value)}
                className="p-2 rounded-lg mt-2 text-black"
              />
            </div>

            <button
              onClick={paynowhandler}
              className="bg-blue-500 p-2 rounded-lg mt-4 justify-center"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
