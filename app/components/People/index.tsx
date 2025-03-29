import Image from 'next/image';
import Link from 'next/link';

const People = () => {

    return (
        <div id="product ">
            <div className="mx-auto max-w-7xl px-6 ">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1 pt-10 lg:pt-32 lg:mt-20'>
                <div className='col-span-6 flex flex-col justify-evenly lg:pl-24 mt-10 lg:mt-0'>
                        <h1 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>Trusted by 100k+ Users for Seamless Bill Payments!</h1>
                        <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-5 lg:pt-0'>Join thousands of happy customers who enjoy fast, secure, and hassle-free payments every day. 
                        </h3>
                        <br/>
                    </div>
                    <div className='col-span-6 flex justify-center '>
                        <Image src="/assets/people/testi.jpg" alt="people" width={1000} height={805} className="rounded-lg" />
                    </div>

                   

                </div>
            </div>
        </div>
    )
}

export default People;
