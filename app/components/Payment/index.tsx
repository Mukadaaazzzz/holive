import Image from 'next/image';
import Link from 'next/link';

const Payment = () => {
    return (
        <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
            <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1 items-center'> {/* Added items-center */}
                <div className='col-span-6 flex items-center mb-32 lg:mb-0'> {/* Flex container for heading and underline */}
                    <h2 className='text-midnightblue text-4xl sm:text-5xl font-semibold lg:text-start lh-143 relative mr-4'> {/* Added mr-4 for spacing */}
                        You can also earn with Holive Partnership Program!
                        <span className="absolute bottom-[-8px] left-0 w-full h-[4px] bg-gradient-to-r from-electricblue to-purple-500"></span>
                    </h2>
                </div>
                <div className='col-span-6 flex flex-col justify-center lg:items-start mb-32 lg:mb-0'>
                    <h3 className='text-black text-lg font-normal lg:text-start lh-173 opacity-75 pt-3'>
                        Now it’s time to earn while you share! Join the Holive Partnership Program, promote essential products, and earn commissions on every successful sale. Start today and turn referrals into steady income!
                    </h3>
                    <Link href={'/holive-partnership'} className="text-electricblue text-lg font-medium flex gap-2 pt-4 lg:mx-0">
                        Learn more <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                    </Link>
                </div>
            </div>
            
        </div>
    );

            
    
}

export default Payment;
