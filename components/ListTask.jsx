import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../app/todos/page";

export const Task = (props) => {

    const {toDoList,setToDoList} = useContext(AppContext);

    const UpdateDeleted = (id) => {
        setToDoList(toDoList.filter((task)=>task?.id !==id));
    };
    return(
        <div>
            <p className=".text-secondary pt-2">{props.currTask.replace(/.{30}/g)} 
            <button onClick={()=>UpdateDeleted(props.id)} className=".text-secondary font-bold pl-2">Complete</button>
            </p>
        </div>
    );
};