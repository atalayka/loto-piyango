import { Outlet } from "react-router-dom"
import MainLayout from "~/layouts/main"
import LuckyNumbers from "~/components/lucky-numbers";
import { Helmet } from "react-helmet";

function Home() {
    return (
        <> <div className="flex flex-col bg-transparent w-dvw h-full">
            <Helmet>
                <title>Loto Piyango Online | Piyango, Milli Loto Oyunları, Şanslı Sayılar, Piyango Loto Sonuçları</title>
                <meta name="keywords" content="loto, piyango, online oyunlar, şans oyunları, sayısal loto, süper loto, on numara, şans topu, milli piyango"></meta>
                <meta name="description" content="Çılgın Sayısal Loto, Sayısal Loto, Süper Loto, Milli Piyango, Şans Topu ve On numara şans oyunları için talihli sayılar ve sonuçlar" />
            </Helmet>
            <LuckyNumbers />
        </div>
        </>
    );
}

export default Home