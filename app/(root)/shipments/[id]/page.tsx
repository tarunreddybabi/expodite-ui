"use client";
import { useParams } from "next/navigation";
import React from "react";

const ShipmentDetails = () => {
  const params = useParams();
  const shipmentId = params.id;
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Shipment Details</h1>
      <p>Shipment ID: {shipmentId}</p>
    </div>
  );
};

export default ShipmentDetails;
