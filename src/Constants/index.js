import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import location from "../assets/location.svg"
import plane from "../assets/plane.svg"
import bag from "../assets/bags.svg"
import hotel from "../assets/hotel.svg"
import playstore from "../assets/playstoresvg.svg";
import applelogo from "../assets/applesvg.svg";

export  const  Destinations = [
    {
        id:1,
        imgUrl: img1,
        lacation:location,
        locationAddress:"Manggarai Barat",
        Destination: "Flores Road Trip 3D2N",
        Days:"3 Days",
        price:" RP 6.705.000/orang"

    },{
        id:2,
        imgUrl: img2,
        lacation:location,
        locationAddress:"Bogor",
        Destination: "Forrester Glamping Co Bogor",
        Days:"1 Days",
        price:"Rp 1.205.000 /malam"

    },{
        id:3,
        imgUrl: img3,
        lacation:location,
        locationAddress:"Jakarta",
        Destination: "Paket Tiket Pesawat\n" +
            "Jakarta Bali",
        Days:"5 Days",
        price:"Rp 605.000 /person"

    },{
        id:4,
        imgUrl: img4,
        lacation:location,
        locationAddress:"Kota Semarang",
        Destination: "Desa Wisata Kandri",
        Days:"14 Days",
        price:"Rp 1.400.000 /person"

    },
]
export  const information=[
    {
        id:1,
        icon: plane,
        heading:"Flight Ticket",
        desc:"Vitae donec pellentesque a aliquam et ultricies auctor. "

    },{
        id:2,
        icon: bag,
        heading:"Accommodation",
        desc:"Vitae donec pellentesque a aliquam et ultricies auctor.  "

    },{
        id:3,
        icon: hotel,
        heading:"Packaged Tour",
        desc:"Vitae donec pellentesque a aliquam et ultricies auctor. "

    },
]
export  const logodata=[
    {
        logo:playstore,
        text1:"Get in on",
        text2:"Google Play"
    },
    {
        logo:applelogo,
        text1:"Download from",
        text2:"apple store"
    }
]
