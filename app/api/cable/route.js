import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const body = await req.json();
    const { cablename, smart_card_number, cableplan } = body;

    if (!cablename || !smart_card_number || !cableplan) {
      return NextResponse.json(
        { error: "cablename, smart_card_number, and cableplan are required" },
        { status: 400 }
      );
    }

    const payload = {
      cablename: String(cablename),
      smart_card_number: String(smart_card_number),
      cableplan: String(cableplan),
    };

    const response = await axios.post(
      "https://vtunaija.com.ng/api/cablesub/",
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
      "Subscription error:",
      error.response ? error.response.data : error.message
    );
    return NextResponse.json(
      { error: error.response?.data || error.message || "Subscription failed" },
      { status: 500 }
    );
  }
}
