const Movie = ({ item, id }) => {
    return (
        <div className="mx-2 w-[160] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative">
            <img
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.title}
            />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 text-white opacity-0 hover:opacity-100 ease-in-out duration-300">
                <p className="white-space-normal font-bold md:text-sm text-xs flex justify-center items-center h-full text-center">
                    {item?.title}
                </p>
            </div>
        </div>
    );
};

export default Movie;
