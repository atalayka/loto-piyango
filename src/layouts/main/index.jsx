import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Header from "../header";
import Footer from "../footer";
export default function MainLayout() {
    return (
        <div className='flex flex-col h-full'>
            <Header />
            <div className='flex mx-auto w-full h-full'>
                {/* Sol Sidebar */}
                <Sidebar />

                {/* Main Content (ortada) */}
                <main className='flex-1 bg-white'>
                    <Outlet />
                </main>
                {/* Sağ Sidebar */}
                <Sidebar />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}