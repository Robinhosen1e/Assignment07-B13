
import Link from "next/link";
const NotFound = () => {



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
            <div className="text-center max-w-md">

                <h1 className="text-9xl font-black text-[#1e4d3a] ">
                    404
                </h1>

                <h2 className="text-2xl font-semibold  mb-1">
                    Page not found
                </h2>

                <p className="text-sm text-gray-500 mb-6">
                    The page you are looking for doesn’t exist .
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
        
                    <Link href="/"  className="bg-[#1e4d3a] text-white px-5 py-2 rounded-lg hover:opacity-90 transition">Return Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;