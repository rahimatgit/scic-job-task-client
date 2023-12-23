import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/Sidebar/Sidebar";


const Dashboard = () => {
    return (
        <div className="flex min-h-screen">
            <div className="w-[30%] md:w-[20%] md:bg-red-300">
                <Sidebar></Sidebar>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;