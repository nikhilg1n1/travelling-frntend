import React from 'react'
import Googleplay from "./Googleplay.jsx";
import {logodata} from '../Constants/index.js'
import {logo} from '../assets/index.js'
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";


const Footer = () => {
    return (
        <section>
            <div className={"bg-[#42A7C3] flex justify-center pt-10 items-start w-screen "}>
                <div
                    className={" mt-8  flex justify-between w-full h-40  items-center mx-28 bg-white/20 rounded-xl border-2 border-gray-50 backdrop-blur-lg shadow-lg"}>
                    <div className={"flex flex-col gap-4 px-16"}>
                        <p className={"font-poppins font-light text-white "}>Prepare yourself to be a part of
                            exploration of</p>
                        <h1 className={"font-bold font-poppins text-4xl text-white"}>The Beauty of Indonesia</h1>
                    </div>

                    <div className={"flex flex-col gap-4 px-16"}>
                        <button
                            className={"w-40 h-12 font-poppins px-4 text-white rounded-xl border-2 border-white hover:scale-105 duration-200 "}>Login
                        </button>
                        <button
                            className={"w-40 h-12 bg-[#FA8443] text-white px-4 font-poppins rounded-xl  outline-none hover:scale-105 duration-200  "}>Sign
                            up
                        </button>
                    </div>

                </div>

            </div>
            <div className={"bg-[#42A7C3] flex justify-center pt-10  items-start w-screen h-[]"}>
                <div className={" mt-8  flex justify-between w-full h-40  items-center mx-28 "}>
                    <div className={"flex flex-col gap-4 "}>
                        <h1 className={"text-white font-bold font-poppins text-xl"}>Traveling</h1>
                        {/*<img src={logo} alt={"logo"} />*/}
                        <div className={"flex justify-center items-center"}>
                            <ul className={"flex gap-8"}>
                                <li className={"text-white font-poppins"}>Product</li>
                                <li className={"text-white font-poppins"}>Contact us</li>
                                <li className={"text-white font-poppins"}>Privacy policy</li>
                                <li className={"text-white font-poppins"}>About us</li>
                            </ul>
                        </div>
                    </div>

                    <div className={"flex flex-col"}>
                        <h1 className={"text-white font-poppins text-sm"}>Get this app on</h1>
                       <div className={"flex gap-4 pt-4"}>
                           {
                               logodata.map((item)=>(
                                   <Googleplay key={item} logo={item.logo} text1={item.text1} text2={item.text2} />
                               ))
                           }
                       </div>
                    </div>
                </div>
            </div>
            <div className={"bg-[#42A7C3] flex justify-center pb-10 items-start w-screen"}>
                <div className={" flex justify-between w-full  items-center mx-28 "}>
                    <div className={"flex flex-col gap-4 "}>
                        <p className={"text-white  font-poppins text-xl"}> @Copy right Reserved</p>
                    </div>

                    <div className={"flex justify-between items-center gap-4"}>
                        <SlSocialLinkedin size={24} className={"text-white"}/>
                        <SlSocialInstagram size={24} className={"text-white"}/>
                        <SlSocialTwitter size={24} className={"text-white"}/>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer
