import { Helmet } from "react-helmet"
import millipiyango from "~/assets/images/millipiyango.svg"
import millipiyango1 from "~/assets/images/millipiyango1.svg"
import NextDraw from "./components/next-draw"

function MilliPiyango() {

    return (
        <>
            <Helmet>
                <title>Loto Piyango Online | Milli Piyango Şanslı Numaralar, Milli Piyango Sonuçları </title>
                <meta name="keywords" content="loto, piyango, online oyunlar, şans oyunları, sayısal loto, Süper Loto, On Numara, şans topu, milli piyango" />
                <meta name="description" content="Milli Piyango Şanslı Numaralar, Milli Piyango Sonuçları"/>
            </Helmet>
            <div id="info-cards" className="flex flex-row justify-center content-center py-[30px] h-[230px] font-[700] text-[#24AAE3] text-center sm:text-[12px] md:text-[14px] lg:text-[16px] tracking-[2px]">
                <div id="card-1" className="flex flex-col justify-center items-center bg-[#f8f8f8] shadow-lg mx-5 lg:w-[300px] h-full">
                    <img src={millipiyango} alt="milli-piyango" title="milli-piyango" />
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
            <div id="container" className="flex flex-row items-center bg-[#24AAE3] mx-[20px] px-[24px] rounded-t w-auto h-[5rem]">
                <div id="inner-container" className="flex flex-row justify-between items-center content-center w-full">
                    <div id="logo-container" className="justify-start w-fit">
                        <img src={millipiyango1} alt="milli-piyango" title="milli-piyango"/>
                    </div>
                    <div id="buttons-container" className="flex justify-end items-center content-center w-fit text-[#24AAE3]">
                        <button className="relative before:absolute flex justify-center items-center bg-white before:bg-transparent shadow-none hover:shadow-xl hover:shadow-blue-700 mx-1 px-4 py-2 rounded-full before:rounded-full hover:rounded-full w-auto before:w-0 hover:before:w-56 h-auto before:h-0 hover:before:h-56 font-sans transition-all duration-300 before:duration-500 overflow-hidden before:ease-out">Süperstar Nedir</button>
                        <button className="relative before:absolute flex justify-center items-center bg-white before:bg-transparent shadow-none hover:shadow-xl hover:shadow-blue-700 mx-1 px-4 py-2 rounded-full before:rounded-full hover:rounded-full w-auto before:w-0 hover:before:w-56 h-auto before:h-0 hover:before:h-56 font-sans transition-all duration-300 before:duration-500 overflow-hidden before:ease-out">Süperstar Nedir</button>
                        <button className="relative before:absolute flex justify-center items-center bg-white before:bg-transparent shadow-none hover:shadow-xl hover:shadow-blue-700 mx-1 px-4 py-2 rounded-full before:rounded-full hover:rounded-full w-auto before:w-0 hover:before:w-56 h-auto before:h-0 hover:before:h-56 font-sans transition-all duration-300 before:duration-500 overflow-hidden before:ease-out">Süperstar Nedir</button>
                    </div>
                </div>
            </div>
            <div>
                <h1>MİLLİ PİYANGO HER AYIN 9. VE 29. GÜNLERİ SAAT 17:30'DA ÇEKİLİR</h1>
                <br />
                <p>
                    Milli piyango, yıllardır insanların hayallerini süsleyen büyük ödüllerle dolu bir şans oyunudur. Büyük ikramiyeyi kazanmak mümkün mü? Kesinlikle evet! İşte milli piyango biletinizi daha şanslı hale getirecek öneriler.
                    <br />
                    Milli piyango tamamen rastlantıya dayalı bir oyun olsa da, oyundan daha fazla keyif almak için bazı püf noktalarına dikkat edebilirsiniz:
                    <br />
                    <br />

                    Toplu Bilet Alımı: Aile üyelerinizle veya arkadaşlarınızla bir grup oluşturup birden fazla bilet alarak kazanma ihtimalinizi artırabilirsiniz.
                    Şanslı Bilet Numaranızı Belirleyin: Anlamlı tarihler veya sizin için özel olan numaraları seçerek kendinizi daha iyi hissedebilirsiniz.
                    Biletlerinizi Saklayın: Biletlerinizi güvenli bir şekilde saklamayı ihmal etmeyin ve çekiliş sonuçlarını dikkatlice kontrol edin.
                    Bütçe Planı: Aşırıya kaçmadan, eğlencenizi ön planda tutacak şekilde bütçenizi ayarlayın.
                    Sonuç:
                    Milli piyango, şans oyunlarının en köklü ve heyecanlı olanlarından biridir. Şansınızı artırmak için önerilerimizi deneyebilir ve bu eğlenceli oyunun tadını çıkarabilirsiniz. Unutmayın, en önemli şey kazanmaktan çok eğlenmektir.
                </p>
            </div>
        </>
    )
}

export default MilliPiyango