import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
    return (
        <div className=" h-full">
            <div>
                <Navbar />
            </div>
            <div>{children}</div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
