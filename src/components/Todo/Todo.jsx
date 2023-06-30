import React, { useState } from 'react';
import { Divider, Card, CardContent, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import CustomModal from '../Modal/CustomModal';
import { TaskAlt } from '@mui/icons-material';

function Todo({ index, date, text, onUpdateText, onDeleteTodo }) {
  const useStyles = makeStyles((theme) => ({
    todoStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 610,
      paddingTop: 8,
      height: 66,
      marginTop: 16,
      margin: 'auto',
      border: 'solid 1px #bfc9c2',
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
      color: 'grey',
      fontSize: '9px !important',
    },
    card: {
      paddingTop: 8,
    },
    buttonStyle: {
      backgroundColor: '#212d40',
      borderRadius: 0,
      height: 30,
      maxWidth: 20,
    },
  }));

  const [modalOpen, setModalOpen] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [editedDate, setEditedDate] = useState(date); 


  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleTextChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleSave = () => {
    onUpdateText(index, editedText);
    setEditedDate( new Date().toLocaleString()); 
    handleCloseModal();
  };

  const deleteTodo = () => {
    onDeleteTodo(index);
  };

  const handleDone = () => {
    onDeleteTodo(index);
  };

  const classes = useStyles();

  return (
    <Card className={classes.todoStyle}>
        <CardContent>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton aria-label='taskAlt' onClick={handleDone}>
            <TaskAlt/>
          </IconButton>
          <div>
            <Typography variant="subtitle2" className={classes.indexStyle}>
              TODO # {index}
            </Typography>
            <div className={classes.textWrapper}>
              <Typography variant="body1">{text}</Typography>
            </div>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <Typography variant="subtitle2" className={classes.dateStyle}>
              {editedDate}
            </Typography>
          </div>
          <div>
            <IconButton aria-label="edit" onClick={handleOpenModal}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={deleteTodo}>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </CardContent>
      {modalOpen && (
        <CustomModal
          text={editedText}
          handleTextChange={handleTextChange}
          handleSave={handleSave}
          handleClose={handleCloseModal}
          deleteTodo={onDeleteTodo}
        />
      )}
    </Card>
  );
}

export default Todo;
