const Banner = () => {
    return (
        <div className="bg-cover bg-center bg-no-repeat rounded-3xl md:w-full h-full md:h-[35.5rem] mb-10" style={{
            backgroundImage: 'url(https://i.ibb.co.com/3kYtv41/banner.png)'
        }}>
            <div className="lg:w-9/12 md:w-4/5 w-11/12 mx-auto flex flex-col justify-center items-center text-center h-full space-y-4 md:py-4 py-28">
            <h1 className="text-white lg:text-6xl md:text-4xl text-xl font-bold">
            Discover an exceptional cooking <br/> 
            class tailored for you!
            </h1>
            <p className="lg:text-lg md:text-base text-sm text-gray-300 font-medium">
                Whether you are a beginner or a seasoned chef, our expert-led sessions offer personalized guidance and inspiration.Join us for an enriching culinary experience that is sure to ignite your passion for food and cooking.
            </p>

            <div className="flex gap-4 text-xl font-semibold">
                <button className="btn bg-green-500 rounded-full border-none font-bold">Explore Now</button>
                
                <button className="btn btn-outline text-white hover:bg-green-400 rounded-full font-bold">our Feedback</button>
            </div>
        </div>
    </div>
    );
};

export default Banner;