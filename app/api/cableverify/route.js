import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const body = await req.json();
    const { cablename, smart_card_number } = body;

    if (!cablename || !smart_card_number) {
      return NextResponse.json(
        { error: "cablename and smart_card_number are required" },
        { status: 400 }
      );
    }

    // Ensure fields are strings and cablename is one of "1", "2", "3", or "4"
    const validProviders = ["1", "2", "3", "4"];
    if (!validProviders.includes(String(cablename))) {
      return NextResponse.json(
        { error: "Invalid cablename. Must be 1, 2, 3, or 4." },
        { status: 400 }
      );
    }

    const payload = {
      cablename: String(cablename),
      smart_card_number: String(smart_card_number),
    };

    const response = await axios.post(
      "https://vtunaija.com.ng/api/cablesub/verify/",
      payload,
      {
        headers: {
          "Authorization": `Token ${process.env.VTUNAija_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error(
      "Verification error:",
      error.response ? error.response.data : error.message
    );
    return NextResponse.json(
      { error: error.response?.data || error.message || "Verification failed" },
      { status: 500 }
    );
  }
}
