import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";

function Home() {
    const location = useLocation();

    // Check if location.state and location.state.id are defined
    const userName = location.state && location.state.id ? location.state.id : "Guest";

    return (
        <>
            <div className="navbar">
                <Navbar />
                <h1>Welcome {userName}</h1>
            </div>
            <div>
                  //patients
            </div>
            <div>
                     //schedule
            </div>




        </>





    );
}

export default Home;
