"use client";
import Image from "next/image";
import Link from "next/link";
export default function HolivePartnershipPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-96 relative">
          <Image
            src="/assets/holive-hero.jpg" // Replace with your intro image
            alt="Holive Partnership Program"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
              Holive Partnership Program
            </h1>
            
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-midnightblue mb-6">
          Change the Way You Get Paid
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Now it’s time to change the payment method. Join the Holive Partnership Program and transform how you earn. Our innovative platform lets you select products from various categories, get your unique referral ID, and promote these products through your social channels or in-person interactions. When someone makes a purchase using your referral ID, you earn commissions on every successful sale.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Whether you are passionate about health, wellness, or everyday essentials, our program makes it simple to turn your network into a steady income stream. Promote products, share your unique referral code, and watch your earnings grow—all while enjoying a hassle-free experience.
        </p>
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-2xl font-semibold text-midnightblue mb-4">
            How It Works
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <span className="font-medium">Select a Product Category:</span> Choose from medical supplies, wellness products, and more.
            </li>
            <li>
              <span className="font-medium">Get Your Unique Referral ID:</span> Once registered, you will receive an exclusive code to share.
            </li>
            <li>
              <span className="font-medium">Promote & Earn:</span> Share your referral code with friends, family, or online. When a sale is made using your code, you earn a commission.
            </li>
            <li>
              <span className="font-medium">Monitor Your Earnings:</span> Access a dedicated dashboard to track sales, commissions, and performance.
            </li>
          </ul>
        </div>
        <Link href="/holive-partners-register">
        <div className="mt-10 text-center">
          
          <button className="px-8 py-4 bg-electricblue text-white rounded-lg shadow-lg hover:bg-blue-600 transition">
            Join the Program
          </button>
       
        </div>
        </Link>
      </section>
    </main>
  );
}
