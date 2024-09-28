import React, { useState } from "react";

// Expanded simulated database
const initialOrders = [
  {
    id: 1,
    consumer: "John Doe",
    time: "2024-09-27 10:30",
    medicine: "Aspirin",
    quantity: 2,
  },
  {
    id: 2,
    consumer: "Jane Smith",
    time: "2024-09-27 11:45",
    medicine: "Ibuprofen",
    quantity: 1,
  },
  {
    id: 3,
    consumer: "Bob Johnson",
    time: "2024-09-27 14:15",
    medicine: "Amoxicillin",
    quantity: 3,
  },
  {
    id: 4,
    consumer: "Alice Brown",
    time: "2024-09-27 15:20",
    medicine: "Paracetamol",
    quantity: 2,
  },
  {
    id: 5,
    consumer: "Charlie Davis",
    time: "2024-09-27 16:00",
    medicine: "Metformin",
    quantity: 1,
  },
  {
    id: 6,
    consumer: "Eva Wilson",
    time: "2024-09-27 17:30",
    medicine: "Lisinopril",
    quantity: 1,
  },
  {
    id: 7,
    consumer: "Frank Miller",
    time: "2024-09-28 09:15",
    medicine: "Simvastatin",
    quantity: 2,
  },
  {
    id: 8,
    consumer: "Grace Lee",
    time: "2024-09-28 10:45",
    medicine: "Omeprazole",
    quantity: 1,
  },
];

// Updated simulated stock data
const stockData = {
  Aspirin: 10,
  Ibuprofen: 5,
  Amoxicillin: 0,
  Paracetamol: 8,
  Metformin: 3,
  Lisinopril: 0,
  Simvastatin: 4,
  Omeprazole: 2,
};

const OrderList = ({ orders, onSelectOrder }) => {
  if (orders.length === 0) {
    return (
      <p className="text-center text-xl font-bold">No orders are requested.</p>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 underline">Order List</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-center">Consumer</th>
            <th className="py-3 px-6 text-center">Time</th>
            <th className="py-3 px-6 text-center">Medicine</th>
            <th className="py-3 px-6 text-center">Quantity</th>
            <th className="py-3 px-6 text-center">Stock Status</th>
            <th className="py-3 px-11 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-normal">
          {orders.map((order) => {
            const inStock = stockData[order.medicine] >= order.quantity;
            return (
              <tr
                key={order.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-center whitespace-nowrap">
                  {order.consumer}
                </td>
                <td className="py-3 px-6 text-center">{order.time}</td>
                <td className="py-3 px-6 text-center">{order.medicine}</td>
                <td className="py-3 px-6 text-center">{order.quantity}</td>
                <td
                  className={`py-3 px-6 text-center ${
                    inStock ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {inStock ? "In Stock" : "Out of Stock"}
                </td>
                <td className="py-3 px-6 text-left">
                  <button
                    onClick={() => onSelectOrder(order)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const OrderDetails = ({ order, onAccept, onReject, onBack }) => {
  const inStock = stockData[order.medicine] >= order.quantity;

  return (
    <div className="max-w-md mx-auto mt-8 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold mb-4">Order Details</h2>
        <p className="mb-2">
          <strong>Consumer:</strong> {order.consumer}
        </p>
        <p className="mb-2">
          <strong>Time:</strong> {order.time}
        </p>
        <p className="mb-2">
          <strong>Medicine:</strong> {order.medicine}
        </p>
        <p className="mb-2">
          <strong>Quantity:</strong> {order.quantity}
        </p>
        <p className={`mb-4 ${inStock ? "text-green-500" : "text-red-500"}`}>
          <strong>Stock Status:</strong> {inStock ? "In Stock" : "Out of Stock"}
        </p>
      </div>
      <div className="px-6 py-4 bg-gray-100 flex justify-between">
        <button
          onClick={onBack}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Back to List
        </button>
        {inStock ? (
          <button
            onClick={() => onAccept(order)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Accept Order
          </button>
        ) : (
          <button
            onClick={() => onReject(order)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Reject Order
          </button>
        )}
      </div>
    </div>
  );
};

const OrderPage = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState(initialOrders);

  const handleSelectOrder = (order) => {
    setSelectedOrder(order);
  };

  const handleAcceptOrder = (order) => {
    setOrders(orders.filter((o) => o.id !== order.id));
    setSelectedOrder(null);
  };

  const handleRejectOrder = (order) => {
    setOrders(orders.filter((o) => o.id !== order.id));
    setSelectedOrder(null);
  };

  const handleBack = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="container mx-auto p-4">
      {selectedOrder ? (
        <OrderDetails
          order={selectedOrder}
          onAccept={handleAcceptOrder}
          onReject={handleRejectOrder}
          onBack={handleBack}
        />
      ) : (
        <OrderList orders={orders} onSelectOrder={handleSelectOrder} />
      )}
    </div>
  );
};

export default OrderPage;
