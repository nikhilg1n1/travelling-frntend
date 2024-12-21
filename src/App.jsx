import React from 'react'
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Googleplay from "./components/Googleplay.jsx";
import PopularDestination from "./components/PopularDestination.jsx";
import PlanYourTrip from "./components/PlanYourTrip.jsx";
import Footer from "./components/Footer.jsx";
import ChooseUs from "./components/ChooseUs.jsx";

const App = () => {
    return (
        <div>
            <Header />
            <Hero/>
            <PopularDestination/>
            <ChooseUs/>
            <PlanYourTrip/>
            <Footer/>

        </div>
    )
}
export default App
