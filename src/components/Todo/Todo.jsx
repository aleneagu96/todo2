import React, { useState } from "react";
import { Divider, Card, CardContent, Typography, Button, Accordion } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { TaskAlt } from "@mui/icons-material";
import Subtask from "../Subtask/Subtask";

function Todo({ labelNumber, date, text, prio, subtasks, numSubtasks, onDeleteTodo, openModal}) {
  const useStyles = makeStyles((theme) => ({
    todoStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 600,
      paddingTop: 8,
      // height: 66,
      marginTop: 16,
      margin: "auto",
      border: "solid 1px #bfc9c2",
      borderRadius: 50,
      boxShadow: 2,
    },

    completedTodo: {
      opacity: 0.5,
    },

    indexStyle: {
      minWidth: 400,
    },
    textWrapper: {
      marginTop: 3,
    },
    dateStyle: {
      color: "grey",
      fontSize: "9px !important",
    },
    card: {
      paddingTop: 8,
    },
    buttonStyle: {
      backgroundColor: "#212d40",
      borderRadius: 0,
      height: 30,
      maxWidth: 20,
    },
  }));

 

  const classes = useStyles();

  return (
    <Card className={classes.todoStyle}>
      <CardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton aria-label="taskAlt" onClick={onDeleteTodo}>
            <TaskAlt />
          </IconButton>
          <div>
            <Typography variant="subtitle2" className={classes.indexStyle}>
              TODO # {labelNumber + 1} PRIO {prio}
            </Typography>
            <div className={classes.textWrapper}>
              <Typography variant="body1">{text}</Typography>
            </div>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <Typography variant="subtitle2" className={classes.dateStyle}>
              {date}
            </Typography>
          </div>
          <div>
            <IconButton aria-label="edit" onClick={openModal}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={onDeleteTodo}>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
        <br></br>
        <Subtask subtasks={subtasks}></Subtask>
      </CardContent>
    </Card>
  );
}

export default Todo;
