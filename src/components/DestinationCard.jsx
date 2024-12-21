import React from 'react'

const DestinationCard = ({location,imgUrl,locationAddress,Destination,Days,price}) => {
    return (
        <div className={"h-[332px] w-[296px] bg-[#F0F0F073] rounded-xl flex flex-col justify-center shadow-md hover:bg-[#F2F5F6]"}>
            <img src={imgUrl} alt={"card"}  height={180} className={"object-cover px-4 pt-4"} />
            <div className={"pl-4"}>
                <div className={"flex gap-2 mt-1"}>

                    <img src={location} alt={"location"} width={10} height={8.5}/>
                    <p className={"font-poppins leading-2 text-[#8F8F8F]"}>{locationAddress}</p>
                </div>
                <h1 className={"font-poppins text-xl  font-bold mt-1 text-[#333]"}>{Destination }</h1>
                <p className={"font-poppins leading-2 text-[#8F8F8F]"}>{Days}</p>
                <h1 className={"font-poppins text-xl pb-4 mt-1 font-bold text-[#347F90]"}>{price}</h1>

            </div>

        </div>
    )
}
export default DestinationCard
