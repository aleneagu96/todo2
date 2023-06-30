import React, { useEffect, useState } from "react";
import ButtonComponent from "../Button/ButtonComponent";
import Todo from "../Todo/Todo";
import TextInput from "../TextInput/TextInput";
import initialData from "../initialData";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomModal from "../Modal/CustomModal";

function List() {
  const useStyles = makeStyles((theme) => ({
    listStyle: {
      position: "relative",
      justifyContent: "center",
      margin: "auto",
      alignItems: "center",
      display: "grid",
      padding: 10,
      gap: 5,
      marginTop: 20,
      backgroundColor: "white",
      width: 650,
      height: 600,
      border: "solid 1px #f2f5f3",
      boxShadow: 10,
      borderRadius: 5,
    },
    buttonStyle: {
      justifyContent: "center",
      margin: "auto",
    },
  }));

  const classes = useStyles();

  const [todos, setTodos] = useState(initialData);
  const [modalOpen, setModalOpen] = useState(false);
  const [editedText, setEditedText] = useState("");
  const [currentTodo, setCurrentTodo] = useState(0);
  const [editedDate, setEditedDate] = useState(new Date());

  const handleOpenModal = (currentIndex) => {
    setCurrentTodo(currentIndex);
    setEditedText(todos[currentIndex].text);
    setModalOpen(true);
  };

  const handleTextChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const onDeleteTodo = () => {
    onDeleteTodo(index);
  };

  const handleSave = () => {
    handleUpdateText(currentTodo, editedText);
    setEditedDate(new Date().toLocaleString());
    handleCloseModal();
  };
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

  const handleUpdateText = (newIndex, updatedText) => {
    const update = todos.map((todo, index) =>
      index === newIndex
        ? { ...todo, text: updatedText, date: new Date().toLocaleString() }
        : todo
    );
    setTodos(update);
  };

  const handleDeleteTodo = () => {
    const update = todos.filter((todo, index) => index !== currentTodo);
    setTodos(update);
  };

  return (
    <div className={classes.listStyle}>
      <Typography variant="h4" style={{ marginLeft: 200, color: "#3d424f" }}>
        TODO APP
      </Typography>
      <TextInput onAddTodo={handleAddTodo} />
      <div>
        {/* Render todos */}
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <Todo
              key={index}
              labelNumber={index}
              date={todo.date}
              text={todo.text}
              onDeleteTodo={handleDeleteTodo}
              openModal={() => handleOpenModal(index)}
            />
          ))
        ) : (
          <Typography variant="subtitle2">No entries available</Typography>
        )}
      </div>
      <div className={classes.buttonStyle}>
        <ButtonComponent onClick={handleTodoDeletion} label="Delete all" />
      </div>
      <CustomModal
        handleTextChange={(val) => setEditedText(val)}
        handleSave={handleSave}
        handleClose={handleCloseModal}
        open={modalOpen}
        text={editedText}
      />
    </div>
  );
}

export default List;
