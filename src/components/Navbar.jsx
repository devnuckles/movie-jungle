const Navbar = () => {
    return (
        <div className="text-white flex justify-between  items-center  w-full p-4 z-[100] absolute">
            <h1 className="text-3xl text-red-600 font-semibold">
                Movie Jungle
            </h1>
            <div className=" text-right">
                <button className="border border-red-600 hover:bg-red-600 ease-in-out duration-300 px-6 py-2 rounded cursor-pointer">
                    Sign In
                </button>
                <button className=" bg-red-600 border border-transparent hover:bg-transparent hover:border-red-600 ease-in-out duration-300 px-6 py-2 ml-2 rounded cursor-pointer">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Navbar;
