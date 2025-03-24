"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const allPlans = {
  "1": [ // GOTV
    { id: "1", name: "Gotv Smallie", price: "₦1,900", validity: "30 Days" },
    { id: "2", name: "GOtv Jinja", price: "₦3,900", validity: "30 Days" },
    { id: "3", name: "GOtv Jolli", price: "₦5,800", validity: "30 Days" },
    { id: "4", name: "GOtv Max", price: "₦8,500", validity: "30 Days" },
    { id: "5", name: "GOtv Supa", price: "₦11,400", validity: "30 Days" },
    { id: "130", name: "GOtv Supa Plus", price: "₦16,800", validity: "30 Days" }
  ],
  "2": [ // DSTV
    { id: "6", name: "Dstv Padi", price: "₦4,400", validity: "30 Days" },
    { id: "7", name: "DStv Yanga", price: "₦6,000", validity: "30 Days" },
    { id: "8", name: "DStv Confam", price: "₦11,000", validity: "30 Days" },
    { id: "9", name: "DStv Compact", price: "₦19,000", validity: "30 Days" },
    { id: "10", name: "DStv Compact Plus", price: "₦30,000", validity: "30 Days" },
    { id: "11", name: "DStv Premium", price: "₦44,500", validity: "30 Days" },
    { id: "12", name: "DStv Premium-Asia", price: "₦50,500", validity: "30 Days" },
    { id: "29", name: "DStv Great Wall", price: "₦7,300", validity: "30 Days" },
    { id: "30", name: "DStv French Touch", price: "₦5,800", validity: "30 Days" }
  ],
  "3": [ // STARTIMES
    { id: "13", name: "Nova (Dish)", price: "₦1,900", validity: "30 Days" },
    { id: "14", name: "Basic (Antenna)", price: "₦3,700", validity: "30 Days" },
    { id: "15", name: "Basic (Dish)", price: "₦4,700", validity: "30 Days" },
    { id: "16", name: "Classic (Antenna)", price: "₦5,500", validity: "30 Days" },
    { id: "17", name: "Super (Dish)", price: "₦9,000", validity: "30 Days" }
  ],
  "4": [ // SHOWMAX
    { id: "115", name: "Full Subscription", price: "₦3,500", validity: "30 Days" },
    { id: "116", name: "Mobile Only", price: "₦1,600", validity: "30 Days" },
    { id: "117", name: "Full Sports Mobile", price: "₦5,400", validity: "30 Days" }
  ]
};

export default function CablePage() {
  const [provider, setProvider] = useState("1"); // Default to GOTV
  const [smartCard, setSmartCard] = useState("");
  const [verifiedInfo, setVerifiedInfo] = useState(null);
  const [plan, setPlan] = useState("");
  const [cablePlans, setCablePlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  // Helper: convert message text to string if it’s an object
  const renderMessage = (msg) => {
    return typeof msg === "object" ? JSON.stringify(msg) : msg;
  };

  // Update available plans when provider changes
  useEffect(() => {
    setCablePlans(allPlans[provider] || []);
    setPlan("");
    setVerifiedInfo(null);
    setMessage({ text: "", type: "" });
  }, [provider]);

  // Verify smart card using the API route /api/cableverify
  const verifySmartCard = async () => {
    if (!smartCard) {
      setMessage({ text: "Please enter a smart card number", type: "error" });
      return;
    }
    setLoading(true);
    setMessage({ text: "Verifying...", type: "info" });
    try {
      const res = await axios.post("/api/cableverify", {
        cablename: provider,
        smart_card_number: smartCard,
      });
      // Assume the response contains customer details
      setVerifiedInfo(res.data);
      setMessage({ text: "Verification successful", type: "success" });
    } catch (error) {
      console.error("Verification Error:", error.response?.data || error.message);
      setMessage({
        text: error.response?.data?.error || "Verification failed. Please check the details.",
        type: "error",
      });
      setVerifiedInfo(null);
    }
    setLoading(false);
  };

  // Subscribe for cable using the API route /api/cable
  const subscribeCable = async () => {
    if (!plan) {
      setMessage({ text: "Please select a cable plan", type: "error" });
      return;
    }
    setLoading(true);
    setMessage({ text: "Processing subscription...", type: "info" });
    try {
      const res = await axios.post("/api/cable", {
        cablename: provider,
        smart_card_number: smartCard,
        cableplan: plan,
      });
      setMessage({
        text: `Subscription successful! ${res.data.api_response || ""}`,
        type: "success",
      });
      // Optionally, reset form fields after success
      setPlan("");
      setSmartCard("");
      setVerifiedInfo(null);
    } catch (error) {
      console.error("Subscription Error:", error.response?.data || error.message);
      setMessage({
        text: error.response?.data?.error || "Subscription failed. Please try again.",
        type: "error",
      });
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Cable TV Subscription</h2>
      
      {/* Provider Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Cable Provider</label>
        <select
          value={provider}
          onChange={(e) => setProvider(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="1">GOTV</option>
          <option value="2">DSTV</option>
          <option value="3">STARTIMES</option>
          <option value="4">SHOWMAX</option>
        </select>
      </div>
      
      {/* Smart Card Number Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          {provider === "4" ? "Phone Number" : "Smart Card Number"}
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder={provider === "4" ? "Enter phone number" : "Enter smart card number"}
            value={smartCard}
            onChange={(e) => setSmartCard(e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          <button
            onClick={verifySmartCard}
            disabled={loading || !smartCard}
            className="p-2 border rounded bg-gray-100 hover:bg-gray-200 transition"
          >
            Verify
          </button>
        </div>
      </div>
      
      {/* Display Verification Info */}
      {verifiedInfo && (
        <div className="mb-4 p-3 bg-blue-50 rounded-lg">
          <h3 className="font-medium">Customer Information</h3>
          <p>Name: {verifiedInfo.Customer_Name || verifiedInfo.name || "N/A"}</p>
          <p>Current Plan: {verifiedInfo.Full_Details?.Current_Bouquet || "Unknown"}</p>
          <p>Status: {verifiedInfo.Full_Details?.Status || "Unknown"}</p>
        </div>
      )}
      
      {/* Plan Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Select Plan</label>
        <select
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select a plan</option>
          {cablePlans.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} - {p.price} ({p.validity})
            </option>
          ))}
        </select>
      </div>
      
      {/* Subscribe Button */}
      <button
        onClick={subscribeCable}
        disabled={loading || !provider || !smartCard || !plan}
        className="w-full py-3 bg-blue-500 text-black rounded hover:bg-blue-600 transition"
      >
        {loading ? "Processing..." : "Subscribe Now"}
      </button>
      
      {/* Message Display */}
      {message.text && (
        <div className={`mt-4 p-3 rounded text-sm ${
          message.type === "error"
            ? "bg-red-50 text-red-700"
            : message.type === "success"
            ? "bg-green-50 text-green-700"
            : "bg-blue-50 text-blue-700"
        }`}>
          {renderMessage(message.text)}
        </div>
      )}
    </div>
  );
}
