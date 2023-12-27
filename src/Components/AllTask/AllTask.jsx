import Done from "../Done/Done";
import Ongoing from "../Ongoing/Ongoing";
import Todo from "../Todo/Todo";


const AllTask = ({tasks, setTasks}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5">
            <div className="flex justify-center pt-10 border-b-4 border-red-600 pb-4">
                <Todo></Todo>
            </div>
            <div className="flex justify-center pt-10 border-b-4 border-blue-600 pb-4">
                <Ongoing></Ongoing>
            </div>
            <div className="flex justify-center pt-10 border-b-4 border-green-600 pb-4">
                <Done></Done>
            </div>
        </div>
    );
};

export default AllTask;