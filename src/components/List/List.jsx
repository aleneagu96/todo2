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
      position:'relative',
      justifyContent:'center',
      margin:'auto',
      alignItems:'center',
      display:'grid',
      padding: 10,
      gap:5,
      marginTop:20,
      backgroundColor: 'white',
      width: 650,
      height: 600,
      border: 'solid 1px #f2f5f3',
      boxShadow: 10,
      borderRadius:5,
    },
    buttonStyle:{
      justifyContent:'center',
      margin: 'auto',
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

  const handleUpdateText = (index, updatedText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.index === index ? { ...todo, text: updatedText } : todo
      )
    );
  };


  const handleDeleteTodo = (index) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.index !== index);
      const updatedTodosWithIndexes = updatedTodos.map((todo, newIndex) => ({
        ...todo,
        index: newIndex + 1,
      }));
      return updatedTodosWithIndexes;
    });
  };
  

  return (
    <div className={classes.listStyle}>
        <Typography variant="h4" style={{marginLeft:200, color:'#3d424f'} }>TODO APP</Typography>
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
            onUpdateText={handleUpdateText}
            onDeleteTodo={handleDeleteTodo}
          />
        ))
      ) : (
        <Typography variant="subtitle2">No entries available</Typography>
      )}
    </div> 
    <div className={classes.buttonStyle}>
    <ButtonComponent 
      onClick={handleTodoDeletion} 
      label="Delete all" 
      />
      </div>
    </div>
  );
}

export default List;