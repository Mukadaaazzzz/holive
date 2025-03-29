"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function HolivePartnershipRegister() {
  const [formData, setFormData] = useState({
    fullname: "",
    age: "",
    gender: "",
    location: "",
    marital_status: "",
    nin_number: "",
    whatsapp_number: "",
    guarantor_name: "",
    guarantor_phone: "",
    referred_by: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Generate Unique Referral ID
  const generateReferralID = () => {
    return "HOLIVE-" + Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const referral_id = generateReferralID();

    const { data, error } = await supabase
      .from("holive_partners")
      .insert([{ ...formData, referral_id }]);

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Registration successful! Your Referral ID is: " + referral_id);
      setFormData({
        fullname: "",
        age: "",
        gender: "",
        location: "",
        marital_status: "",
        nin_number: "",
        whatsapp_number: "",
        guarantor_name: "",
        guarantor_phone: "",
        referred_by: "",
      });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Holive Partnership Program</h2>
        <p className="text-gray-600 text-center mb-6">
          Register to earn commissions with your unique referral ID!
        </p>

        {message && <p className="text-center text-green-600 mb-4">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} required placeholder="Full Name" className="w-full p-3 border rounded-md" />
          <input type="number" name="age" value={formData.age} onChange={handleChange} required placeholder="Age" className="w-full p-3 border rounded-md" />
          
          <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full p-3 border rounded-md">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input type="text" name="location" value={formData.location} onChange={handleChange} required placeholder="Location" className="w-full p-3 border rounded-md" />
          
          <select name="marital_status" value={formData.marital_status} onChange={handleChange} required className="w-full p-3 border rounded-md">
            <option value="">Select Marital Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>

          <input type="text" name="nin_number" value={formData.nin_number} onChange={handleChange} required placeholder="NIN Number" className="w-full p-3 border rounded-md" />
          <input type="text" name="whatsapp_number" value={formData.whatsapp_number} onChange={handleChange} required placeholder="WhatsApp Number" className="w-full p-3 border rounded-md" />

          <input type="text" name="guarantor_name" value={formData.guarantor_name} onChange={handleChange} required placeholder="Guarantor Name" className="w-full p-3 border rounded-md" />
          <input type="text" name="guarantor_phone" value={formData.guarantor_phone} onChange={handleChange} required placeholder="Guarantor Phone Number" className="w-full p-3 border rounded-md" />

          <input type="text" name="referred_by" value={formData.referred_by} onChange={handleChange} placeholder="Referral ID (if any)" className="w-full p-3 border rounded-md" />

          <button type="submit" disabled={loading} className="w-full bg-blue-600 text-black p-3 rounded-md hover:bg-blue-700 transition">
            {loading ? "Registering..." : "Join Now"}
          </button>
        </form>
      </div>
    </div>
  );
}
