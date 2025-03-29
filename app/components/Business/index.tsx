import Image from 'next/image';
import Link from 'next/link';

const Business = () => {

    return (
        <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

            <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                <div className='col-span-6 flex flex-col justify-center'>
                    <h2 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>Seamless Payments, Anytime!</h2>
                    <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'>Top up electricity, airtime and data instantly from MTN, GLO, 9mobile, and Airtel.
                    Never miss a moment—renew GOTV, DSTV, Startimes, and Showmax with ease.</h3>
                    
                </div>

                <div className='col-span-6 flex justify-center mt-10 lg:mt-0'>
                    <Image src="/assets/business/inv.svg" alt="business" width={1000} height={805} />
                </div>

            </div>
        </div>

    )
}

export default Business;
