import Image from 'next/image';
import Link from "next/link";

const Banner = () => {

    return (
        <div className='bg-header'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12'>


                    <div className='col-span-7 flex flex-col justify-evenly relative '>
                        
                        <h1 className='text-midnightblue text-4xl md:text-85xl text-center lg:text-start font-semibold lh-133 pt-0 '>Instant Payments. Extra Income.</h1>
                        <h3 className='text-black opacity-75 text-lg font-normal text-center lg:text-start pt-8'>Pay bills seamlessly and earn commissions by promoting essential products—all in one place.</h3>
                        <div className='pt-8 mx-auto lg:mx-0'>
                        <Link href="/signup">
                            <button className="text-white text-xl font-small py-4 px-8 rounded-full transition duration-150 ease-in-out bg-electricblue hover:text-white hover:bg-blue " >
                                Sign Up
                            </button>
                            </Link>
                        </div>
                    </div>

                    <div className='col-span-4 flex justify-center xl:-mb-32 xl:-mr-32 pt-10 lg:pt-0'>
                        <Image src="/assets/banner/bann.svg" alt="nothing" width={1000} height={805} />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Banner;
