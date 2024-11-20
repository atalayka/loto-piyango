import footer from "~/assets/images/footer.svg";
import x from "~/assets/images/x.svg";
import instagram from "~/assets/images/instagram.svg";

function Footer() {
    return (
        <>
            <div className="relative flex flex-col flex-grow justify-center items-center bg-gradient-to-tl from-[#0173b9] via-[#0570b3] to-[#23AAE2] mb-0 w-full h-dvh text-left lg:text-[16px]">
                {/* İçerik elemanları */}
                <div id="footer-list" className="z-10 absolute flex flex-col lg:m-11 text-white" >
                    <div className="flex flex-row justify-center content-center w-dvw">
                        <ul id="footer-col1" className="lg:m-[30px]">
                            <li className="lg:mb-2 font-bold" >
                                <a href="" >Loto Piyango Online</a>
                            </li>
                            <li>
                                <a href="https://www.lotopiyangoonline.com/biz-kimiz" target="_self" class="gtm-footer">Biz Kimiz</a>
                            </li>

                            <li>
                                <a href="https://www.lotopiyangoonline.com/uyelik-sartlari" target="_self" class="gtm-footer">Üyelik Sözleşmesi</a>
                            </li>

                            <li>
                                <a href="https://www.lotopiyangoonline.com/Sorumlu_oyun" target="_self" class="gtm-footer">Sorumlu Oyun</a>
                            </li>

                            <li>
                                <a href="https://www.lotopiyangoonline.com/guvenlik-acigi-bildirimi" target="_self" class="gtm-footer">Güvenlik Açığı Bildirimi</a>
                            </li>

                            <li>
                                <a href="https://www.lotopiyangoonline.com/blog0" target="_self" class="gtm-footer">Blog</a>
                            </li>

                            <li>
                                <a href="https://www.lotopiyangoonline.com/icerikler/ikramiye-odeme-noktalari" target="_self" class="gtm-footer">İkramiye Ödemeleri</a>
                            </li>

                            <li>
                                <a href="https://www.lotopiyangoonline.com/icerikler/cekilislerimiz-hakkinda" target="_self" class="gtm-footer">Çekilişler hakkında</a>
                            </li>

                            <li>
                                <a href="https://www.lotopiyangoonline.com/icerikler/bilgi-edinme-basvurulari" target="_self" class="gtm-footer">Bilgi Edinme Başvuruları</a>
                            </li>

                            <li>
                                <a href="https://www.lotopiyangoonline.com/uye-aydinlatma-metni" target="_self" class="gtm-footer">Üye Aydınlatma Metni</a>
                            </li>

                            <li>
                                <a href="https://www.lotopiyangoonline.com/sikca-sorulan-sorular/cerez-politikasi" target="_self" class="gtm-footer">Çerez Politikası</a>
                            </li>
                        </ul>
                        <ul id="footer-col2" className="lg:m-[30px]">
                            <li className="mb-2 font-bold" >
                                <a href="" >Oyunlar</a>
                            </li>
                            <li>
                                <a href="https://www.lotopiyangoonline.com/milli-piyango" target="_self" class="gtm-footer">Milli Piyango</a>
                            </li>

                            <li>
                                <a href="https://www.lotopiyangoonline.com/kazi-kazan" target="_self" class="gtm-footer">Kazı Kazan</a>
                            </li>

                            <li>
                                <a href="https://www.lotopiyangoonline.com/sanal-oyunlar" target="_self" class="gtm-footer">Sanal Oyunlar</a>
                            </li>

                            <li>
                                <a href="https://www.lotopiyangoonline.com/sayisal-loto" target="_self" class="gtm-footer">Çılgın Sayısal Loto</a>
                            </li>

                            <li>
                                <a href="https://www.lotopiyangoonline.com/super-loto" target="_self" class="gtm-footer">Süper Loto</a>
                            </li>

                            <li>
                                <a href="https://www.lotopiyangoonline.com/sans-topu" target="_self" class="gtm-footer">Şans Topu</a>
                            </li>

                            <li>
                                <a href="https://www.lotopiyangoonline.com/on-numara" target="_self" class="gtm-footer">On Numara</a>
                            </li>
                        </ul>
                        <ul id="footer-col3" className="lg:m-[30px]">
                            <li className="mb-2 font-bold">
                                <a href="">Çekiliş Sonuçları</a></li>
                            <li>
                                <a href="https://www.lotopiyangoonline.com/milli-piyango/sonuclar" target="_self" class="gtm-footer">Milli Piyango Sonuçları</a>
                            </li>

                            <li>
                                <a href="https://www.lotopiyangoonline.com/sayisal-loto/sonuclar" target="_self" class="gtm-footer">Sayısal Loto Sonuçları</a>
                            </li>

                            <li>
                                <a href="https://www.lotopiyangoonline.com/super-loto/sonuclar" target="_self" class="gtm-footer">Süper Loto Sonuçları</a>
                            </li>

                            <li>
                                <a href="https://www.lotopiyangoonline.com/on-numara/sonuclar" target="_self" class="gtm-footer">On Numara Sonuçları</a>
                            </li>

                            <li>
                                <a href="https://www.lotopiyangoonline.com/sans-topu/cekilis-sonuclari" target="_self" class="gtm-footer">Şans Topu Sonuçları</a>
                            </li>

                        </ul>
                        <ul id="footer-col4" className="lg:m-[30px]">
                            <li>
                                <a href="" className="mb-2 font-bold">Kurallar</a>
                            </li>
                            <li>
                                <a href="https://www.lotopiyangoonline.com/milli-piyango/milli-piyango-oyun-kurallari" target="_self" class="gtm-footer">Milli Piyango Kurallar</a>
                            </li>

                            <li>
                                <a href="https://www.lotopiyangoonline.com/sayisal-loto/kurallar" target="_self" class="gtm-footer">Çılgın Sayısal Loto Kurallar</a>
                            </li>

                            <li>
                                <a href="https://www.lotopiyangoonline.com/super-loto/kurallar" target="_self" class="gtm-footer">Süper Loto Kurallar</a>
                            </li>

                            <li>
                                <a href="https://www.lotopiyangoonline.com/on-numara/kurallar" target="_self" class="gtm-footer">On Numara Kurallar</a>
                            </li>

                            <li>
                                <a href="https://www.lotopiyangoonline.com/icerikler/kazi-kazan-kurallar/kazi-kazan-oyun-kurallari" target="_self" class="gtm-footer">Kazı Kazan Kurallar</a>
                            </li>

                        </ul>
                        <ul id="footer-col5" className="lg:m-[30px]">
                            <li>
                                <a href="" className="mb-2 font-bold" >Sosyal Medya</a>
                            </li>
                            <div className="flex flex-row justify-center items-center gap-3 mt-5 mb-10" id="footer-socials">
                                <div className="flex flex-row justify-center items-center hover:bg-black hover: rounded w-[25px] h-[25px]">
                                    <a href="https://www.x.com/lotopiyangoonline" target="_self" class="gtm-footer gtm-footersocial">
                                        <img src={x} alt="loto-piyango-x.com" title="milli-piyango-loto-x.com" loading="lazy" className="mr-5 w-[24px] h-[24px]"></img>
                                    </a>
                                </div>
                                <div className="flex flex-row justify-center items-center hover:bg-gradient-to-tr from-orange-300 via-pink-400 to-pink-600 hover:rounded w-[24px] h-[24px]">
                                    <a href="https://www.instagram.com/lotopiyangoonline" target="_self" class="gtm-footer gtm-footersocial">
                                        <img src={instagram} alt="loto-piyango-instagram.com" title="milli-piyango-instagram.com" loading="lazy" className="w-[24px] h-[24px]"></img>
                                    </a>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div id="separator-line" className="justify-center items-center bg-white mb-0 w-full h-[1px] text-center" />
                    <p className="lg:mt-2 text-center">
                        Loto Piyango Online, Loto Piyango Online’a ait olan tüm metin, grafik görselleri ve yazılımlarla ilişkili tüm telif haklarını elinde tutmaktadır. <br /> Loto Piyango Online’ın izni olmaksızın, bu web sitesindeki hiçbir metin, yazılım ve grafik görseli aktaramaz, tadil edemez, kullanamaz ya da başka bir şekilde değiştiremezsiniz.<br />
                        Loto Piyango Online tamamen eğitim amaçlı içerikler barındıran bir web sitesidir, aksi kullanımlardan doğacak hiçbir suçu kabul etmez, bu tür girişimleri önermez. <br />Kumar ve bahis gibi davranışlar, profesyonel sağlık yardımı gerektirecek bağımlılıklara sebep olabilir.
                        <br />Alkol ve sigara gibi; kumar, bahis, loto, piyango vs. alışkanlıklar dostunuz değildir, daima kasa kazanır.
                    </p>
                    <div>
                    </div>
                </div>
                {/* Arka planda kalacak görüntü */}
                <img
                    src={footer}
                    alt="footer"
                    className="z-0 absolute w-full h-full object-center"
                />
            </div>
        </>
    );
}

export default Footer;
