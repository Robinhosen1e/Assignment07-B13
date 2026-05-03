import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Friend = ({ friend }) => {
    const getStatusClass = (status) => {
  if (status === 'on-track') return 'text-white bg-[#244D3F]';
  if (status === 'overdue') return 'text-white bg-[#EF4444]';
  if (status === 'almost due') return 'text-white bg-[#EFAD44]';
};


    return (
        <div>
            <div  className='p-4  justify-items-center  bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition'>
                
                        <Image 
                        src={friend.picture}
                         alt={friend.name} 
                         width={100} 
                         height={100}  
                         className='rounded-full mb-3' />
               
                    <h3 className='text-xl text-[#1F2937] font-semibold mb-1.5'>{friend.name}</h3>
                    <p className='text-[#64748B] text-xs mb-2.5'>{friend.days_since_contact} ago</p>
                    <div className='items-center mb-2.5'>
                        {friend.tags.map((tag, index) => (
                        <span key={`${tag}-${index}`} className='inline-block  bg-[#CBFADB] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                            {tag}
                        </span>
                    ))}
                    </div>
                    <div className='items-center mb-3'>
                        <span className={`inline-block px-3 py-1 text-sm font-semibold text-white rounded-full ${getStatusClass(friend.status)}`}>
                         {friend.status}
                    </span>
                    </div>
 
                    <div className='w-full mt-6'>
                        <button className='block text-center w-full text-xs text-gray-500 border border-gray-200 rounded-lg py-1.5 hover:bg-gray-50 transition-colors'>
                            <Link href={`/friends/${friend.id}`} className=' flex items-center justify-center gap-2'>
                            View Details <MoveRight size={15} />
                        </Link>
                        </button>

                    </div>
                </div>
        </div>
    );
};

export default Friend;