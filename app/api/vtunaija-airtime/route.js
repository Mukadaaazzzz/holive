import axios from "axios";

export async function POST(request) {
  try {
    const { network, mobile_number, amount, airtime_type } = await request.json();

    const response = await axios.post(
      "https://vtunaija.com.ng/api/topup/",
      {
        network,
        mobile_number,
        Ported_number: true,
        amount,
        airtime_type,
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
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
