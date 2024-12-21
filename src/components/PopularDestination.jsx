import React from 'react'
import DestinationCard from "./DestinationCard.jsx";
import {Destinations} from "../Constants/index.js";

const PopularDestination = () => {
    return (
        <section>
            <div className={"mx-[80px] my-[21px] h-[595px] items-center"}>
                <h1 className={"font-poppins font-bold text-4xl  leading-normal"}>
                    Popular Destinations
                </h1>
                <p className={"font-poppins text-[#333]"}>Vacations to make your experience enjoyable in Indonesia!</p>
                <div className={"flex gap-6 mt-10"}>
                    {
                        Destinations.map((destination,index) => (
                            <DestinationCard key={index}
                                             location={destination.lacation}
                                             locationAddress={destination.locationAddress}
                                             Destination={destination.Destination}
                                             Days={destination.Days}
                                             price={destination.price}
                                             imgUrl={destination.imgUrl}  />
                        ))
                    }
                </div>
            </div>

        </section>
    )
}
export default PopularDestination
