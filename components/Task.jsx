import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../app/todos/page";
import Calendar from "react-calendar";
import { Task } from "./ListTask";

export const CreateTask = () => {
        const {task, setTask, value, toDoList, setToDoList} = useContext(AppContext);

        const UpdateTitle = (event) => {
            setTask({...task, title: event.target.value});
            
        }
        const AddTask = () => {
            if(task?.title =='' || !task.hasOwnProperty('title') ){console.log(task?.title + ' ' +  !task.hasOwnProperty('title'));return;}
            //setTask(task => ({...task, isCompleted:false}));
            const newList = [...toDoList,task];
            const id = toDoList.length ? toDoList[toDoList.length-1]?.id+1 : 0 ;
            const extended = (task?.description === '' || !task.hasOwnProperty('description'))?false:true; 
            
            setToDoList(newList => ([...newList, {...task, id: id, extended:extended, isExtended: extended}]));
            
            //console.log(newList);
        };

        return (
            <div class="my-5 p-4 text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-testid="create-todo">
                <h1 className="mb-4" data-testid="todo-title">Create Todo</h1>
                <input className="border-2 border-black rounded-md p-[1%] mx-[3%]" placeholder="Ex. Do homework" onChange = {UpdateTitle}/>
                <button className=" mt-[3%] border-2 border-black w-1/5 justify-self-center rounded-lg hover:bg-[#666fff] hover:.text-secondary" onClick={AddTask}>Add</button>
                <hr />
            <h4 className=".text-secondary font-bold pt-4">To Do List {value.getDate()}/{value.getMonth()+1}/{value.getFullYear()}</h4>
                <div class="px-6 pt-4 pb-2">
                    <div className="grid grid-cols-1 gap-2">
                        {toDoList.map((task)=>{
                            //console.log(task);
                            if(value.getDate() === task?.day
                                && (value.getMonth()+1) === task?.month
                                && value.getFullYear() === task?.year)
                                //console.log(task.hasOwnProperty('isCompleted'));
                                return <Task currTask = {task.title} id={task.id} />
                        })}
                    </div>
                </div>
            </div>
        );
}