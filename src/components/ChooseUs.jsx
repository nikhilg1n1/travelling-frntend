import React from 'react'
import {information} from '../Constants/index.js'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import heroimg from "../assets/heroimage2.png";
import ChooseOptions from "./ChooseOptions.jsx";

const ChooseUs = () => {
    return (
        <section className={"h-screen "}>
            <div className={"mx-[80px] my-[21px] h-[595px] flex justify-between gap-8 items-center "}>
                <img src={heroimg} alt={"home"} width={626} height={612}/>

                <div className={"flex flex-col"}>
                    <h1 className={"font-poppins font-extrabold text-[#333333] text-6xl leading-[124.5%] "}>
                        Why Choose Us
                    </h1>
                    <p className={"font-poppins  text-[#333333] mt-2 leading-normal"}>
                        Enjoy different experiences in every place you visit and discover new <br/> and affordable adventures of course.
                    </p>
                    {
                        information.map((item, index) => (
                            <ChooseOptions key={index} icon={item.icon} heading={item.heading} desc={item.desc}/>
                        ))
                    }
                    <div className={"flex items-center mt-4 gap-2" }>
                        <h1 className={"text-xl font-poppins font-bold "}>Another Products</h1>
                        <MdOutlineKeyboardArrowRight size={26}/>
                    </div>
                </div>



            </div>
        </section>
    )
}
export default ChooseUs
