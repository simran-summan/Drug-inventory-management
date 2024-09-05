import React, { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./App.css";
import MedicineBuy from "./Components/MedicineBuy";
import Layout from "./Layout/Layout";
import DiseaseDiagnosis from "./Components/DiseaseDiagnosis";
import CheckMedicine from "./Components/CheckMedicine";
import PaymentPage from "./Components/PaymentPage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import UserHome from "./Components/UserHome";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Define Home as its own route */}
        <Route path="/" element={<Home />} />
        
        {/* Login and Signup are not nested under Home */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Other user portal routes (you can uncomment these as necessary) */}
        <Route path="/user-portal" element={<Layout />}>
          <Route path="user-Home" element={<UserHome />} />
          <Route path="Purchase-Medicine" element={<MedicineBuy />} />
          <Route path="Disease-Diagnosis" element={<DiseaseDiagnosis />} />
          <Route path="Check-Medicine" element={<CheckMedicine />} />
          <Route path="payment" element={<PaymentPage />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
