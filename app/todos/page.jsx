'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import { createContext } from 'react';
import { CreateTask } from '../../components/Task';


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
    <AppContext.Provider value= {{value, task, toDoList , setTask, setToDoList}}>
        <Calendar className='hero my-5 text-center' onChange={ChangeDate} value={value} />
        <CreateTask/>
    </AppContext.Provider>
  );
});

