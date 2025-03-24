"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function WalletPage() {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchBalance() {
    setLoading(true);
    try {
      const res = await fetch("/api/vtunaija-balance");
      const data = await res.json();
      setBalance(data.balance || "Unknown");
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Wallet Balance</h2>
      <p className="text-lg">{loading ? "Loading..." : `₦${balance}`}</p>
      <Button onClick={fetchBalance} className="mt-4" disabled={loading}>Refresh Balance</Button>
    </div>
  );
}
