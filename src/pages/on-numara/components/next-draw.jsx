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
        nextDraw.setHours(20, 0, 0, 0); // Çekiliş saati 20:00
    
        if (day === 1 && hour >= 20 && minute >= 0) {
            // Eğer Pazartesi 20:00'dan sonraysa, bir sonraki çekiliş Cuma
            nextDraw.setDate(nextDraw.getDate() + 4);
        } else if (day === 5 && hour >= 20 && minute >= 0) {
            // Eğer Cuma 20:00'dan sonraysa, bir sonraki çekiliş Pazartesi
            nextDraw.setDate(nextDraw.getDate() + 3);
        } else if (day === 2 || day === 3 || day === 4) {
            // Eğer Salı, Çarşamba veya Perşembe ise, bir sonraki çekiliş Cuma
            nextDraw.setDate(nextDraw.getDate() + (5 - day));
        } else if (day === 6 || day === 0) {
            // Eğer Cumartesi veya Pazar ise, bir sonraki çekiliş Pazartesi
            nextDraw.setDate(nextDraw.getDate() + ((1 - day + 7) % 7));
        } else if (day === 1) {
            // Eğer Pazartesi sabahıysa, o gün akşamki çekiliş
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
                            <div className="flex justify-between items-center bg-[#A25EB5] mr-2 rounded-lg w-8 sm:w-16 lg:w-20 h-16 sm:h-16 lg:h-20">
                                <div className="relative !-left-[6px] bg-[#f8f8f8] rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
                                <span className="font-semibold text-[#F8F8F8] text-2xl sm:text-4xl lg:text-5xl">
                                    {timeRemaining.days}
                                </span>
                                <div className="relative -right-[6px] bg-[#f8f8f8] rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
                            </div>
                            <span className="font-medium text-[#A25EB5] text-center sm:text-l">
                                GÜN
                            </span>
                        </div>
                    )}

                    {/* Saat Bloğu */}
                    <div className="relative flex flex-col">
                        <div className="flex justify-between items-center bg-[#A25EB5] mr-2 rounded-lg w-8 sm:w-16 lg:w-20 h-16 sm:h-16 lg:h-20">
                            <div className="relative !-left-[6px] bg-[#f8f8f8] rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
                            <span className="font-semibold text-[#F8F8F8] text-2xl sm:text-4xl lg:text-5xl">
                                {timeRemaining.hours}
                            </span>
                            <div className="relative -right-[6px] bg-[#f8f8f8] rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
                        </div>
                        <span className="font-medium text-[#A25EB5] text-center sm:text-l">
                            SAAT
                        </span>
                    </div>

                    {/* Dakika Bloğu */}
                    <div className="relative flex flex-col">
                        <div className="flex justify-between items-center bg-[#A25EB5] mr-2 rounded-lg w-8 sm:w-16 lg:w-20 h-16 sm:h-16 lg:h-20">
                            <div className="relative !-left-[6px] bg-[#f8f8f8] rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
                            <span className="font-semibold text-[#F8F8F8] text-2xl sm:text-4xl lg:text-5xl">
                                {timeRemaining.minutes}
                            </span>
                            <div className="relative -right-[6px] bg-[#f8f8f8] rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
                        </div>
                        <span className="font-medium text-[#A25EB5] text-center sm:text-l">
                            DAKİKA
                        </span>
                    </div>

                    {/* Saniye Bloğu */}
                    {timeRemaining.days === "00" && (
                        <div className="relative flex flex-col">
                            <div className="flex justify-between items-center bg-[#A25EB5] rounded-lg w-8 sm:w-16 lg:w-20 h-16 sm:h-16 lg:h-20">
                                <div className="relative !-left-[6px] bg-[#f8f8f8] rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
                                <span className="font-semibold text-[#F8F8F8] text-2xl sm:text-4xl lg:text-5xl">
                                    {timeRemaining.seconds}
                                </span>
                                <div className="relative -right-[6px] bg-[#f8f8f8] rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
                            </div>
                            <span className="font-medium text-[#A25EB5] text-center sm:text-l">
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
