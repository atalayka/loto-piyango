import { useEffect, useState } from 'react';

function LuckyNumbers() {
    /* give the current day*/
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
        const date = new Date();
        const options = { month: 'long', day: 'numeric' };
        setCurrentDate(date.toLocaleDateString('tr-TR', options));
    }, []);
    /* give the current day*/


    /*give the 1-90*/
    const [sayisal, getSayisal] = useState([]);
    const [sayisal2, getSayisal2] = useState([]);

    const generateSayisal = () => {
        const numbers = [];
        while (numbers.length < 6) {
            const rand = Math.floor(Math.random() * 90) + 1;
            if (!numbers.includes(rand)) {
                numbers.push(rand);
            }
        }
        getSayisal(numbers);
    };

    const generateSayisal2 = (existingNumbers) => {
        const numbers = [];
        while (numbers.length < 1) {
            const rand = Math.floor(Math.random() * 90) + 1;
            if (!numbers.includes(rand) && !existingNumbers.includes(rand)) {
                numbers.push(rand);
            }
        }
        getSayisal2(numbers);
    };

    useEffect(() => {
        generateSayisal(); // Sayfa yüklendiğinde rastgele sayılar oluştur
    }, []);

    useEffect(() => {
        generateSayisal2(sayisal); // İlk dizinin sayılarıyla karşılaştırarak ikinci diziyi oluştur
    }, [sayisal]);

    const sortedSayisal = [...sayisal].sort((a, b) => a - b);
    const sortedSayisal2 = [...sayisal2].sort((a, b) => a - b);

    /*give the 1-90*/



    /*give the 1-60*/
    const [superNumbers, getSuperNumbers] = useState([]);
    const generateSuperNumbers = () => {
        const numbers = [];
        while (numbers.length < 6) {
            const rand = Math.floor(Math.random() * 60) + 1;
            if (!numbers.includes(rand)) {
                numbers.push(rand);
            }
        }
        getSuperNumbers(numbers);
    };
    useEffect(() => {
        generateSuperNumbers(); // Sayfa yüklendiğinde rastgele sayılar oluştur
    }, []);
    const sortedSuperNumbers = [...superNumbers].sort((a, b) => a - b);
    /*give the 1-60*/

    /*give the sans topu*/
    const [sans, getSans] = useState([]);
    const [sans2, getSans2] = useState([]);

    const generateSans = () => {
        const numbers = [];
        while (numbers.length < 5) {
            const rand = Math.floor(Math.random() * 34) + 1;
            if (!numbers.includes(rand)) {
                numbers.push(rand);
            }
        }
        getSans(numbers);
    };

    const generateSans2 = (existingNumbers) => {
        const numbers = [];
        while (numbers.length < 1) {
            const rand = Math.floor(Math.random() * 14) + 1;
            if (!numbers.includes(rand) && !existingNumbers.includes(rand)) {
                numbers.push(rand);
            }
        }
        getSans2(numbers);
    };

    useEffect(() => {
        generateSans(); // Sayfa yüklendiğinde rastgele sayılar oluştur
    }, []);

    useEffect(() => {
        generateSans2(sans); // İlk dizinin sayılarıyla karşılaştırarak ikinci diziyi oluştur
    }, [sans]);

    const sortedSans = [...sans].sort((a, b) => a - b);
    const sortedSans2 = [...sans2].sort((a, b) => a - b);


    /*give the sans topu*/

    /*give the 1-80*/
    const [onNumbers, getOnNumbers] = useState([]);
    const generateOnNumbers = () => {
        const numbers = [];
        while (numbers.length < 10) {
            const rand = Math.floor(Math.random() * 80) + 1;
            if (!numbers.includes(rand)) {
                numbers.push(rand);
            }
        }
        getOnNumbers(numbers);
    };
    useEffect(() => {
        generateOnNumbers(); // Sayfa yüklendiğinde rastgele sayılar oluştur
    }, []);
    const sortedOnNumbers = [...onNumbers].sort((a, b) => a - b);
    /*give the 1-80*/

    /*give the lottery numberz*/
    const [lotteryNumbers, setLotteryNumbers] = useState([]);

    const generateLotteryNumbers = () => {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNum = Math.floor(Math.random() * 10);
            numbers.add(randomNum);
        }
        setLotteryNumbers(Array.from(numbers));
    };

    useEffect(() => {
        generateLotteryNumbers(); // Bileşen yüklendiğinde rastgele numaraları oluştur
    }, []);
    /*give the lottery numberz*/


    const handleLogoClick = () => {
        window.location.reload(); // Sayfayı yeniden yükle
    }
    return (
        <>
            <div className='h-full' id='main'>
                {/**/}
                <h1 className='mt-[2rem] mb-[2rem] text-[#0173B9] text-center sm:text-5xl' id='main-title'> {currentDate} Loto Şanslı Sayılar </h1>
                <h2 className='mb-[1rem] font-bold text-center sm:text-3xl' id='sayisal-title'>Çılgın Sayısal Loto Şanslı Sayılar</h2>
                <div className='flex flex-row justify-center gap-[10px] mt-[0px]' id='numbercontainer-sayisal'>
                    {sortedSayisal.map((number) => (
                        <div key={number} id='sayisal-circle' className='content-center bg-[#EA0029] rounded-full w-[35px] h-[35px] font-bold text-[#f8f8f8] text-center lg:text-[17px]'>
                            {number}
                        </div>
                    ))}
                    {sortedSayisal2.map((number) => (
                        <div key={number} id='superstar-circle' className='content-center bg-[#ffd700] rounded-full w-[35px] h-[35px] font-bold text-[17px] text-black text-center'>
                            {number}
                        </div>
                    ))}
                </div>
                {/**/}

                {/**/}
                <h2 className='mt-[2rem] mb-[1rem] font-bold text-center sm:text-3xl' id='super-title'>Süper Loto Şanslı Sayılar </h2>
                <div className='flex flex-row justify-center gap-[10px] mt-[0px]' id='numbercontainer-super'>
                    {sortedSuperNumbers.map((number) => (
                        <div key={number} id='super-circle' className='content-center bg-[#FF5100] rounded-[50px] w-[35px] h-[35px] font-bold text-[#f8f8f8] text-[17px] text-center'>
                            {number}
                        </div>
                    ))}
                </div>
                {/**/}
                {/**/}
                <h2 className='mt-[2rem] mb-[1rem] font-bold text-center sm:text-3xl' id='sans-title'>Şans Topu Şanslı Sayılar</h2>
                <div className='flex flex-row justify-center gap-[10px] mt-[0px]' id='numbercontainer-sans'>
                    {sortedSans.map((number) => (
                        <div key={number} id='sans-circle' className='content-center bg-[#E10098] rounded-[50px] w-[35px] h-[35px] font-bold text-[#f8f8f8] text-[17px] text-center'>
                            {number}
                        </div>
                    ))}
                    {sortedSans2.map((number) => (
                        <div key={number} id='sanssuperstar-circle' className='content-center bg-[#169ad6] rounded-[50px] w-[35px] h-[35px] font-bold text-[#f8f8f8] text-[17px] text-center'>
                            {number}
                        </div>
                    ))}
                </div>
                {/**/}
                {/**/}
                <h2 className='mt-[2rem] mb-[1rem] font-bold text-center sm:text-3xl' id='on-title'>On Numara Şanslı Sayılar</h2>
                <div className='flex flex-row justify-center gap-[10px] mt-[0px]' id='numbercontainer-on'>
                    {sortedOnNumbers.map((number) => (
                        <div key={number} id='on-circle' className='content-center bg-[#A25EB5] rounded-[50px] w-[35px] h-[35px] font-bold text-[#f8f8f8] text-[17px] text-center'>
                            {number}
                        </div>
                    ))}
                </div>
                {/**/}
                {/**/}
                <div id='piyango' className='mb-[2rem]'>
                    <h2 className='mt-[2rem] mb-[1rem] font-bold text-center md:text-3xl' id='on-title'>Milli Piyango Şanslı Sayılar</h2>
                    <div className='flex flex-row justify-center gap-[10px] mt-[0px]' id='numbercontainer-piyango'>
                        {lotteryNumbers.map((number) => (
                            <div key={number} id='piyango-circle' className='content-center bg-[#23aae2] rounded-[50px] w-[35px] h-[35px] font-bold text-[#f8f8f8] text-[17px] text-center'>
                                {number}
                            </div>
                        ))}
                    </div>
                </div>
                {/**/}
            </div>
        </>
    )
}
export default LuckyNumbers