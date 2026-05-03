import friends from '@/data/friends.json';
import Friend from '@/app/friends/page';




const Friends = () => {
    console.log(friends);
    return (
        <div className='w-9/12 mx-auto mt-20 '>
            <div>
                <h1 className='tex-[#1F2937] font-semibold text-2xl pt-14 mb-4 border-t-2 border-gray-200'>Your Friends</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
            {friends.map((friend) => <Friend key={friend.id} friend={friend} />)}
        </div>
        </div>
    );
};

export default Friends;