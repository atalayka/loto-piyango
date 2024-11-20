import { Helmet } from "react-helmet";
import sanstopu from "~/assets/images/sanstopu.svg";
import sanstopu1 from "~/assets/images/sanstopu1.svg";
import NextDraw from "./components/next-draw";

function SansTopu() {
    return (
        <>
            <Helmet>
                <title>Loto Piyango Online | Şans Topu Şanslı Numaralar, Şans Topu Sonuçları</title>
                <meta name="keywords" content="loto, piyango, online oyunlar, şans oyunları, sayısal loto, süper loto, on numara, şans topu, milli piyango" />
                <meta name="description" content="Şans Topu Şanslı Numaralar, Şans Topu Sonuçları" />
            </Helmet>
            <div id="info-cards" className="flex flex-row justify-center content-center py-[30px] h-[230px] font-[700] text-[#E10098] text-center sm:text-[12px] md:text-[14px] lg:text-[16px] tracking-[2px]">
                <div id="card-1" className="flex flex-col justify-center items-center bg-[#f8f8f8] shadow-lg mx-5 lg:w-[300px] h-full">
                    <img src={sanstopu} alt="şans-topu" title="şans-topu" />
                    <h1>DEVREDEN BÜYÜK İKRAMİYE</h1>
                </div>
                <div id="card-2" className="bg-[#f8f8f8] shadow-lg lg:w-[300px] h-full">
                    <h1>SONRAKİ ÇEKİLİŞE KALAN</h1>
                    <NextDraw />

                </div>
                <div id="card-3" className="bg-[#f8f8f8] shadow-lg mx-5 lg:w-[300px] h-full">
                    <h1>SON ÇEKİLİŞ SONUCU</h1>
                </div>
            </div>
            <div id="container" className="flex flex-row items-center bg-[#E10098] mx-[20px] px-[24px] rounded-t w-auto h-[5rem]">
                <div id="inner-container" className="flex flex-row justify-between items-center content-center w-full">
                    <div id="logo-container" className="justify-start w-fit">
                        <img src={sanstopu1} alt="şans-topu" title="şans-topu" />
                    </div>
                    <div id="buttons-container" className="flex justify-end items-center content-center w-fit text-[#E10098]">
                        <button className="relative before:absolute flex justify-center items-center bg-white before:bg-transparent shadow-none hover:shadow-xl hover:shadow-pink-900 mx-1 px-4 py-2 rounded-full before:rounded-full hover:rounded-full w-auto before:w-0 hover:before:w-56 h-auto before:h-0 hover:before:h-56 font-sans transition-all duration-300 before:duration-500 overflow-hidden before:ease-out">Süperstar Nedir</button>
                        <button className="relative before:absolute flex justify-center items-center bg-white before:bg-transparent shadow-none hover:shadow-xl hover:shadow-pink-900 mx-1 px-4 py-2 rounded-full before:rounded-full hover:rounded-full w-auto before:w-0 hover:before:w-56 h-auto before:h-0 hover:before:h-56 font-sans transition-all duration-300 before:duration-500 overflow-hidden before:ease-out">Süperstar Nedir</button>
                        <button className="relative before:absolute flex justify-center items-center bg-white before:bg-transparent shadow-none hover:shadow-xl hover:shadow-pink-900 mx-1 px-4 py-2 rounded-full before:rounded-full hover:rounded-full w-auto before:w-0 hover:before:w-56 h-auto before:h-0 hover:before:h-56 font-sans transition-all duration-300 before:duration-500 overflow-hidden before:ease-out">Süperstar Nedir</button>
                    </div>
                </div>
            </div>
            <div>
                <h1>ŞANS TOPU HER HAFTA ÇARŞAMBA VE PAZAR GÜNLERİ SAAT 20:00'DA ÇEKİLİR</h1>
                <br />
                <p>
                    Şans Topu, hem sayısal hem de joker sayı sistemiyle heyecanı ikiye katlayan bir şans oyunudur. Peki, büyük ödülü kazanmak mümkün mü? Kesinlikle evet! Bu yazımızda, şans topu oyununda işinize yarayacak ipuçlarını bulabilirsiniz.
                    <br />
                    Tamamen şansa dayalı bu oyunda, stratejilerle şansınızı biraz daha artırabilirsiniz. İşte dikkat etmeniz gereken noktalar:
                    <br />
                    <br />

                    Sistem Oyunu: Daha fazla kolon oynayarak hem ana sayılarınız hem de joker sayınız için farklı kombinasyonlar oluşturabilirsiniz.
                    Analiz Yapın: Önceki çekiliş sonuçlarını inceleyerek hangi sayıların öne çıktığını analiz edebilirsiniz. Ancak loto sonuçlarının rastgele olduğunu unutmayın.
                    Şanslı Sayılar: Özel tarihler, anlamlı sayılar gibi size uğur getireceğine inandığınız sayıları tercih edin.
                    Gruplaşma: Aile üyelerinizle veya arkadaşlarınızla bir grup kurarak daha fazla kolon doldurun ve maliyeti paylaşın.
                    Bütçe Yönetimi: Oyunu eğlence için oynayın ve bütçenizi aşmamaya özen gösterin.
                    Sonuç:
                    Şans topu, heyecanı ve eğlenceyi bir araya getiriyor. İpuçlarımızla oyunu daha keyifli hale getirebilir ve kazanma şansınızı artırabilirsiniz. Ama unutmayın, en önemli şey oyunun keyfini çıkarmaktır.
                </p>
            </div>
        </>
    )
}

export default SansTopu