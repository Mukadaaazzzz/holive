"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

export default function Dashboard() {
  const [email, setEmail] = useState("");
  const [balance, setBalance] = useState(null);
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    async function fetchUserData() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setEmail(user.email);

        // Fetch wallet balance from the "wallets" table
        const { data: walletData, error: walletError } = await supabase
          .from("wallets")
          .select("balance")
          .eq("user_id", user.id)
          .single();

        if (walletData) {
          setBalance(walletData.balance);
        } else {
          console.error("Error fetching wallet balance:", walletError);
          setBalance("0.00");
        }

        // Fetch profile data from the "profiles" table
        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("username, location")
          .eq("id", user.id)
          .single();

        if (profileData) {
          setUsername(profileData.username || "");
          setLocation(profileData.location || "");
        } else {
          console.error("Error fetching profile:", profileError);
        }
      }
    }
    fetchUserData();
  }, []);

  // Dynamic greeting message
  const greeting = username
    ? `Hello, ${username} from ${location || "somewhere"}!`
    : `Hi, ${email || "User"}!`;

  // Action buttons
  const actions = [
    { label: "Buy Airtime", href: "/airtime", iconSrc: "/assets/dashboard/airtime.png" },
    { label: "Buy Data", href: "/data", iconSrc: "/assets/dashboard/wifi.png" },
    { label: "TV Subscription", href: "/cable", iconSrc: "/assets/dashboard/tv.png" },
    { label: "Pay Electricity", href: "/electricity", iconSrc: "/assets/dashboard/electricity.png" },
    { label: "Earn", href: "/holive-partnership", iconSrc: "/assets/dashboard/earn.png" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header Section */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">{greeting}</h1>
        <p className="text-lg text-gray-600 mt-2">
          Wallet Balance:{" "}
          <span className="font-semibold text-green-600">
            NGN{balance !== null ? balance : "Loading..."}
          </span>
        </p>
      </header>

      <Link href="/edit-profile">
        <button className="bg-blue-600 text-black p-2 rounded-lg w-full mb-6 hover:bg-blue-700 transition">
          Edit Profile
        </button>
      </Link>

      {/* Actions Grid */}
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <Link href={action.href} key={index}>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center justify-center space-y-2 hover:bg-blue-500 hover:text-white transition cursor-pointer">
              <Image src={action.iconSrc} alt={action.label} className="h-10 w-10" />
              <span className="text-center text-sm font-medium">{action.label}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Holive. All rights reserved.
      </footer>
    </div>
  );
}
