import React from 'react'

const ChooseOptions = ({icon,heading,desc}) => {
    return (
        <div className={"bg-[#F2F5F6] w-[586px] h-[112px] mt-6 rounded-xl flex gap-4 shadow-md hover:scale-105 duration-300 hover:shadow-xl"}>
            <div className={"pl-4 flex gap-4"}>
                <img src={icon} alt={"plane"} width={40} height={40}/>
                <div className={"flex flex-col justify-center pt-4"}>
                    <h1 className={"font-poppins font-bold text-xl text-[#333]"}>{heading}</h1>
                    <p className={"font-poppins text-4 text-[#333]"}>{desc}</p>
                </div>
            </div>

        </div>
    )
}
export default ChooseOptions
