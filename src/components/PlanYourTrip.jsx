import React from 'react'
import plantrip from '../assets/vacation.png'


const PlanYourTrip = () => {
    return (
        <section className={"h-screen flex justify-center items-center "}>
            <img src={plantrip} alt={"vacation"} width={1441} height={1162} className={"object-cover"}/>
        </section>
    )
}
export default PlanYourTrip
