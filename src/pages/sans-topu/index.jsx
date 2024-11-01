import { Helmet } from "react-helmet";
import sanstopu from "~/assets/images/sanstopu.svg";
import sanstopu1 from "~/assets/images/sanstopu1.svg";

function SansTopu() {
    return (
        <>
            <Helmet>
                <title>Milli Loto Piyango Online | Şans Topu nedir, nasıl oynanır, kuralları nedir, şans topu sonuçlar, şans topu sayılar, şans topu kazananlar</title>
                <meta name="keywords" content="loto, piyango, online oyunlar, şans oyunları, sayısal loto, süper loto, on numara, şans topu, milli piyango" />
                <meta name="description" content="Milli Piyango heyecanına dahil ol, Süper Loto, Çılgın Sayısal Loto, Şans Topu, On Numara, Kazı Kazan ve Loto Piyango ile kazanmaya devam et, haftanın talihlisi ol." />
            </Helmet>
            <div id="info-cards" className="flex flex-row justify-center content-center py-[30px] h-[230px] font-[700] text-[#E10098] text-center sm:text-[12px] md:text-[14px] lg:text-[16px] tracking-[2px]">
                <div id="card-1" className="flex flex-col justify-center items-center bg-[#f8f8f8] shadow-lg mx-5 lg:w-[300px] h-full">
                    <img src={sanstopu} alt="sanstopu" />
                    <h1>DEVREDEN BÜYÜK İKRAMİYE</h1>
                </div>
                <div id="card-2" className="bg-[#f8f8f8] shadow-lg lg:w-[300px] h-full">
                    <h1>SONRAKİ ÇEKİLİŞE KALAN</h1>

                </div>
                <div id="card-3" className="bg-[#f8f8f8] shadow-lg mx-5 lg:w-[300px] h-full">
                    <h1>SON ÇEKİLİŞ SONUCU</h1>
                </div>
            </div>
            <div id="container" className="flex flex-row items-center bg-[#E10098] mx-[20px] px-[24px] rounded-t w-auto h-[5rem]">
                <div id="inner-container" className="flex flex-row justify-between items-center content-center w-full">
                    <div id="logo-container" className="justify-start w-fit">
                        <img src={sanstopu1} alt="sanstopu" />
                    </div>
                    <div id="buttons-container" className="flex justify-end items-center content-center w-fit text-[#E10098]">
                        <button className="relative before:absolute flex justify-center items-center bg-white before:bg-transparent shadow-none hover:shadow-xl hover:shadow-pink-900 mx-1 px-4 py-2 rounded-full before:rounded-full hover:rounded-full w-auto before:w-0 hover:before:w-56 h-auto before:h-0 hover:before:h-56 font-sans transition-all duration-300 before:duration-500 overflow-hidden before:ease-out">Süperstar Nedir</button>
                        <button className="relative before:absolute flex justify-center items-center bg-white before:bg-transparent shadow-none hover:shadow-xl hover:shadow-pink-900 mx-1 px-4 py-2 rounded-full before:rounded-full hover:rounded-full w-auto before:w-0 hover:before:w-56 h-auto before:h-0 hover:before:h-56 font-sans transition-all duration-300 before:duration-500 overflow-hidden before:ease-out">Süperstar Nedir</button>
                        <button className="relative before:absolute flex justify-center items-center bg-white before:bg-transparent shadow-none hover:shadow-xl hover:shadow-pink-900 mx-1 px-4 py-2 rounded-full before:rounded-full hover:rounded-full w-auto before:w-0 hover:before:w-56 h-auto before:h-0 hover:before:h-56 font-sans transition-all duration-300 before:duration-500 overflow-hidden before:ease-out">Süperstar Nedir</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SansTopu