"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaMoneyBillWave, FaShieldAlt, FaChartLine, FaHandshake, FaPills, FaLightbulb } from "react-icons/fa";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl shadow-2xl overflow-hidden mb-12"
        >
          <div className="p-8 md:p-12 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-extrabold text-black sm:text-5xl">
                Revolutionizing <span className="text-yellow-400">Digital Payments</span>
              </h1>
              <p className="mt-4 text-xl text-blue-100">
                Empowering financial freedom through seamless transactions and partnership opportunities
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/3">
              <div className="relative h-64 w-64 mx-auto">
                <Image
                  src="/assets/founder.png"
                  alt="Oluwaseun Stephen Oyekanmi"
                  fill
                  className="rounded-full object-cover border-4 border-white shadow-xl"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-lg font-medium text-white">Oluwaseun Stephen Oyekanmi</p>
                <p className="text-blue-200">CEO & Founder</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* About Card */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full mr-4">
                <FaLightbulb className="text-blue-700 text-xl" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Digital-First Solutions</h2>
            </div>
            <p className="text-gray-700">
              Holive simplifies payments for bills, data, airtime and more with our secure, user-friendly platform.
              Experience financial transactions reimagined for the digital age.
            </p>
          </motion.div>

          {/* Partnership Card */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 rounded-full mr-4">
                <FaMoneyBillWave className="text-green-700 text-xl" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Partnership Program</h2>
            </div>
            <p className="text-gray-700">
              <span className="font-semibold text-green-700">Earn commissions</span> by promoting certain products! 
              Get your unique referral ID and start making money with every successful transaction.
            </p>
          </motion.div>

          {/* Pharmacy Card */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-600"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-full mr-4">
                <FaPills className="text-purple-700 text-xl" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Holive Pharmacy</h2>
            </div>
            <p className="text-gray-700">
              Quality healthcare meets digital convenience. We provide trusted medications and wellness products with exceptional service.
            </p>
          </motion.div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-12">
          {/* Partnership Program Expansion */}
          <motion.section 
            variants={fadeIn}
            initial=""
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-b from-green-600 to-green-700 p-8 flex items-center justify-center">
                <FaHandshake className="text-black text-8xl opacity-90" />
              </div>
              <div className="p-8 md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">The Holive Partnership Advantage</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 bg-green-100 p-2 rounded-full">
                      <FaChartLine className="text-green-700 text-lg" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800">Passive Income Stream</h3>
                      <p className="text-gray-700 mt-1">
                        Earn commissions on every transaction made through your referral link. The more people you bring, the more you earn!
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 bg-blue-100 p-2 rounded-full">
                      <FaShieldAlt className="text-blue-700 text-lg" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800">Secure & Transparent</h3>
                      <p className="text-gray-700 mt-1">
                        Real-time tracking of your referrals and earnings. We ensure all transactions are secure and commissions are paid promptly.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 bg-yellow-100 p-2 rounded-full">
                      <FaMoneyBillWave className="text-yellow-700 text-lg" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800">Flexible Earnings</h3>
                      <p className="text-gray-700 mt-1">
                        Whether you are a student, entrepreneur, or professional - anyone can join and start earning with minimal effort.
                      </p>
                    </div>
                  </div>
                </div>
                <button className="mt-8 bg-gradient-to-r from-green-600 to-green-700 text-black px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105">
                  Join the Partnership Program
                </button>
              </div>
            </div>
          </motion.section>

          {/* Mission & Values */}
          <motion.section 
            variants={fadeIn}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-800 to-blue-700 rounded-2xl shadow-2xl p-8 text-black"
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission & Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-100">Why We Exist</h3>
                <p className="text-blue-100 leading-relaxed">
                  Holive was founded to democratize financial services and create earning opportunities through technology. 
                  We are committed to building solutions that dont just process transactions, but transform lives by making 
                  financial empowerment accessible to everyone.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-100">Core Principles</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2 text-xl">✓</span>
                    <span className="text-blue-100">Innovation that solves real problems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2 text-xl">✓</span>
                    <span className="text-blue-100">Transparency in all transactions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2 text-xl">✓</span>
                    <span className="text-blue-100">Customer success as our success metric</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2 text-xl">✓</span>
                    <span className="text-blue-100">Community-focused growth</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Pharmacy Section */}
          <motion.section 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="md:flex flex-row-reverse">
              <div className="md:w-1/3 bg-gradient-to-b from-purple-600 to-purple-700 p-8 flex items-center justify-center">
                <FaPills className="text-black text-8xl opacity-90" />
              </div>
              <div className="p-8 md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Holive Pharmacy - Healthcare Redefined</h2>
                <p className="text-gray-700 mb-6">
                  Beyond digital payments, we are committed to community health through Holive Pharmacy - providing 
                  quality medications and wellness products with the same innovative approach.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h3 className="font-semibold text-blue-800">Quality Assurance</h3>
                    <p className="text-sm text-gray-700 mt-1">All medications sourced from certified suppliers</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h3 className="font-semibold text-blue-800">Digital Convenience</h3>
                    <p className="text-sm text-gray-700 mt-1">Easy ordering and delivery options</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h3 className="font-semibold text-blue-800">Expert Guidance</h3>
                    <p className="text-sm text-gray-700 mt-1">Professional advice for your health needs</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h3 className="font-semibold text-blue-800">Affordable Care</h3>
                    <p className="text-sm text-gray-700 mt-1">Competitive pricing for all products</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Final CTA */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Transform Your Financial Journey?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users and partners who are already experiencing the Holive advantage.
          </p>
          <Link href="/signup">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            
            <button className="bg-white hover:bg-gray-50 text-blue-700 border-2 border-blue-700 px-8 py-4 rounded-lg font-semibold shadow transition-all hover:scale-105">
              Begin Your Journey
            </button>
          </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;