import './index.css';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 6000);
        return () => clearTimeout(timer);
    }, [navigate]);
    return (
        <>
            <Helmet>
                <title>404</title>
                <meta name="keywords" content="loto, piyango, online oyunlar, şans oyunları, sayısal loto, süper loto, on numara, şans topu, milli piyango" />
                <meta name="description" content="Milli Piyango heyecanına dahil ol, Süper Loto, Çılgın Sayısal Loto, Şans Topu, On Numara, Kazı Kazan ve Loto Piyango ile kazanmaya devam et, haftanın talihlisi ol." />
            </Helmet>
            <div>
                <header class="top-header">
                </header>

                <div>
                    <div class="starsec"></div>
                    <div class="starthird"></div>
                    <div class="starfourth"></div>
                    <div class="starfifth"></div>
                </div>

                <div class="lamp__wrap">
                    <div class="lamp">
                        <div class="cable"></div>
                        <div class="cover"></div>
                        <div class="in-cover">
                            <div class="bulb"></div>
                        </div>
                        <div class="light"></div>
                    </div>
                </div>
                <section class="error">
                    <div class="error__content">
                        <div class="error__message message">
                            <h1 class="message__title">KİME BAKMIŞTINIZ?</h1>
                            <h1 class="message__title">404</h1>
                        </div>
                        <div class="e-nav error__nav">
                        </div>
                    </div>
                </section>

            </div >
        </>
    )
}
export default NotFound