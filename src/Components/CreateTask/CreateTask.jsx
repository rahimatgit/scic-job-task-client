import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';

const CreateTask = () => {

    
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [tasks, setTasks] = useState([]);
    console.log(tasks);

    const [task, setTask] = useState({
        id: "",
        name: "",
        status: "todo"
    });

    useEffect( () => {
        setTasks(JSON.parse(localStorage.getItem("tasks")))
    } , [])

    const onSubmit = data => {
        // console.log('created')

        setTasks((prev) => {
            const list = [...prev, task];
            localStorage.setItem("tasks", JSON.stringify(list));
            return list;
        })
    }

    return (
        <div className="mt-12">
            <h2 className="text-xl md:text-4xl font-bold text-center mb-12 ">Create Your Task!</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 justify-center items-center">
                    <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xs input-info" {...register("title", { required: "title is required" })}
                    value={task.name}
                    onChange={(e) => setTask({...task, id: uuidv4(), name: e.target.value})}
                    />
                    <input type="text" placeholder="Priority" className="input input-bordered w-full  max-w-xs input-info" {...register("priority", { required: "priority is required" })} />
                    <textarea {...register("description", { required: "description is required" })} className="textarea textarea-info w-full max-w-xs" placeholder="Description"></textarea>
                    <select {...register("priority", { required: "priority is required" })} className="select select-info w-full max-w-xs" placeholder="Select Priority">
                        <option disabled selected>Select Priority</option>
                        <option>Low</option>
                        <option>Moderate</option>
                        <option>High</option>
                    </select>
                    <button type="submit" className="btn btn-accent w-full max-w-xs text-white">Create</button>
                </form>
            </div>
        </div>
    );
};

export default CreateTask;