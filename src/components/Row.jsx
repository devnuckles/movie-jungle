import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchUrl, rowId }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await axios.get(fetchUrl);
            try {
                setMovies(response.data.results);
            } catch {
                console.log("error");
            }
        };
        fetchMovie();
    }, []);

    const slideLeft = () => {
        var slider = document.getElementById("slider" + rowId);

        slider.scrollLeft = slider.scrollLeft + 500;
    };

    const slideRight = () => {
        var slider = document.getElementById("slider" + rowId);

        slider.scrollLeft = slider.scrollLeft - 500;
    };

    return (
        <div className="text-left p-4">
            <h2 className="text-white font-bold md:text-xl my-2">{title}</h2>

            <div className="relative flex items-center">
                <MdChevronLeft
                    className="bg-white text-black size-12 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 left-0"
                    onClick={slideLeft}
                />

                <div
                    id={"slider" + rowId}
                    className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
                >
                    {movies.map((item, id) => (
                        <Movie item={item} id={id} />
                    ))}
                </div>

                <MdChevronRight
                    className="bg-white text-black size-12 rounded-full absolute opacity-50 right-0 hover:opacity-100 cursor-pointer z-10"
                    onClick={slideRight}
                />
            </div>
        </div>
    );
};

export default Row;
