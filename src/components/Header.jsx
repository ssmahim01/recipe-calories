const Header = () => {
    return (
        <div className="flex flex-col lg:flex-row md:justify-between items-center my-8 space-y-4">
            <h1 className="text-gray-800 font-bold text-3xl">Chef&apos;s Table</h1>

            {/* Menu Start */}
            <ul className="flex gap-6 text-gray-600 font-semibold text-base">
                <li><a href="">Home</a></li>
                <li><a href="">Recipes</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Search</a></li>
            </ul>

            <div className="flex flex-row justify-between items-center gap-4">
                {/* Search Field */}
                <div className="flex justify-between items-center relative">
                    <input type="text" 
                    className="py-3 px-10 bg-gray-100 rounded-full placeholder-gray-800 outline-none" 
                    placeholder="Search"/>

                    <div className="absolute inset-y-0 -left-1 pl-4 flex items-center text-xl">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>

                {/* User */}
                <div className="bg-green-400 rounded-full flex justify-center items-center w-12 h-12 cursor-pointer">
                    <i className="fa-regular fa-user-circle text-3xl"></i>
                </div>
            </div>
        </div>
    );
};

export default Header;