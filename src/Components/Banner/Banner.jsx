import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row gap-5 items-center">
            <div className="w-full md:w-[60%]">
                <img src="https://img.freepik.com/free-vector/flat-scrum-task-board-with-color-stick-paper-notes_88138-931.jpg?w=900&t=st=1703267530~exp=1703268130~hmac=92f84dbe9b2e731eed189e87723555ff5c3d2e89aebc06f939b55c15b2970c8c" alt="" />
            </div>
            <div className="flex-1">
                <h2 className="text-2xl md:text-7xl font-bold border-l-8 border-blue-600 pl-2">TaskWise</h2>
                <p className="mt-5 text-xl font-bold text-blue-500 border-b-4 p-4 bg-slate-100 rounded-xl shadow-xl">
                    Your Ultimate Task Management Companion. Seamlessly organize, prioritize, and conquer your to-do list with intuitive features designed to elevate your efficiency.
                </p>
                <div className="flex justify-center mt-6">
                    <button className="btn btn-ghost border-b-blue-800 border-b-4 text-blue-600 font-bold">
                        <Link to="/dashboard">Get Started</Link>
                    </button>
                </div>
                <div className="divider divider-accent"></div>
            </div>
        </div>
    );
};

export default Banner;