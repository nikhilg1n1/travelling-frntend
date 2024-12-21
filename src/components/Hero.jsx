import React from 'react'
import heroimg from "../assets/heroimage.png"
import Googleplay from "./Googleplay.jsx";
import playstore from '../assets/playstoresvg.svg'
import applelogo from '../assets/applesvg.svg'
import {logodata} from '../Constants/index.js'


const Hero = () => {

    return (
        <section className={"h-screen "}>
            <div className={"mx-[80px] my-[21px] h-[595px] flex justify-between items-center  "}>
               <div className={"flex flex-col"}>
                    <h1 className={"font-poppins font-extrabold text-[#333333] text-6xl leading-[124.5%] "}>
                        Start your journey
                        by one click,
                        explore beautiful world!
                    </h1>
                    <p className={"font-poppins  text-[#333333] mt-2 leading-normal"}>
                        Plan and book your perfect trip with expert advice, travel tips, destination <br/> information and inspiration from us!
                    </p>
                   <div className={"flex gap-4 pt-7"}>
                       {
                            logodata.map((item)=>(
                                <Googleplay key={item} logo={item.logo} text1={item.text1} text2={item.text2}/>
                            ))
                       }
                   </div>

               </div>
                <img src={heroimg} alt={"home"}/>

            </div>
        </section>
    )
}
export default Hero
