import { Link } from "react-router-dom";
import Navbar from "./Navbar";


const Header = () => {
    return (
        <div className="max-w-7xl mx-auto p-2">
            <div className="sticky top-0 flex-wrap z-[20] mx-auto flex justify-between items-center py-5 px-4 shadow-lg shadow-indigo-500/50">
                <Link to="/"><h1 className="text-3xl font-semibold">Zen Tasker</h1></Link>
                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default Header;