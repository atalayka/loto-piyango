import { useCallback, useEffect, useState } from "react";

function NextDraw() {
    const [timeRemaining, setTimeRemaining] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const targetTime = getNextTargetTime(now);
            const diff = targetTime - now;

            if (diff > 0) {
                const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
                const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
                const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
                const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

                setTimeRemaining({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const getNextTargetTime = (currentTime) => {
        const day = currentTime.getDay(); // 0 = Pazar, 1 = Pazartesi, ..., 6 = Cumartesi
        const hour = currentTime.getHours();
        const minute = currentTime.getMinutes();
    
        let nextDraw = new Date(currentTime);
        nextDraw.setHours(21, 30, 0, 0); // Çekiliş saati 21:30
    
        if (day === 0 && hour >= 21 && minute >= 30) {
            // Eğer Pazar 21:30'dan sonraysa, bir sonraki çekiliş Salı
            nextDraw.setDate(nextDraw.getDate() + 2);
        } else if (day === 2 && hour >= 21 && minute >= 30) {
            // Eğer Salı 21:30'dan sonraysa, bir sonraki çekiliş Perşembe
            nextDraw.setDate(nextDraw.getDate() + 2);
        } else if (day === 4 && hour >= 21 && minute >= 30) {
            // Eğer Perşembe 21:30'dan sonraysa, bir sonraki çekiliş Pazar
            nextDraw.setDate(nextDraw.getDate() + 3);
        } else if (day === 1 || day === 3) {
            // Eğer Pazartesi veya Çarşamba ise, bir sonraki çekiliş sırasıyla Salı veya Perşembe
            nextDraw.setDate(nextDraw.getDate() + 1);
        } else if (day === 5 || day === 6) {
            // Eğer Cuma veya Cumartesi ise, bir sonraki çekiliş Pazar
            nextDraw.setDate(nextDraw.getDate() + (7 - day));
        } else if (day === 0) {
            // Eğer Pazar sabahıysa, o gün akşamki çekiliş
            nextDraw.setDate(nextDraw.getDate());
        }
    
        return nextDraw;
    };
    

    return (
        <div className="flex flex-col justify-center items-center bg-[#transparent] mt-4">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className={`flex justify-center  ${timeRemaining.days === "00" ? "items-center" : ""}`}>
                    {/* Gün Bloğu (Gün 0 değilse gösterilecek) */}
                    {timeRemaining.days !== "00" && (
                        <div className="relative flex flex-col">
                            <div className="flex justify-between items-center bg-[#FF5100] mr-2 rounded-lg w-8 sm:w-16 lg:w-20 h-16 sm:h-16 lg:h-20">
                                <div className="relative !-left-[6px] bg-[#f8f8f8] rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
                                <span className="font-semibold text-[#F8F8F8] text-2xl sm:text-4xl lg:text-5xl">
                                    {timeRemaining.days}
                                </span>
                                <div className="relative -right-[6px] bg-[#f8f8f8] rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
                            </div>
                            <span className="font-medium text-[#FF5100] text-center sm:text-l">
                                GÜN
                            </span>
                        </div>
                    )}

                    {/* Saat Bloğu */}
                    <div className="relative flex flex-col">
                        <div className="flex justify-between items-center bg-[#FF5100] mr-2 rounded-lg w-8 sm:w-16 lg:w-20 h-16 sm:h-16 lg:h-20">
                            <div className="relative !-left-[6px] bg-[#f8f8f8] rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
                            <span className="font-semibold text-[#F8F8F8] text-2xl sm:text-4xl lg:text-5xl">
                                {timeRemaining.hours}
                            </span>
                            <div className="relative -right-[6px] bg-[#f8f8f8] rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
                        </div>
                        <span className="font-medium text-[#FF5100] text-center sm:text-l">
                            SAAT
                        </span>
                    </div>

                    {/* Dakika Bloğu */}
                    <div className="relative flex flex-col">
                        <div className="flex justify-between items-center bg-[#FF5100] mr-2 rounded-lg w-8 sm:w-16 lg:w-20 h-16 sm:h-16 lg:h-20">
                            <div className="relative !-left-[6px] bg-[#f8f8f8] rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
                            <span className="font-semibold text-[#F8F8F8] text-2xl sm:text-4xl lg:text-5xl">
                                {timeRemaining.minutes}
                            </span>
                            <div className="relative -right-[6px] bg-[#f8f8f8] rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
                        </div>
                        <span className="font-medium text-[#FF5100] text-center sm:text-l">
                            DAKİKA
                        </span>
                    </div>

                    {/* Saniye Bloğu */}
                    {timeRemaining.days === "00" && (
                        <div className="relative flex flex-col">
                            <div className="flex justify-between items-center bg-[#FF5100] rounded-lg w-8 sm:w-16 lg:w-20 h-16 sm:h-16 lg:h-20">
                                <div className="relative !-left-[6px] bg-[#f8f8f8] rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
                                <span className="font-semibold text-[#F8F8F8] text-2xl sm:text-4xl lg:text-5xl">
                                    {timeRemaining.seconds}
                                </span>
                                <div className="relative -right-[6px] bg-[#f8f8f8] rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
                            </div>
                            <span className="font-medium text-[#FF5100] text-center sm:text-l">
                                SANİYE
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NextDraw;