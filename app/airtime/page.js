"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AirtimePage() {
  const [network, setNetwork] = useState("");
  const [mobile, setMobile] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function purchaseAirtime() {
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("/api/vtunaija-airtime", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ network, mobile_number: mobile, amount, airtime_type: "VTU" }),
      });
      const data = await res.json();
      if (data.error) setMessage(data.error);
      else setMessage("Airtime Purchased Successfully!");
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong.");
    }
    setLoading(false);
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Buy Airtime</h2>
      <Input
        type="text"
        placeholder="Network (MTN, Airtel, etc.)"
        value={network}
        onChange={(e) => setNetwork(e.target.value)}
        className="mb-3"
      />
      <Input
        type="text"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        className="mb-3"
      />
      <Input
        type="number"
        placeholder="Amount (₦)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="mb-3"
      />
      <Button onClick={purchaseAirtime} disabled={loading}>Buy Airtime</Button>
      {message && <p className="mt-3 text-sm text-red-500">{message}</p>}
    </div>
  );
}
