import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import { useDrag, useDrop } from "react-dnd";


const AllTask = ({ tasks, setTasks }) => {

    const [todos, setTodos] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [closed, setClosed] = useState([]);

    useEffect(() => {
        const fTodos = tasks?.filter((task) => task.status === "todo") || [];
        const fInProgress = tasks?.filter((task) => task.status === "inprogress") || [];
        const fClosed = tasks?.filter((task) => task.status === "closed") || [];

        setTodos(fTodos);
        setInProgress(fInProgress);
        setClosed(fClosed);
    }, [tasks])

    const statuses = ["todo", "inprogress", "closed"];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 mt-12">
            
            {
                statuses?.map((status, index) => <Section key={index} status={status} tasks={tasks} setTasks={setTasks} todos={todos} inProgress={inProgress} closed={closed}></Section>)
            }
        </div>
    );
};

export default AllTask;

const Section = ({ status, tasks, setTasks, todos, inProgress, closed }) => {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }))

    let text = "Todo";
    let bg = "bg-red-500";
    let tasksToMap = todos;

    if (status === "inprogress") {
        text = "Ongoing";
        bg = "bg-purple-500";
        tasksToMap = inProgress;
    }

    if (status === "closed") {
        text = "Done";
        bg = "bg-green-500";
        tasksToMap = closed;
    }

    const addItemToSection = (id) => {
        setTasks((prev) => {

            const mTasks = prev?.map(tsk => {
                if(tsk.id === id){
                    return {...tsk, status: status}
                }
            return tsk;
            })

            localStorage.setItem("tasks", JSON.stringify(mTasks))
            toast.success("Task status changed");

            return mTasks;
        })
    }

    return <div ref={drop} className={isOver? "bg-slate-200" : ""}>
        <Header status={status} text={text} bg={bg} count={tasksToMap?.length}></Header>
        {tasksToMap?.length > 0 && tasksToMap?.map((task, index) => <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} index={index}></Task>)}
    </div>
}

const Header = ({ text, bg, count, status }) => {
    return <div className={`${bg} flex items-center justify-between font-medium h-12 pl-4 rounded-md uppercase text-sm text-white`}>
        {text}
        <div className="ml-2 bg-white font-medium mr-5 w-7 h-7 text-black rounded-full flex justify-center items-center">
            {count}
        </div>
    </div>
}

const Task = ({ task, tasks, setTasks, index }) => {

    const handleDelete = id => {
        const fTasks = tasks?.filter(t => t.id !== id);
        localStorage.setItem("tasks", JSON.stringify(fTasks));
        setTasks(fTasks);
        toast.success("Task deleted")
    }

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: {id: task?.id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))

    return <div ref={drag} className={`relative p-4 mt-8 shadow-md rounded-md cursor-grab ${isDragging? "opacity-25" : "opacity-100"}`}>
        <p className="text-lg font-medium">{index+1}. {task?.name}</p>
        <button className="absolute right-3 bottom-4 text-red-500" onClick={() => handleDelete(task?.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>

        </button>
    </div>
} 