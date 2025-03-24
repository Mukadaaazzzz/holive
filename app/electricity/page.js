"use client";
import { useState } from "react";

const providers = [
    { id: "1", name: "Ikeja Electricity Distribution Company" },
    { id: "2", name: "Eko Electricity Distribution Company" },
    { id: "3", name: "Kano Electricity Distribution Company (KEDCO)" },
    { id: "4", name: "Port Harcourt Electricity Distribution Company (PHED)" },
    { id: "5", name: "Jos Electricity Distribution Company" },
    { id: "6", name: "Ibadan Electricity Distribution Company (IBEDC)" },
    { id: "7", name: "Kaduna Electricity Distribution Company (KEDCO)" },
    { id: "8", name: "Abuja Electricity Distribution Company (AEDC)" },
    { id: "9", name: "Enugu Electricity Distribution Company (EEDC)" },
    { id: "10", name: "Benin Electricity Distribution Company (BEDC)" },
    { id: "11", name: "Yola Electricity Distribution Company" },
    { id: "12", name: "Aba Electricity Distribution Company" },
];

export default function ElectricityPage() {
    const [discoName, setDiscoName] = useState("");
    const [meterNumber, setMeterNumber] = useState("");
    const [meterType, setMeterType] = useState("prepaid");
    const [amount, setAmount] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleVerify = async () => {
        setLoading(true);
        setMessage("");

        const response = await fetch("/api/electricity", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                action: "verify",
                disco_name: discoName,
                meter_number: meterNumber,
            }),
        });

        const data = await response.json();
        setLoading(false);

        if (data.status === "success") {
            setCustomerName(data.Customer_Name);
            setMessage(`Verification successful: ${data.Customer_Name}`);
        } else {
            setCustomerName("");
            setMessage("Meter verification failed");
        }
    };

    const handlePayment = async () => {
        setLoading(true);
        setMessage("");

        const response = await fetch("/api/electricity", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                action: "pay",
                disco_name: discoName,
                meter_number: meterNumber,
                MeterType: meterType,
                amount,
            }),
        });

        const data = await response.json();
        setLoading(false);

        if (data.status === "success") {
            setMessage(`Payment successful! Token: ${data.token}`);
        } else {
            setMessage("Payment failed");
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-4">Electricity Bill Payment</h2>

            <label className="block mb-2">Select Provider:</label>
            <select
                className="w-full p-2 border rounded mb-4"
                value={discoName}
                onChange={(e) => setDiscoName(e.target.value)}
            >
                <option value="">Select Provider</option>
                {providers.map((provider) => (
                    <option key={provider.id} value={provider.id}>
                        {provider.name}
                    </option>
                ))}
            </select>

            <label className="block mb-2">Meter Number:</label>
            <input
                type="text"
                className="w-full p-2 border rounded mb-4"
                value={meterNumber}
                onChange={(e) => setMeterNumber(e.target.value)}
            />

            <label className="block mb-2">Meter Type:</label>
            <select
                className="w-full p-2 border rounded mb-4"
                value={meterType}
                onChange={(e) => setMeterType(e.target.value)}
            >
                <option value="prepaid">Prepaid</option>
                <option value="postpaid">Postpaid</option>
            </select>

            <label className="block mb-2">Amount:</label>
            <input
                type="number"
                className="w-full p-2 border rounded mb-4"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <button
                onClick={handleVerify}
                className="bg-blue-500 text-black p-2 rounded w-full mb-2"
                disabled={loading}
            >
                {loading ? "Verifying..." : "Verify Meter"}
            </button>

            {customerName && (
                <>
                    <p className="text-green-600">Verified: {customerName}</p>
                    <button
                        onClick={handlePayment}
                        className="bg-green-500 text-black p-2 rounded w-full mt-4"
                        disabled={loading}
                    >
                        {loading ? "Processing..." : "Pay Now"}
                    </button>
                </>
            )}

            {message && <p className="mt-4 text-center">{message}</p>}
        </div>
    );
}
