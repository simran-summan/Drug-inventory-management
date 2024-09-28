import React, { useEffect, useState } from "react";

const AdminHome = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show notification for 3 seconds
    const timer = setTimeout(() => {
      setShowNotification(true);
      // Hide notification after 3 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    }, 1000); // Delay showing notification for 1 second after component mounts

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-500 to-gray-800">
      <h1 className="text-white text-7xl font-extrabold">
      Welcome to PharmaScout!
      </h1>
      {showNotification && (
        <div className="absolute right-4 top-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg transition-transform transform translate-x-4">
          Some medicines are out of stock!
        </div>
      )}
    </div>
  );
};

export default AdminHome;
