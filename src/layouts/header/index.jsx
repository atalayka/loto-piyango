import logo from "~/assets/images/logo.svg";
import coin from "~/assets/images/coin.svg";
import line from "~/assets/images/line.svg";
import tv from "~/assets/images/livetv.svg";
import cup from "~/assets/images/cup.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex flex-col justify-center bg-transparent w-full min-w-80 lg:h-[150px]">
            <div className="bg-white lg:pr-[10px] lg:pl-[10px]">
                <div id="container-1" className="bg-white w-full h-[90px]">
                    <div id="inner-container-1" className="flex items-center bg-white lg:pr-[35px] lg:pl-[35px] w-full h-full">
                        <div id="logo-container" className="bg-white lg:pr-[10px] lg:pl-[10px] lg:w-[425px] lg:h-[70px]">
                            <NavLink to={"/"}>
                                <button id="button-logo">
                                    <img src={logo} className="lg:w-[155px] h-[70px]" alt="milli-piyango" title="loto-piyango" />
                                </button>
                            </NavLink>
                        </div>
                        <div id="buttons-container" className="flex flex-grow justify-end items-center bg-white pl-[10px] lg:h-[42px] text-[#f8f8f8] lg:text-[14px]">
                            <button id="button-login" className="relative before:absolute flex justify-center items-center bg-[#0173b9] before:bg-transparent shadow-none hover:shadow-xl hover:shadow-blue-900 mr-[10px] px-[15px] rounded-[50px] before:rounded-full hover:rounded-full lg:w-[124px] before:w-0 hover:before:w-56 h-[42px] before:h-0 hover:before:h-56 font-bold font-sans transition-all duration-300 before:duration-500 overflow-hidden before:ease-out">ÜYE GİRİŞİ</button>
                            <button id="button-signup" className="relative before:absolute flex justify-center items-center bg-[#23AAE2] before:bg-transparent shadow-none hover:shadow-xl hover:shadow-blue-400 mr-[10px] px-[15px] rounded-[50px] before:rounded-full hover:rounded-full lg:w-[90px] before:w-0 hover:before:w-56 h-[42px] before:h-0 hover:before:h-56 font-bold font-sans transition-all duration-300 before:duration-500 overflow-hidden before:ease-out">ÜYE OL</button>
                            <button id="button-pay" className="relative before:absolute flex justify-center items-center before:bg-transparent bg-none shadow-none hover:shadow-xl hover:shadow-yellow-600 before:rounded-full hover:rounded-full before:w-0 hover:before:w-56 before:h-0 hover:before:h-56 transition-all duration-300 before:duration-500 overflow-hidden before:ease-out" >
                                <img src={coin} alt="loto-piyango-odeme" title="milli-piyango-odeme" className="sm:w-[45px] sm:h-[45px]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#0173B9] lg:pr-[10px] lg:pl-[10px]">
                <div id="container-2" className="flex items-center bg-[#0173B9] lg:pr-[10px] lg:pl-[10px] w-full h-[60px]">
                    <div id="inner-container-2" className="flex items-center bg-[#0173B9] lg:pl-[35px] w-fit h-[60px] text-[#f8f8f8] lg:text-[17px]">
                        <NavLink to="/sayisal-loto">
                            <button className="relative before:absolute flex justify-center items-center bg-transparent before:bg-transparent shadow-none hover:shadow-xl hover:shadow-blue-900 sm:px-[15px] before:rounded-full hover:rounded-full before:w-0 hover:before:w-56 before:h-0 hover:before:h-56 transition-all duration-300 before:duration-500 overflow-hidden before:ease-out" id="button-sayisal">
                                <span className="relative z-10">Sayısal Loto</span></button>
                        </NavLink>
                        <NavLink to={"/super-loto"}>
                            <button className="relative before:absolute flex justify-center items-center bg-transparent before:bg-transparent shadow-none hover:shadow-xl hover:shadow-blue-900 sm:px-[15px] before:rounded-full hover:rounded-full before:w-0 hover:before:w-56 before:h-0 hover:before:h-56 transition-all duration-300 before:duration-500 overflow-hidden before:ease-out" id="button-super">
                                <span className="relative z-10">Süper Loto</span></button>
                        </NavLink>
                        <NavLink to={"/sans-topu"}>
                            <button className="relative before:absolute flex justify-center items-center bg-transparent before:bg-transparent shadow-none hover:shadow-xl hover:shadow-blue-900 sm:px-[15px] before:rounded-full hover:rounded-full before:w-0 hover:before:w-56 before:h-0 hover:before:h-56 transition-all duration-300 before:duration-500 overflow-hidden before:ease-out" id="button-sans">
                                <span className="relative z-10">Şans Topu</span></button>
                        </NavLink>
                        <NavLink to={"/on-numara"}>
                            <button className="relative before:absolute flex justify-center items-center bg-transparent before:bg-transparent shadow-none hover:shadow-xl hover:shadow-blue-900 sm:px-[15px] before:rounded-full hover:rounded-full before:w-0 hover:before:w-56 before:h-0 hover:before:h-56 transition-all duration-300 before:duration-500 overflow-hidden before:ease-out" id="button-sans">
                                <span className="relative z-10">On Numara</span></button>
                        </NavLink>
                        <NavLink to={"/milli-piyango"}>
                            <button className="relative before:absolute flex justify-center items-center bg-transparent before:bg-transparent shadow-none hover:shadow-xl hover:shadow-blue-900 sm:px-[15px] before:rounded-full hover:rounded-full before:w-0 hover:before:w-56 before:h-0 hover:before:h-56 transition-all duration-300 before:duration-500 overflow-hidden before:ease-out" id="button-piyango">
                                <span className="relative z-10">Milli Piyango</span></button>
                        </NavLink>

                        <img src={line} className="md:block hidden rounded-[50px] w-[50px] h-[50px]" alt="milli-piyango-loto-line" title="loto-piyango-line" />


                        <NavLink to={"/sonuclar"}>
                            <button className="relative before:absolute flex justify-center items-center bg-transparent before:bg-transparent shadow-none hover:shadow-xl hover:shadow-blue-900 sm:px-[15px] before:rounded-full hover:rounded-full before:w-0 hover:before:w-56 before:h-0 hover:before:h-56 transition-all duration-300 before:duration-500 overflow-hidden before:ease-out" id="button-sonuclar">
                                <span className="relative z-10">Sonuçlar</span></button>
                        </NavLink>
                    </div>

                    <div id="inner-container-3" className="flex flex-grow justify-end items-center bg-[#0173B9] pr-[0px] w-fit h-[60px] text-[#f8f8f8] lg:text-[17px]">
                        <NavLink to={"/kazananlar"}>
                            <button id="button-winners" className="relative before:absolute flex justify-center items-center bg-transparent before:bg-transparent shadow-none hover:shadow-xl hover:shadow-blue-900 sm:px-[15px] before:rounded-full hover:rounded-full before:w-0 hover:before:w-56 before:h-0 hover:before:h-56 text-center transition-all duration-300 before:duration-500 overflow-hidden before:ease-out">
                                <img src={cup} alt="milli-piyango-kazananlar" title="loto-piyango-kazananlar" className="md:block hidden w-[35px] h-[35px]" />
                                <span className="mx-[5px]">Kazananlar</span>
                            </button>
                        </NavLink>

                        <img src={line} className="md:block hidden rounded-[50px] w-[50px] h-[50px]" alt="milli-piyango-loto-line" title="loto-piyango-line" />

                        <NavLink to={"/piyango-tv"}>
                            <button id="button-tv" className="relative before:absolute flex justify-center items-center bg-transparent before:bg-transparent shadow-none hover:shadow-xl hover:shadow-blue-900 sm:px-[15px] before:rounded-full hover:rounded-full before:w-0 hover:before:w-56 before:h-0 hover:before:h-56 text-center transition-all duration-300 before:duration-500 overflow-hidden before:ease-out">
                                <img src={tv} alt="milli-piyango-tv" title="loto-piyango-tv" className="md:block hidden w-[35px] h-[35px]" />
                                <span className="lg:mx-[5px]">Canlı</span>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </header >
    );
}