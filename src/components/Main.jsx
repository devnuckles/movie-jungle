import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../api/requests";

const Main = () => {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(requests.requestPopular);

                setMovies(response.data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchMovies();
    }, []);

    console.log(movie, ">>>>>>>>>>>>>>>>");

    return (
        <div className="w-full h-[550px] text-white">
            <div className="w-full h-full ">
                <div className="absolute top-0 left-0 w-full h-[550px] bg-gradient-to-r from-black"></div>
                <img
                    className="object-cover w-full h-full"
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title}
                />
                <div className="absolute w-full text-left  top-[20%] p-5">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        {movie?.title}
                    </h2>
                    <div className="my-4">
                        <button className="border bg-gray-300 text-black border-gray-300 px-5 py-2">
                            Play
                        </button>
                        <button className="border  text-white border-gray-300 px-5 py-2 ml-4">
                            Watch Later
                        </button>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Released: {movie?.release_date}
                    </p>
                    <p className="line-clamp-2 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
                        {movie?.overview}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
