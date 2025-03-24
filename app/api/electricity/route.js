export async function POST(req) {
    try {
        const { action, disco_name, meter_number, MeterType, amount } = await req.json();

        const API_KEY = process.env.VTUNaija_API_KEY;
        let url = "https://vtunaija.com.ng/api/billpayment/verify/";

        if (action === "pay") {
            url = "https://vtunaija.com.ng/api/billpayment/";
        }

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Token ${API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                disco_name,
                meter_number,
                MeterType,
                amount,
            }),
        });

        const data = await response.json();

        return Response.json(data, { status: response.ok ? 200 : 400 });

    } catch (error) {
        return Response.json({ error: "Server Error", details: error.message }, { status: 500 });
    }
}
