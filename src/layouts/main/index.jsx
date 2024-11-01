import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="bg-white">
            Main Layout
            <Outlet/>
        </div>
    )
}