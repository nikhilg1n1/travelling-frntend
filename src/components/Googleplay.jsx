import React from 'react'

const Googleplay = ({logo, text1,text2}) => {


    return (
        <div>
            <div className={"bg-black w-40 h-12  rounded-md border-gray-600 border-2 flex justify-between" }>

                  <img src={logo} alt="logo" width={30} height={30} className={"pl-2"}/>
                <div className={"pr-5 mt-1"}>
                    <p className={"text-[8px] font-poppins text-white"}>{text1}</p>
                    <h1 className={"font-poppins text-white" +
                        ""}>{text2}</h1>
                </div>
            </div>
        </div>
    )
}
export default Googleplay
