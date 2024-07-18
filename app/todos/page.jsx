'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import { createContext } from 'react';
import '../todos/todo.css';
import { CreateTask } from '../../components/Task';
import { CreateToDoList } from '../../components/TodoList';


export const AppContext = createContext();

export default withPageAuthRequired(function TodoPage() {
  const [value, setValue] = useState(new Date());
  const [task, setTask]=  useState({})
  const [toDoList, setToDoList] = useState([]);

  const ChangeDate = (event) =>{
    setValue(event);
    let nday = event.getDate();
    let nmonth = event.getMonth()+1 ;
    let nyear = event.getFullYear();
             
    setTask({...task, day:nday, month: nmonth, year:nyear});     
               
  };
  useEffect(()=>{ChangeDate(new Date())},[]);
  
  return (
    <div className='min-h-max bg-gradient-to-r from-[#666fff] to-[#1cccab] mb-0'>
    <AppContext.Provider value= {{value, task, toDoList , setTask, setToDoList}}>
      <div className=' grid grid-cols-1 gap-[3%] justify-center '>
        <Calendar className={' mt-[10%] rounded-3xl px-1 shadow-xl justify-center justify-self-center'} onChange={ChangeDate} value={value} />
        <CreateTask/>
        <CreateToDoList/>

      </div>
    </AppContext.Provider>

    </div>
  );
});

