"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function EditProfile() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchProfile() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from("profiles")
          .select("username, location")
          .eq("id", user.id)
          .single();
        
        if (data) {
          setUsername(data.username || "");
          setLocation(data.location || "");
        } else {
          console.error("Error fetching profile:", error);
        }
      }
    }
    fetchProfile();
  }, []);

  async function handleUpdateProfile() {
    setLoading(true);
    setMessage("");

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setMessage("User not found.");
      setLoading(false);
      return;
    }

    const { error } = await supabase
      .from("profiles")
      .upsert({
        id: user.id,
        username,
        location,
      });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Profile updated successfully!");
      router.push("/dashboard");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Edit Profile</h2>
        
        {message && <p className="mt-2 text-center text-sm text-red-500">{message}</p>}

        <div className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <button
            onClick={handleUpdateProfile}
            disabled={loading}
            className="w-full bg-blue-600 text-black p-2 rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600">
          <a href="/dashboard" className="text-blue-600 hover:underline">Back to Dashboard</a>
        </p>
      </div>
    </div>
  );
}
