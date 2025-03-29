import Image from "next/image";
import Link from 'next/link';

interface datatype {
    imgSrc: string;
    heading: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/features/signal.svg",
        heading: "Instant Payments",
        paragraph: "Pay for electricity, airtime, data, and cable TV instantly with no delays or hidden charges.",
    },
    {
        imgSrc: "/assets/features/earn.svg",
        heading: "Partner Program",
        paragraph: "Earn commissions by promoting essential products.",
    },
    {
        imgSrc: "/assets/features/dollar.svg",
        heading: "Secure Transactions",
        paragraph: "Enjoy fast, secure, and seamless payments backed by top-tier encryption and reliability.",
    }
]

const Features = () => {
    return (
        <div className="bg-babyblue" id="features" >
            <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
                <h3 className="text-4xl sm:text-5xl font-semibold text-black text-center my-10">Powerful Features, Unlimited Convenience.</h3>
                <h5 className="text-black opacity-60 text-lg font-normal text-center">Enjoy seamless bill payments, secure transactions, and earning opportunities—all in one place.</h5>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 lg:gap-x-8 mt-10'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='bg-white rounded-2xl p-5 featureShadow'>

                            <Image src={item.imgSrc} alt={item.imgSrc} width={55} height={55} className="mb-2" />
                            <h3 className="text-2xl font-semibold text-black mt-5">{item.heading}</h3>
                            <h4 className='text-lg font-normal text-black opacity-50 my-2'>{item.paragraph}</h4>
                        

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features;
