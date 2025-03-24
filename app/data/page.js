"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function DataPage() {
  const [network, setNetwork] = useState("1"); // Default to "1" (MTN)
  const [mobile, setMobile] = useState("");
  const [plan, setPlan] = useState("");
  const [dataPlans, setDataPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Network options mapped to API values
  const networks = [
    { id: "1", name: "MTN" },
    { id: "2", name: "GLO" },
    { id: "3", name: "AIRTEL" },
    { id: "4", name: "9MOBILE" },
  ];

  const allPlans = {
    "1": [ // MTN
      { id: "1", name: "750 MB", type: "SME2", validity: "3 Days", price: "₦443.25" },
      { id: "2", name: "1.2GB", type: "SME", validity: "7 Days", price: "₦690.00" },
      { id: "3", name: "1.5GB", type: "SME", validity: "7 Days", price: "₦985.00" },
      { id: "4", name: "2.7GB", type: "SME", validity: "30 Days", price: "₦1970.00" },
      { id: "5", name: "5GB", type: "SME", validity: "7 Days", price: "₦1477.50" },
      { id: "6", name: "11GB", type: "SME", validity: "30 Days", price: "₦4925.00" },
      { id: "175", name: "5GB", type: "GiftingPlan", validity: "7 Days", price: "₦1455.00" },
      { id: "176", name: "2.5GB", type: "GiftingPlan", validity: "2 Days", price: "₦873.00" },
      { id: "178", name: "7GB", type: "GiftingPlan", validity: "7 Days", price: "₦2910.00" },
      { id: "235", name: "1GB + 3mins", type: "AwoofData", validity: "1 Days", price: "₦339.50" },
      { id: "236", name: "1.5GB Weekly Plan + 100MB for YouTube Music", type: "AwoofData", validity: "1 Days", price: "₦388.00" },
      { id: "237", name: "2.5GB", type: "AwoofData", validity: "2 Days", price: "₦873.00" },
      { id: "238", name: "5GB", type: "AwoofData", validity: "7 Days", price: "₦1455.00" },
      { id: "239", name: "7GB", type: "AwoofData", validity: "7 Days", price: "₦2910.00" },
      { id: "240", name: "15GB + 25mins", type: "AwoofData", validity: "30 Days", price: "₦6305.00" },
      { id: "241", name: "25GB", type: "AwoofData", validity: "30 Days", price: "₦8730.00" },
      { id: "242", name: "75GB", type: "AwoofData", validity: "30 Days", price: "₦19400.00" },
      { id: "243", name: "3.2GB", type: "AwoofData", validity: "2 Days", price: "₦970.00" },
      { id: "244", name: "1GB + 3mins", type: "GiftingPlan", validity: "1 Days", price: "₦339.50" },
      { id: "245", name: "1.5GB Weekly Plan + 100MB for YouTube Music", type: "GiftingPlan", validity: "1 Days", price: "₦388.00" },
      { id: "246", name: "3.2GB", type: "GiftingPlan", validity: "2 Days", price: "₦970.00" },
      { id: "247", name: "15GB + 25mins", type: "GiftingPlan", validity: "30 Days", price: "₦6305.00" },
      { id: "248", name: "20GB", type: "GiftingPlan", validity: "30 Days", price: "₦7275.00" },
      { id: "249", name: "25GB", type: "GiftingPlan", validity: "30 Days", price: "₦8730.00" },
      { id: "250", name: "32GB", type: "GiftingPlan", validity: "30 Days", price: "₦10670.00" },
      { id: "251", name: "75GB", type: "GiftingPlan", validity: "30 Days", price: "₦19400.00" },
      { id: "262", name: "150GB", type: "GiftingPlan", validity: "30 Days", price: "₦33950.00" },
      { id: "263", name: "2GB", type: "AwoofData", validity: "2 Days", price: "₦727.50" },
      { id: "264", name: "2GB", type: "GiftingPlan", validity: "2 Days", price: "₦727.50" },
      { id: "265", name: "11GB + 25mins", type: "GiftingPlan", validity: "30 Days", price: "₦4850.00" },
      { id: "299", name: "150GB 2-Month Plan", type: "BigBundles", validity: "60 Days", price: "₦39400.00" },
      { id: "300", name: "200GB 2-Month Plan", type: "BigBundles", validity: "60 Days", price: "₦49250.00" },
      { id: "301", name: "480GB 3-Month Plan", type: "BigBundles", validity: "90 Days", price: "₦118200.00" },
      { id: "302", name: "5GB", type: "XtraSpecial", validity: "30 Days", price: "₦1462.50" },
    ],
    "2": [ // GLO
      { id: "22", name: "500 MB", type: "Corporate", validity: "30 Days", price: "₦220.00" },
      { id: "23", name: "1 GB", type: "Corporate", validity: "30 Days", price: "₦430.00" },
      { id: "24", name: "2 GB", type: "Corporate", validity: "30 Days", price: "₦860.00" },
      { id: "25", name: "3 GB", type: "Corporate", validity: "30 Days", price: "₦1290.00" },
      { id: "26", name: "5 GB", type: "Corporate", validity: "30 Days", price: "₦2150.00" },
      { id: "27", name: "10 GB", type: "Corporate", validity: "30 Days", price: "₦4300.00" },
      { id: "125", name: "750 MB", type: "AwoofData", validity: "1 Days", price: "₦192.00" },
      { id: "126", name: "1.5GB", type: "AwoofData", validity: "1 Days", price: "₦295.00" },
      { id: "127", name: "2.5GB", type: "AwoofData", validity: "2 Days", price: "₦495.00" },
      { id: "128", name: "10GB", type: "AwoofData", validity: "7 Days", price: "₦1915.00" },
      { id: "129", name: "GLO WTF ₦25 100MB Oneoff", type: "SocialMedia", validity: "1 Days", price: "₦25.77" },
      { id: "130", name: "GLO WTF ₦50 200MB Oneoff", type: "SocialMedia", validity: "7 Days", price: "₦50.53" },
      { id: "131", name: "GLO WTF ₦100 500MB Oneoff", type: "SocialMedia", validity: "30 Days", price: "₦100.00" },
      { id: "132", name: "GLO Telegram ₦25 20MB Oneoff", type: "SocialMedia", validity: "1 Days", price: "₦25.77" },
      { id: "133", name: "GLO Telegram ₦50 50MB Oneoff", type: "SocialMedia", validity: "7 Days", price: "₦50.53" },
      { id: "134", name: "GLO Telegram ₦100 125MB Oneoff", type: "SocialMedia", validity: "30 Days", price: "₦100.00" },
      { id: "135", name: "GLO Instagram ₦25 20MB Oneoff", type: "SocialMedia", validity: "1 Days", price: "₦25.77" },
      { id: "136", name: "GLO Instagram ₦50 50MB Oneoff", type: "SocialMedia", validity: "7 Days", price: "₦50.53" },
      { id: "137", name: "GLO Instagram ₦100 125MB Oneoff", type: "SocialMedia", validity: "30 Days", price: "₦100.00" },
      { id: "138", name: "GLO Tiktok ₦25 20MB Oneoff", type: "SocialMedia", validity: "1 Days", price: "₦25.77" },
      { id: "139", name: "GLO Tiktok ₦50 50MB Oneoff", type: "SocialMedia", validity: "7 Days", price: "₦50.53" },
      { id: "140", name: "GLO Tiktok ₦100 125MB Oneoff", type: "SocialMedia", validity: "30 Days", price: "₦100.00" },
      { id: "141", name: "GLO Opera ₦25 25MB Oneoff", type: "SocialMedia", validity: "1 Days", price: "₦25.77" },
      { id: "142", name: "GLO Opera ₦50 100MB Oneoff", type: "SocialMedia", validity: "7 Days", price: "₦50.53" },
      { id: "143", name: "GLO Opera ₦100 300MB Oneoff", type: "SocialMedia", validity: "30 Days", price: "₦100.00" },
      { id: "144", name: "GLO MyG ₦300 1 GB OneOff", type: "SocialMedia", validity: "3 Days", price: "₦299.96" },
      { id: "145", name: "Glo MyG ₦500 1.5 GB OneOff", type: "SocialMedia", validity: "7 Days", price: "₦498.96" },
      { id: "146", name: "Glo MyG ₦1000 3.5 GB OneOff", type: "SocialMedia", validity: "30 Days", price: "₦994.87" },
      { id: "147", name: "Glo Youtube ₦50 100MB Oneoff", type: "YoutubeBundle", validity: "1 Days", price: "₦50.53" },
      { id: "148", name: "Glo Youtube ₦100 200MB Oneoff", type: "YoutubeBundle", validity: "7 Days", price: "₦100.00" },
      { id: "149", name: "Glo Youtube ₦250 500MB Oneoff", type: "YoutubeBundle", validity: "30 Days", price: "₦250.50" },
      { id: "150", name: "Glo Youtube ₦50 500MB Oneoff (1 hour)", type: "YoutubeBundle", validity: "1 Days", price: "₦50.53" },
      { id: "151", name: "Glo Youtube ₦130 1.5GB Oneoff (3 hours)", type: "YoutubeBundle", validity: "1 Days", price: "₦129.69" },
      { id: "152", name: "Glo Youtube ₦200 2GB Night Oneoff (7 hours Night)", type: "YoutubeBundle", validity: "1 Days", price: "₦200.97" },
      { id: "153", name: "Glo Data ₦100 - 150MB - 1 day", type: "GiftingPlan", validity: "1 Days", price: "₦100.00" },
      { id: "154", name: "Glo Data ₦200 - 350MB - 2 days", type: "GiftingPlan", validity: "2 Days", price: "₦200.97" },
      { id: "155", name: "Glo Data ₦500 - 1.35GB", type: "GiftingPlan", validity: "14 Days", price: "₦499.92" },
      { id: "156", name: "Glo Data ₦1000 - 2.9GB", type: "GiftingPlan", validity: "30 Days", price: "₦998.83" },
      { id: "157", name: "Glo Data ₦2000 - 5.8GB", type: "GiftingPlan", validity: "30 Days", price: "₦2000.59" },
      { id: "158", name: "Glo Data ₦2500 - 7.7GB", type: "GiftingPlan", validity: "30 Days", price: "₦2497.52" },
      { id: "159", name: "Glo Data ₦3000 - 10GB", type: "GiftingPlan", validity: "30 Days", price: "₦3000.38" },
      { id: "160", name: "Glo Data ₦4000 - 13.25GB", type: "GiftingPlan", validity: "30 Days", price: "₦3995.24" },
      { id: "161", name: "Glo Data ₦5000 - 18.25GB", type: "GiftingPlan", validity: "30 Days", price: "₦4995.04" },
      { id: "162", name: "Glo Data ₦8000 - 29.5GB", type: "GiftingPlan", validity: "30 Days", price: "₦7999.38" },
      { id: "163", name: "Glo Data ₦10000 - 50GB", type: "GiftingPlan", validity: "30 Days", price: "₦9999.97" },
      { id: "164", name: "Glo Data ₦15000 - 93GB", type: "GiftingPlan", validity: "30 Days", price: "₦14953.41" },
      { id: "165", name: "Glo Data ₦18000 - 119GB", type: "GiftingPlan", validity: "30 Days", price: "₦17968.60" },
      { id: "166", name: "Glo Data ₦20000 - 138GB", type: "GiftingPlan", validity: "30 Days", price: "₦19998.87" },
      { id: "167", name: "Glo Data ₦30,000 - 225GB", type: "BigBundles", validity: "30 Days", price: "₦29947.34" },
      { id: "168", name: "Glo Data ₦36,000 - 300GB", type: "BigBundles", validity: "30 Days", price: "₦35936.19" },
      { id: "169", name: "Glo Data ₦50,000 - 425GB", type: "BigBundles", validity: "90 Days", price: "₦49995.69" },
      { id: "170", name: "Glo Data ₦60,000 - 525GB", type: "BigBundles", validity: "120 Days", price: "₦59893.63" },
      { id: "171", name: "Glo Data ₦75,000 - 675GB", type: "BigBundles", validity: "120 Days", price: "₦74917.26" },
      { id: "172", name: "Glo Data ₦100,000 - 1TB", type: "BigBundles", validity: "365 Days", price: "₦99687.42" },
    ],
    "3": [ // AIRTEL
      { id: "28", name: "500 MB", type: "Corporate", validity: "30 Days", price: "₦322.50" },
      { id: "29", name: "1 GB", type: "Corporate", validity: "30 Days", price: "₦645.00" },
      { id: "30", name: "2 GB", type: "Corporate", validity: "30 Days", price: "₦1290.00" },
      { id: "31", name: "100MB", type: "Corporate", validity: "7 Days", price: "₦75.00" },
      { id: "32", name: "5 GB", type: "Corporate", validity: "30 Days", price: "₦3225.00" },
      { id: "33", name: "10 GB", type: "Corporate", validity: "30 Days", price: "₦6450.00" },
      { id: "38", name: "300MB", type: "Corporate", validity: "7 Days", price: "₦145.00" },
      { id: "110", name: "Please Do Not Buy If You Are Owing Airtel Airtime, As they will Debit you", type: "SME", validity: "0 Days", price: "₦10.00" },
      { id: "111", name: "150MB", type: "SME", validity: "2 Days", price: "₦68.00" },
      { id: "112", name: "300MB", type: "SME", validity: "2 Days", price: "₦128.00" },
      { id: "113", name: "1GB", type: "SME", validity: "1 Days", price: "₦365.00" },
      { id: "114", name: "2GB", type: "SME", validity: "5 Days", price: "₦675.00" },
      { id: "116", name: "3GB", type: "SME", validity: "7 Days", price: "₦1070.00" },
      { id: "117", name: "7GB", type: "SME", validity: "7 Days", price: "₦2100.00" },
      { id: "118", name: "10GB", type: "SME", validity: "30 Days", price: "₦3200.00" },
      { id: "254", name: "3GB", type: "Corporate2", validity: "30 Days", price: "₦1482.00" },
      { id: "255", name: "6GB", type: "Corporate2", validity: "7 Days", price: "₦2470.00" },
      { id: "256", name: "8.5GB", type: "Corporate2", validity: "7 Days", price: "₦2964.00" },
      { id: "257", name: "10GB", type: "Corporate2", validity: "30 Days", price: "₦3952.00" },
      { id: "258", name: "18GB", type: "Corporate2", validity: "7 Days", price: "₦4940.00" },
      { id: "259", name: "25GB", type: "Corporate2", validity: "30 Days", price: "₦7904.00" },
      { id: "260", name: "35GB", type: "Corporate2", validity: "30 Days", price: "₦9880.00" },
      { id: "261", name: "100GB", type: "Corporate2", validity: "30 Days", price: "₦19760.00" },
      { id: "275", name: "200MB (Whatsapp, Facebook, Instagram, Youtube and Tiktok)", type: "SocialMedia", validity: "2 Days", price: "₦98.50" },
      { id: "276", name: "1 GB (Whatsapp, Facebook, Instagram, Youtube and Tiktok)", type: "SocialMedia", validity: "3 Days", price: "₦295.40" },
      { id: "277", name: "1.5 GB (Whatsapp, Facebook, Instagram, Youtube and Tiktok)", type: "SocialMedia", validity: "7 Days", price: "₦492.50" },
      { id: "282", name: "500 Naira Binge Plan", type: "BingePlans", validity: "1 Days", price: "₦492.50" },
      { id: "283", name: "1.5GB Binge Plan + Youtube & Social Plan Data", type: "BingePlans", validity: "2 Days", price: "₦591.00" },
      { id: "284", name: "2GB Binge Plan + Youtube & Social Plan Data", type: "BingePlans", validity: "2 Days", price: "₦738.75" },
      { id: "285", name: "3GB Binge Plan + Youtube & Social Plans Data", type: "BingePlans", validity: "2 Days", price: "₦985.00" },
      { id: "286", name: "13GB MIFI 5 Data - MiFi Only", type: "MiFi", validity: "30 Days", price: "₦4925.00" },
      { id: "287", name: "35GB MIFI 10 Data - MiFi Only", type: "MiFi", validity: "30 Days", price: "₦9850.00" },
      { id: "288", name: "60GB MIFI 15 Data - MiFi Only", type: "MiFi", validity: "30 Days", price: "₦14775.00" },
      { id: "289", name: "100GB Unlimited Uiltra 20 - Router Only", type: "Router", validity: "30 Days", price: "₦19700.00" },
      { id: "290", name: "Unlimited 20MBPS Data - Router Only", type: "Router", validity: "30 Days", price: "₦29550.00" },
      { id: "291", name: "Unlimited 60MBPS Data - Router Only", type: "Router", validity: "30 Days", price: "₦49250.00" },
      { id: "292", name: "Unlimited 60MBPS Data - Router Only", type: "Router", validity: "90 Days", price: "₦78800.00" },
      { id: "293", name: "Unlimited 60MBPS Data - Router Only", type: "Router", validity: "90 Days", price: "₦132975.00" },
      { id: "294", name: "Unlimited 20MBPS Data - Router Only", type: "Router", validity: "120 Days", price: "₦147750.00" },
      { id: "295", name: "100GB", type: "BigBundles", validity: "30 Days", price: "₦19700.00" },
      { id: "296", name: "150GB", type: "BigBundles", validity: "30 Days", price: "₦29550.00" },
      { id: "297", name: "200GB", type: "BigBundles", validity: "90 Days", price: "₦49250.00" },
      { id: "298", name: "400GB", type: "BigBundles", validity: "365 Days", price: "₦98500.00" },
    ],
    "4": [ // 9MOBILE
      { id: "34", name: "500 MB", type: "Corporate", validity: "30 Days", price: "₦71.00" },
      { id: "35", name: "1 GB", type: "Corporate", validity: "30 Days", price: "₦130.00" },
      { id: "36", name: "2 GB", type: "Corporate", validity: "30 Days", price: "₦260.00" },
      { id: "37", name: "3 GB", type: "Corporate", validity: "30 Days", price: "₦390.00" },
      { id: "39", name: "10GB", type: "Corporate", validity: "30 Days", price: "₦1300.00" },
      { id: "68", name: "4GB", type: "Corporate", validity: "30 Days", price: "₦520.00" },
      { id: "69", name: "20GB", type: "Corporate", validity: "30 Days", price: "₦2600.00" },
      { id: "80", name: "1.5GB", type: "Corporate", validity: "30 Days", price: "₦197.00" },
      { id: "218", name: "9mobile 50MB - 50 Naira", type: "GiftingPlan", validity: "1 Days", price: "₦50.30" },
      { id: "219", name: "9mobile 100MB - 100 Naira", type: "GiftingPlan", validity: "1 Days", price: "₦100.55" },
      { id: "220", name: "9mobile 650MB - 200 Naira", type: "GiftingPlan", validity: "1 Days", price: "₦200.10" },
      { id: "221", name: "9mobile 1GB + 100MB (1 day) - 300 Naira", type: "GiftingPlan", validity: "1 Days", price: "₦300.65" },
      { id: "222", name: "9mobile 2GB +100MB - 500 Naira - 3 days", type: "GiftingPlan", validity: "3 Days", price: "₦500.70" },
      { id: "223", name: "9mobile 4GB (2GB + 2GB Night) - 1000 Naira", type: "GiftingPlan", validity: "7 Days", price: "₦1000.35" },
      { id: "224", name: "9mobile 6.2GB (2.2GB+4GB Night) - 1,200 Naira", type: "GiftingPlan", validity: "30 Days", price: "₦1200.45" },
      { id: "225", name: "9mobile 9.5GB (5.5GB+4GB Night) - 2000 Naira", type: "GiftingPlan", validity: "30 Days", price: "₦2000.70" },
      { id: "226", name: "9mobile 15GB - 3,000 Naira", type: "GiftingPlan", validity: "30 Days", price: "₦3001.05" },
      { id: "227", name: "9mobile 22GB - 5,000 Naira", type: "GiftingPlan", validity: "30 Days", price: "₦5001.75" },
      { id: "228", name: "9mobile 35 GB - 7,000 Naira", type: "BigBundles", validity: "30 Days", price: "₦7002.45" },
      { id: "229", name: "9mobile 50GB - 10,000 Naira", type: "BigBundles", validity: "30 Days", price: "₦10003.50" },
      { id: "230", name: "9mobile 80GB - 15,000 Naira", type: "BigBundles", validity: "30 Days", price: "₦15005.25" },
      { id: "231", name: "9mobile 125GB - 20,000 Naira", type: "BigBundles", validity: "30 Days", price: "₦20007.00" },
    ],
  };

  // Update plans when network changes
  useEffect(() => {
    setDataPlans(allPlans[network] || []);
    setPlan(""); // Reset plan selection when network changes
  }, [network]);

  async function purchaseData() {
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          network,
          mobile_number: mobile,
          plan,
          amount: "", // Include if required by the API
          airtime_type: "", // Include if required by the API
        }),
      });
      const data = await res.json();
      if (data.error) setMessage(data.error);
      else setMessage("Data Purchased Successfully!");
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong.");
    }
    setLoading(false);
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Buy Data</h2>

      {/* Network Selection */}
      <div className="mb-3">
        <Select value={network} onValueChange={setNetwork}>
          <SelectTrigger>
            <SelectValue placeholder="Select Network" />
          </SelectTrigger>
          <SelectContent>
            {networks.map((net) => (
              <SelectItem key={net.id} value={net.id}>
                {net.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Mobile Number Input */}
      <Input
        type="text"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        className="mb-3"
      />

      {/* Data Plan Selection */}
      <div className="mb-3">
        <Select value={plan} onValueChange={setPlan}>
          <SelectTrigger>
            <SelectValue placeholder="Select Data Plan" />
          </SelectTrigger>
          <SelectContent>
            {dataPlans.map((dataPlan) => (
              <SelectItem key={dataPlan.id} value={dataPlan.id}>
                {dataPlan.name} - {dataPlan.price} - {dataPlan.validity}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Purchase Button */}
      <Button
        onClick={purchaseData}
        disabled={loading || !network || !mobile || !plan}
        className="w-full"
      >
        {loading ? "Processing..." : "Buy Data"}
      </Button>

      {/* Message Display */}
      {message && (
        <p
          className={`mt-3 text-sm ${
            message.includes("Successfully") ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}