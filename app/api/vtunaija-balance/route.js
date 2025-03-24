import axios from "axios";

export async function GET() {
  try {
    const response = await axios.post(
      "https://vtunaija.com.ng/api/user/",
      {},
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
