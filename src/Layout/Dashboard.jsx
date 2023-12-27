
import { Link, Outlet } from "react-router-dom";



const Dashboard = () => {

    
    return (
        <div className="flex min-h-screen">
            <div className="w-[30%] md:w-[20%] bg-blue-500 flex flex-col items-center pt-20">
                {/* <Sidebar></Sidebar> */}
                <button className="btn btn-ghost rounded-full text-white text-sm md:text-xl"><Link to='/dashboard/profile'>Profile</Link></button>
                <button className="btn btn-ghost rounded-full text-white text-sm md:text-xl"><Link to='/dashboard/tasks'>My Task</Link></button>
                <button className="btn btn-ghost rounded-full text-white text-sm md:text-xl"><Link to='/dashboard/create'>Create Task</Link></button>
                <button className="btn btn-ghost rounded-full text-white text-sm md:text-xl"><Link to='/'>Home</Link></button>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;