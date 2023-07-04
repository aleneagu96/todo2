import React, { useEffect, useState } from "react";
import ButtonComponent from "../Button/ButtonComponent";
import Todo from "../Todo/Todo";
import TextInput from "../TextInput/TextInput";
import initialData from "../initialData";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomModal from "../Modal/CustomModal";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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
      // height: 600,
      border: "solid 1px #f2f5f3",
      boxShadow: 10,
      borderRadius: 5,
    },
    buttonStyle: {
      justifyContent: "center",
      margin: "auto",
    },

    filtering : {
      display: 'flex',
    
    }
  }));

  const classes = useStyles();
``
  const [initialTodos, setInitialTodos] = useState(initialData);
  const [todos, setTodos] = useState(initialData);
  const [modalOpen, setModalOpen] = useState(false);
  const [editedText, setEditedText] = useState("");
  const [currentTodo, setCurrentTodo] = useState(0);
  const [editedDate, setEditedDate] = useState(new Date());
  const [editedPrio, setEditedPrio] = useState(1);
  const [sortedTodos, setSortedTodos] = useState([]);
  const [selectedPrio, setSelectedPrio] = useState("");


  const handleOpenModal = (currentIndex) => {
    setCurrentTodo(currentIndex);
    setEditedText(todos[currentIndex].text);
    setEditedPrio(todos[currentIndex].prio);
    setModalOpen(true);

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
      prio: 1,
      index: todos.length + 1,
      date: new Date().toLocaleString(),
      subTasks: [],
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

  const increasePrio = (newIndex, updatedPrio) => {
    const update = todos.map((todo, index) =>
      index === newIndex ?
        { ...todo, prio: updatedPrio + 1 } : todo);
    setEditedPrio(updatedPrio + 1);
    setTodos(update);
  }

  const decreasePrio = (newIndex, updatedPrio) => {
    const update = todos.map((todo, index) =>
      index === newIndex ?
        { ...todo, prio: updatedPrio - 1 } : todo);
    setEditedPrio(updatedPrio - 1);
    setTodos(update);
  }

  const handlePrioIncrease = () => {
    increasePrio(currentTodo, editedPrio);
  }

  const handlePrioDecrease = () => {
    decreasePrio(currentTodo, editedPrio);
  }

  const handleAccordion = (newIndex) => {
    setOpen(true);
    setCurrentTodo(newIndex);
  }

  const handlePrioSort = (event) => {
    const selectedPrio = event.target.value;
    const filteredTodos = todos.filter((todo) => todo.prio === selectedPrio);
    setSortedTodos(filteredTodos);
    setSelectedPrio(selectedPrio);
  };

  const uniquePrios = [...new Set(todos.map((todo) => todo.prio))];

  const handleSortReset = () => {
    setTodos(initialTodos);
    setSortedTodos([]);
    setSelectedPrio("");
  };
  


  return (
    <div className={classes.listStyle}>
      <Typography variant="h4" style={{ marginLeft: 200, color: "#3d424f" }}>
        TODO APP
      </Typography>
      <TextInput onAddTodo={handleAddTodo} />
    <div className={classes.filtering}>
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx= {{width: 100}}>
        <InputLabel id="demo-simple-select-label">Prio</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Prio"
          value={selectedPrio}
          onChange={handlePrioSort}
        >
          {todos.length > 0 &&
              uniquePrios.map((priority) => (
                <MenuItem key={priority} value={priority}>
                  {priority}
                </MenuItem>
              ))}
        </Select>
      </FormControl>
    </Box>
    <ButtonComponent onClick={handleSortReset} label="Reset Fillter" />
    </div>
    <div>
  {/* Render todos */}
  {selectedPrio === "" ? (
    todos.length > 0 ? (
      todos.map((todo, index) => (
        <Todo
          key={index}
          labelNumber={index}
          date={todo.date}
          text={todo.text}
          prio={todo.prio}
          subtasks={todo.subTasks}
          onDeleteTodo={handleDeleteTodo}
          openModal={() => handleOpenModal(index)}
          handleClick={() => handleAccordion(todos.index)}
        />
      ))
    ) : ("")
  ) : sortedTodos.length > 0 ? (
    sortedTodos.map((todo, index) => (
      <Todo
        key={index}
        labelNumber={index}
        date={todo.date}
        text={todo.text}
        prio={todo.prio}
        subtasks={todo.subTasks}
        onDeleteTodo={handleDeleteTodo}
        openModal={() => handleOpenModal(index)}
        handleClick={() => handleAccordion(todos.index)}
      />
    ))
  ) : ("")}
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
        prio={editedPrio}
        increasePrio={handlePrioIncrease}
        decreasePrio={handlePrioDecrease}
      />
      
    </div>
  );
}

export default List;
