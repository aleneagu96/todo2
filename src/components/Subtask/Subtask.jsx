import { makeStyles } from "@mui/styles";
import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Subtask ({subtasks}) {

    const numSubtasks = subtasks.length;
    

    const useStyles = makeStyles((theme) => ({
        subtaskStyle:{
            display:'flex',
            alignItems:'center',
            paddingLeft:10,
        },
    }))

    const classes = useStyles();

    return (
        <div >
            <Accordion className={classes.subtaskStyle}>
                <AccordionSummary className={classes.expand}
                expandIcon={<ExpandMoreIcon />}>
                 {numSubtasks} Subtasks :</AccordionSummary>
                <div className={classes.test}>
                <AccordionDetails>
                    {/* replace with actual subtasks */}
                    {subtasks.map((subtask, index) => (
                    <Typography key={index} variant="subtitle2">{subtask}</Typography>
                        
                    ))}
                </AccordionDetails>
                </div>
            </Accordion>
        </div>
    )
}

export default Subtask;