import { Plus } from 'lucide-react';
import React from 'react';

const Banner = () => {
    return (
        <div className=' w-9/12 xl:w-8/12 mx-auto'>
            <div className='text-center mt-20'>
                <h1 className='text-5xl font-bold text-[#1F2937] mb-4'>Friends to keep close in your life</h1>
                <p className='text-[#64748B] mb-8'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br className='hidden md:block'  /> relationships that matter most.</p>
                <button className='btn bg-[#244D3F]  text-white font-semibold mb-10'><Plus className="-mr-0.5" size={18} />Add a Friend</button>
            </div>
            <div className='grid grid-cols-2 xl:grid-cols-4 gap-8 mt-16'>

                <div className='p-8 bg-white shadow-md border-2 text-center border-gray-50 rounded-2xl'>
                    <h1 className='text-3xl font-semibold text-[#244D3F]'>10</h1>
                    <h3 className=' font-medium text-[#64748B]'>Total Friends</h3>
                </div>

                <div className='p-8 bg-white shadow-md border-2 text-center border-gray-50 rounded-2xl'>
                    <h1 className='text-3xl font-semibold text-[#244D3F]'>3</h1>
                    <h3 className=' font-medium text-[#64748B]'>On Track</h3>
                </div>

                <div className='p-8 bg-white shadow-md border-2 text-center border-gray-50 rounded-2xl'>
                    <h1 className='text-3xl font-semibold text-[#244D3F]'>6</h1>
                    <h3 className=' font-medium text-[#64748B]'>Need Attention</h3>
                </div>

                <div className='p-8 bg-white shadow-md border-2 text-center border-gray-50 rounded-2xl'>
                    <h1 className='text-3xl font-semibold text-[#244D3F]'>12</h1>
                    <h3 className='text-nowrap font-medium text-[#64748B]'>Interactions This Month</h3>
                </div>
            </div>

        </div>
    );
};

export default Banner;