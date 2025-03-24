// app/api/topup/route.js
import axios from "axios";

export async function POST(request) {
  try {
    const { network, mobile_number, plan, amount, airtime_type } = await request.json();

    const response = await axios.post(
      "https://vtunaija.com.ng/api/data/",
      {
        network,
        mobile_number,
        Ported_number: true,
        plan, // Corrected from `Plan` to `plan`
        amount, // Include if required by the API
        airtime_type, // Include if required by the API
      },
      {
        headers: {
          Authorization: `Token ${process.env.VTUNAija_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    console.error("Backend Error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}