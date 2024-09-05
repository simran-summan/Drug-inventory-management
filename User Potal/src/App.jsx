import  React ,{ useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./App.css";
import MedicineBuy from "./Components/MedicineBuy";
import Layout from "./Layout/Layout";
import DiseaseDiagnose from "./Components/DiseaseDiagnose";
import CheckMedicine from "./Components/CheckMedicine";
import PaymentPage from "./Components/PaymentPage";

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/Purchase-Medicine" element={<MedicineBuy />} />
        <Route path="/Disease-Diagnose" element={<DiseaseDiagnose />} />
        <Route path="/Check-Medicine" element={<CheckMedicine />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
