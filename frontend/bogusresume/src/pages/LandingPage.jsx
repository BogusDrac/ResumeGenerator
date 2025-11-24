import { useNavigate } from "react-router-dom";
import { useState } from "react";


const LandingPage = () => {
    const navate = useNavigate();

    const [openAuthModal, setOpenAuthModal] = useState(false);
    const [currentPage, setCurrentPage] = useState("login");

    const handleCTA = () => {

    };
  return (
    <div className="w-full min-h-full bg-white">
        <div className="constainer mx-auto px-4 py-6">
        {/* Header */}
            <header className="flex justify-between items-center mb-16">
                <div className="text-xl font-bold">
                    Bogus Resume
                </div>
                <button
                    onClick={() => setOpenAuthModal(true)}
                    className="bg-purple-100 text-sm font-semibold text-black px-7 py-2.5 rounded-lg hover:bg-gray-800 hover:text-white transition-colors cursor-pointer"
                >
                    Login / Sign Up
                </button>
            </header>
        </div>
    </div>
  );
}

export default LandingPage;
