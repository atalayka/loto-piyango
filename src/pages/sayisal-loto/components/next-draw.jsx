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
        const day = currentTime.getDay();
        const hour = currentTime.getHours();
        const minute = currentTime.getMinutes();

        let nextDraw = new Date(currentTime);
        nextDraw.setHours(21, 30, 0, 0); // Akşam 21:30

        if (
            (day === 0 && hour >= 21 && minute >= 30) || // Pazar 21:30'dan sonra
            (day === 6 && hour >= 21 && minute >= 30) || // Cumartesi 21:30'dan sonra
            (day === 1 && hour >= 21 && minute >= 30) || // Pazartesi 21:30'dan sonra
            (day === 3 && hour >= 21 && minute >= 30) // Çarşamba 21:30'dan sonra
        ) {
            nextDraw.setDate(nextDraw.getDate() + (day === 6 ? 2 : 1)); // Sonraki gün
        } else if (day === 1 || day === 2) {
            nextDraw.setDate(nextDraw.getDate() + (3 - day)); // Çarşamba
        } else if (day === 3 || day === 4 || day === 5) {
            nextDraw.setDate(nextDraw.getDate() + (6 - day)); // Cumartesi
        } else if (day === 0) {
            nextDraw.setDate(nextDraw.getDate() + 1); // Pazartesi
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
                            <div className="flex justify-between items-center bg-[#EA0029] mr-2 rounded-lg w-8 sm:w-16 lg:w-20 h-16 sm:h-16 lg:h-20">
                                <div className="relative !-left-[6px] bg-[#f8f8f8] rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
                                <span className="font-semibold text-[#F8F8F8] text-2xl sm:text-4xl lg:text-5xl">
                                    {timeRemaining.days}
                                </span>
                                <div className="relative -right-[6px] bg-[#f8f8f8] rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
                            </div>
                            <span className="font-medium text-[#ea0029] text-center sm:text-l">
                                GÜN
                            </span>
                        </div>
                    )}

                    {/* Saat Bloğu */}
                    <div className="relative flex flex-col">
                        <div className="flex justify-between items-center bg-[#ea0029] mr-2 rounded-lg w-8 sm:w-16 lg:w-20 h-16 sm:h-16 lg:h-20">
                            <div className="relative !-left-[6px] bg-[#f8f8f8] rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
                            <span className="font-semibold text-[#F8F8F8] text-2xl sm:text-4xl lg:text-5xl">
                                {timeRemaining.hours}
                            </span>
                            <div className="relative -right-[6px] bg-[#f8f8f8] rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
                        </div>
                        <span className="font-medium text-[#ea0029] text-center sm:text-l">
                            SAAT
                        </span>
                    </div>

                    {/* Dakika Bloğu */}
                    <div className="relative flex flex-col">
                        <div className="flex justify-between items-center bg-[#ea0029] mr-2 rounded-lg w-8 sm:w-16 lg:w-20 h-16 sm:h-16 lg:h-20">
                            <div className="relative !-left-[6px] bg-[#f8f8f8] rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
                            <span className="font-semibold text-[#F8F8F8] text-2xl sm:text-4xl lg:text-5xl">
                                {timeRemaining.minutes}
                            </span>
                            <div className="relative -right-[6px] bg-[#f8f8f8] rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
                        </div>
                        <span className="font-medium text-[#ea0029] text-center sm:text-l">
                            DAKİKA
                        </span>
                    </div>

                    {/* Saniye Bloğu */}
                    {timeRemaining.days === "00" && (
                        <div className="relative flex flex-col">
                            <div className="flex justify-between items-center bg-[#ea0029] rounded-lg w-8 sm:w-16 lg:w-20 h-16 sm:h-16 lg:h-20">
                                <div className="relative !-left-[6px] bg-[#f8f8f8] rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
                                <span className="font-semibold text-[#F8F8F8] text-2xl sm:text-4xl lg:text-5xl">
                                    {timeRemaining.seconds}
                                </span>
                                <div className="relative -right-[6px] bg-[#f8f8f8] rounded-full w-2.5 sm:w-3 h-2.5 sm:h-3"></div>
                            </div>
                            <span className="font-medium text-[#ea0029] text-center sm:text-l">
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
