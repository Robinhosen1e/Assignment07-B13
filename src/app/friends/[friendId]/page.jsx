
import friends from "@/data/friends.json";
import { Archive, BellRing, Trash2 } from "lucide-react";
import Image from "next/image";
import SendDataTimeline from "./SendDataTimeline";
// import Data from "@/data/data.json";
// import { useRouter } from "next/navigation";
// import { use } from "react";


    const getStatusClass = (status) => {
  if (status === 'on-track') return 'text-white bg-[#244D3F]';
  if (status === 'overdue') return 'text-white bg-[#EF4444]';
  if (status === 'almost due') return 'text-white bg-[#EFAD44]';
};




const FriendPage = async ({ params , friendID }) => {



//       const router = useRouter();

//   const handleClick = (type) => {
//     router.push(`/timeline?friendId=${friendID}&type=${type}`);
//   };

  const { friendId } = await params; // 

  const friend = friends.find(
    (f) => f.id.toString() === friendId
  );

  console.log("friendId:", friendId);
  console.log("FOUND:", friend);

  if (!friend) return <div>Friend not found</div>;

  return (
    <div className="w-7/12 mx-auto mt-20 mb-20">
      <div className="mr-14 grid md:grid-cols-2 p-6">
        
        {/* left side */}
        <div className="-ml-32 w-[100%]">
            <div className=" p-4 rounded-lg shadow-lg border-2 border-gray-100 mb-4 text-center justify-items-center">
                 <Image 
                     src={friend.picture}
                     alt={friend.name} 
                     width={100} 
                     height={100}  
                    className='rounded-full mb-3' />

                 <h3 className='text-xl text-[#1F2937] font-semibold mb-1.5'>{friend.name}</h3>

                  <div className='items-center mb-3'>
                        <span className={`inline-block px-3 py-1 text-sm font-semibold text-white rounded-full ${getStatusClass(friend.status)}`}>
                         {friend.status}
                    </span>
                    </div>
                    <div className='items-center mb-2.5'>
                        {friend.tags.map((tag, index) => (
                        <span key={`${tag}-${index}`} className='inline-block  bg-[#CBFADB] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                            {tag}
                        </span>
                    ))}
                    </div>
                    <p className='text-gray-500 text-[14px] '>{friend.bio}</p>
                    <p className='text-gray-500 text-[14px] mt-2'><b className="text-black ">Preferred :</b> {friend.email}</p>
            </div>
            <div className="grid grid-rows-3 gap-2">
                <div className="w-full">
                    <button className="btn w-full p-4 rounded-lg inset-shadow-xs border-2 border-gray-100 "><BellRing size={15} />Snooze 2 weeks</button> 
                </div>
                <div className="w-full">
                    <button className=" btn w-full p-4 rounded-lg inset-shadow-xs border-2 border-gray-100"><Archive size={15} />Archive</button>
                </div>
                <div className="w-full">
                    <button className="  text-red-500 btn w-full p-4 rounded-lg inset-shadow-xs border-2 border-gray-100"><Trash2 size={15} />Delete</button>
                </div>
            </div>
        </div>  
          
          {/* right side */}
        <div className="w-[180%] -ml-22 -mt-6">
            <div>
                 <div className=' grid grid-cols-3 gap-4 mt-6 text-nowrap'>

                <div className='p-8 bg-white shadow-md border-2 text-center border-gray-50 rounded-2xl'>
                    <h1 className='text-3xl font-semibold text-[#244D3F]'>{friend.days_since_contact}</h1>
                    <h3 className=' font-medium text-[#64748B]'>Days Since Contact</h3>
                </div>

                <div className='p-8 bg-white shadow-md border-2 text-center border-gray-50 rounded-2xl'>
                    <h1 className='text-3xl font-semibold text-[#244D3F]'>{friend.goal}</h1>
                    <h3 className=' font-medium text-[#64748B]'>Goal (Days)</h3>
                </div>

                <div className='p-8 bg-white shadow-md border-2 text-center border-gray-50 rounded-2xl'>
                    <h1 className='text-3xl font-semibold text-[#244D3F]'>{friend.next_due_date}</h1>
                    <h3 className=' font-medium text-[#64748B]'>Next Due</h3>
                </div>
            </div>

            </div>


            <div className="mt-4">
                <div className="p-8 rounded-lg shadow-lg border-2 border-gray-100 ">
                    <h1 className="text-xl text-[#244D3F] font-semibold mb-4">Relationship Goal</h1>
                    <p className="font-bold"><span className="font-medium text-gray-500">Connect every</span> {friend.goal} days</p>
                </div>
            </div>


            <div className="rounded-lg shadow-lg border-2 border-gray-100 mt-5 p-6">
                <h1 className="text-xl text-[#244D3F] font-semibold">Quick Check-In</h1>

                <div>


               <SendDataTimeline friendName={friend.name} />


            </div>
            </div>
        </div>

        </div>
    </div>
  )
};

export default FriendPage;