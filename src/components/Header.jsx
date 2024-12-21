
import logo from '../assets/Travling.png'

const Header = () => {
    return (
        <section className={"bg-gradient-to-b from-[#E2F6FC] to-[#FFFFFF]"}>

                <nav className={" flex justify-between items-center w-screen h-[112px] px-8"}>
                    <div className={"flex items-center gap-4"}>
                        <img src={logo} alt={"logo"}/>
                    </div>
                        <ul className={"flex justify-between items-center"}>

                            <li className={"flex items-center gap-8"}>
                                <a href="/" className={" font-poppins text-2text-[#333333]"}>Home</a>
                                <a href="/" className={"font-poppins text-2 text-[#333333]"}>Contact</a>
                                <a href="/" className={"font-poppins text-2text-[#333333]"}>About us</a>
                            </li>
                        </ul>
                    <div className={"flex items-center gap-4"}>
                        <button className={"w-24 h-12 font-poppins px-4 rounded-xl border-2 border-[#42A7C3] hover:scale-105 duration-200 "}>Login</button>
                        <button className={"w-24 h-12 bg-[#FA8443] px-4 font-poppins rounded-xl border-2 hover:scale-105 duration-200  "}>Sign up</button>
                    </div>

                </nav>

        </section>

    )
}
export default Header
