import { Helmet } from "react-helmet";
import superloto from "~/assets/images/superloto.svg";
import superloto1 from "~/assets/images/superloto1.svg";
import NextDraw from "./components/next-draw";
function SuperLoto() {
    return (
        <div className="w-full h-full">
            <Helmet>
                <title>Loto Piyango Online | Süper Loto Şanslı Numaralar, Süper Loto Sonuçları</title>
                <meta name="keywords" content="loto, piyango, online oyunlar, şans oyunları, sayısal loto, süper loto, on numara, şans topu, milli piyango" />
                <meta name="description" content="Süper loto şanslı sayılar ve süper loto sonuçları" />
            </Helmet>
            <div id="info-cards" className="flex flex-row justify-center content-center py-[30px] h-[230px] font-[700] text-[#ff5100] text-center sm:text-[12px] md:text-[14px] lg:text-[16px] tracking-[2px]">
                <div id="card-1" className="flex flex-col justify-center items-center bg-[#f8f8f8] shadow-lg mx-5 lg:w-[300px] h-full">
                    <img src={superloto} alt="süper-loto" title="süper-loto" />
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
            <div id="container" className="flex flex-row items-center bg-[#ff5100] mx-[20px] px-[24px] rounded-t w-auto h-[5rem]">
                <div id="inner-container" className="flex flex-row justify-between items-center content-center w-full">
                    <div id="logo-container" className="justify-start w-fit">
                        <img src={superloto1} alt="süper-loto" title="süper-loto" />
                    </div>
                    <div id="buttons-container" className="flex justify-end items-center content-center w-fit text-[#ff5100]">
                        <button className="relative before:absolute flex justify-center items-center bg-white before:bg-transparent shadow-none hover:shadow-xl hover:shadow-yellow-900 mx-1 px-4 py-2 rounded-full before:rounded-full hover:rounded-full w-auto before:w-0 hover:before:w-56 h-auto before:h-0 hover:before:h-56 font-sans transition-all duration-300 before:duration-500 overflow-hidden before:ease-out">Süperstar Nedir</button>
                        <button className="relative before:absolute flex justify-center items-center bg-white before:bg-transparent shadow-none hover:shadow-xl hover:shadow-yellow-900 mx-1 px-4 py-2 rounded-full before:rounded-full hover:rounded-full w-auto before:w-0 hover:before:w-56 h-auto before:h-0 hover:before:h-56 font-sans transition-all duration-300 before:duration-500 overflow-hidden before:ease-out">Süperstar Nedir</button>
                        <button className="relative before:absolute flex justify-center items-center bg-white before:bg-transparent shadow-none hover:shadow-xl hover:shadow-yellow-900 mx-1 px-4 py-2 rounded-full before:rounded-full hover:rounded-full w-auto before:w-0 hover:before:w-56 h-auto before:h-0 hover:before:h-56 font-sans transition-all duration-300 before:duration-500 overflow-hidden before:ease-out">Süperstar Nedir</button>
                    </div>
                </div>
            </div>
            <div>
                <h1>SÜPER LOTO HER SALI, PERŞEMBE VE PAZAR GÜNLERİ SAAT 21:30'DA ÇEKİLİR</h1>
                <br />
                <p>
                    Süper loto, büyük ödüller kazanma şansı sunan popüler bir şans oyunu. Peki, bu oyunda büyük ikramiyeyi kazanmak mümkün mü? Kesinlikle evet! Bu yazımızda, süper loto oyununda şansınızı artıracak uzman tavsiyelerini ve etkili ipuçlarını bulacaksınız.
                    <br />
                    Süper loto tamamen şansa dayalı bir oyun olmasına rağmen, bazı stratejilerle avantaj sağlayabilirsiniz. İşte kazanma şansınızı artırmak için dikkate almanız gereken önemli noktalar:
                    <br />
                    <br />

                    Sistem Oyunu: Birden fazla kolon oynamak, kazanma ihtimalinizi artırmanın en etkili yollarından biridir. Sistem oyunu, daha fazla sayı seçmenize ve çeşitli kombinasyonlar oluşturmanıza olanak tanır.
                    İstatistiksel Analiz: Daha önceki çekilişlerin sonuçlarını inceleyerek hangi sayıların daha sık veya daha az çıktığını öğrenebilirsiniz. Ancak unutmayın, bu yalnızca bir analizdir; sonuçlar tamamen şansa bağlıdır.
                    Şanslı Numaralarınızı Belirleyin: Size anlam ifade eden özel sayılarınızı seçerek oyunu daha eğlenceli hale getirebilirsiniz.
                    Loto Grupları: Arkadaşlarınızla veya ailenizle bir grup oluşturarak daha fazla kolon doldurabilir ve kazanma şansınızı artırabilirsiniz.
                    Bütçenizi Planlayın: Oyunun keyfini çıkarmak için bütçenizi doğru şekilde yönetin ve aşırıya kaçmayın.
                    Sonuç:
                    Süper loto, heyecan dolu bir oyun! Ancak büyük ödülü kazanmanın tamamen şansa bağlı olduğunu unutmamalısınız. Paylaştığımız bu ipuçlarıyla şansınızı artırabilir ve oyunu daha eğlenceli bir hale getirebilirsiniz. En önemlisi, oyunun tadını çıkarmaktır.
                </p>
            </div>
        </div>
    );
}

export default SuperLoto;