import requests from "../api/requests";
import Main from "../components/Main";
import Row from "../components/Row";

const HomePage = () => {
    return (
        <div className="text-center text-white">
            <Main />
            <Row
                rowId="1"
                title="Top Rated"
                fetchUrl={requests.requestTopRated}
            />

            <Row
                rowId="2"
                title="Now Playing"
                fetchUrl={requests.requestNowPlaying}
            />

            <Row rowId="3" title="Popular" fetchUrl={requests.requestPopular} />

            <Row
                rowId="4"
                title="Up Coming"
                fetchUrl={requests.requestUpcoming}
            />
        </div>
    );
};

export default HomePage;
