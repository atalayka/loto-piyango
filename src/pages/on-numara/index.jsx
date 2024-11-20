import { Helmet } from "react-helmet"
import onnumara from "~/assets/images/onnumara.svg"
import onnumara1 from "~/assets/images/onnumara1.svg"
import NextDraw from "./components/next-draw"
function OnNumara() {
    return (
        <>
            <Helmet>
                <title>Loto Piyango Online | On Numara Şanslı Numaralar, On Numara Sonuçları</title>
                <meta name="keywords" content="loto, piyango, online oyunlar, şans oyunları, sayısal loto, süper loto, on numara, şans topu, milli piyango" />
                <meta name="description" content="On Numara Şanslı Numaralar, On Numara Sonuçları" />
            </Helmet>            <div id="info-cards" className="flex flex-row justify-center content-center py-[30px] h-[230px] font-[700] text-[#a25eb5] text-center sm:text-[12px] md:text-[14px] lg:text-[16px] tracking-[2px]">
                <div id="card-1" className="flex flex-col justify-center items-center bg-[#f8f8f8] shadow-lg mx-5 lg:w-[300px] h-full">
                    <img src={onnumara} alt="on-numara" title="on-numara" />
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
            <div id="container" className="flex flex-row items-center bg-[#a25eb5] mx-[20px] px-[24px] rounded-t w-auto h-[5rem]">
                <div id="inner-container" className="flex flex-row justify-between items-center content-center w-full">
                    <div id="logo-container" className="justify-start w-fit">
                        <img className="m-0 ml-0 w-full-h-full" src={onnumara1} alt="on-numara" title="on-numara" />
                    </div>
                    <div id="buttons-container" className="flex justify-end items-center content-center w-fit text-[#a25eb5]">
                        <button className="relative before:absolute flex justify-center items-center bg-white before:bg-transparent shadow-none hover:shadow-xl hover:shadow-purple-900 mx-1 px-4 py-2 rounded-full before:rounded-full hover:rounded-full w-auto before:w-0 hover:before:w-56 h-auto before:h-0 hover:before:h-56 font-sans transition-all duration-300 before:duration-500 overflow-hidden before:ease-out">Süperstar Nedir</button>
                        <button className="relative before:absolute flex justify-center items-center bg-white before:bg-transparent shadow-none hover:shadow-xl hover:shadow-purple-900 mx-1 px-4 py-2 rounded-full before:rounded-full hover:rounded-full w-auto before:w-0 hover:before:w-56 h-auto before:h-0 hover:before:h-56 font-sans transition-all duration-300 before:duration-500 overflow-hidden before:ease-out">Süperstar Nedir</button>
                        <button className="relative before:absolute flex justify-center items-center bg-white before:bg-transparent shadow-none hover:shadow-xl hover:shadow-purple-900 mx-1 px-4 py-2 rounded-full before:rounded-full hover:rounded-full w-auto before:w-0 hover:before:w-56 h-auto before:h-0 hover:before:h-56 font-sans transition-all duration-300 before:duration-500 overflow-hidden before:ease-out">Süperstar Nedir</button>
                    </div>
                </div>
            </div>
            <div>
                <h1>ON NUMARA HER HAFTA ÇARŞAMBA VE PAZAR GÜNLERİ SAAT 20:00'DA ÇEKİLİR</h1>
                <br />
                <p>
                    On Numara, farklı bir oyun formatıyla şans oyunu sevenlere büyük ödüller sunan eğlenceli bir seçenektir. Büyük ikramiyeyi kazanmak mümkün mü? Tabii ki! İşte on numara oyununda şansınızı artıracak stratejiler ve ipuçları.
                    <br />
                    Tamamen şansa dayalı bu oyunda, kazanma olasılığınızı artırmak için bazı tekniklerden faydalanabilirsiniz. İşte dikkat etmeniz gerekenler:
                    <br />
                    <br />

                    Sistem Oyunu: Daha fazla kolon oynayarak kazanma şansınızı artırabilirsiniz. On numara, geniş bir sayı havuzundan seçim yapmayı gerektirir; bu yüzden çoklu kombinasyonlar size avantaj sağlar.
                    İstatistiksel Çalışma: Çekiliş geçmişlerini analiz ederek hangi sayıların daha sık çıktığını gözlemleyebilirsiniz. Ancak unutmayın, bu yalnızca bir tahmindir.
                    Kişisel Şanslı Sayılarınızı Kullanın: Size anlam ifade eden sayılarla oynamak hem eğlencelidir hem de sizi oyuna bağlar.
                    Grupla Katılım: Bir loto grubu kurarak daha fazla kolon doldurabilir ve kazanma şansınızı artırabilirsiniz.
                    Bütçe Kontrolü: Oynamadan önce bütçenizi planlayın ve aşırıya kaçmaktan kaçının.
                    Sonuç:
                    On numara, büyük ödülleriyle dikkat çeken bir şans oyunudur. Şansınızı artırmak için önerilerimizi dikkate alabilirsiniz, ancak sonuçların tamamen rastlantısal olduğunu unutmayın. Oyunun keyfini çıkarın ve eğlenmeyi ön planda tutun.
                </p>
            </div>
        </>
    )
}

export default OnNumara