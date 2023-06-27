import React, { useEffect, useState } from "react";
import ButtonComponent from "../Button/ButtonComponent";
import Todo from "../Todo/Todo";
import TextInput from "../TextInput/TextInput";
import initialData from '../initialData';
import { Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';


function List() {

  const useStyles= makeStyles((theme) => ({
    listStyle: {
      justifyContent:'center',
      margin:'auto',
      alignItems:'center',
      display:'grid',
      padding: 10,
      gap:5,
    },

    buttonStyle:{
      alignSelf:'right',
    }
  }))

  const classes =useStyles();

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(initialData);
  }, []);

  const handleAddTodo = (todoText) => {
    const newTodo = {
      text: todoText,
      index: todos.length + 1,
      date: new Date().toLocaleString(),
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleTodoDeletion = () => {
    setTodos([]);
  };

  return (
    <div className={classes.listStyle}>
      <TextInput onAddTodo={handleAddTodo} />

    <div> 
    {/* Render todos */}
    {todos.length > 0 ? (
        todos.map((todo, index) => (
          <Todo
            key={index}
            index={todo.index}
            date={todo.date}
            text={todo.text}
          />
        ))
      ) : (
        <Typography variant="subtitle2">No entries available</Typography>
      )}
    </div> 
    <br></br>
    <ButtonComponent 
      className={classes.buttonStyle}
      onClick={handleTodoDeletion} 
      label="Delete all" />
    </div>
  );
}

export default List;
