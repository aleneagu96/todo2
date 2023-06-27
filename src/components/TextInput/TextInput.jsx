import { TextField } from "@mui/material";
import React, { useState } from "react";
import ButtonComponent from "../Button/ButtonComponent";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    inputVal: {
        alignItems: "center",
        display: 'flex',
        gap: 20,
        margin: 'auto',
        borderRadius: "0 !important",
        justifyContent: 'center',
        
    },
    textField: {
        border: "solid 1px #6b718b !important",
        borderRadius: '0 !important',
        width: 453, 
        borderRadius: "0 !important",


       
    },
    
}));

function TextInput({ onAddTodo }) {
    const classes = useStyles();

    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const addTodo = () => {
        if (inputValue.trim() !== "") {
            onAddTodo(inputValue);
            setInputValue("");
        }
    };

    return (
        <div className={classes.inputVal}>
            <TextField
                variant="outlined"
                className={classes.textField}
                label="Enter a task"
                value={inputValue}
                onChange={handleChange}
            />
            <ButtonComponent
                size="large"
                label="Add"
                onClick={addTodo}
            />
        </div>
    );
}

export default TextInput;
