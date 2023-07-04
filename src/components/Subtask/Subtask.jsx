import { makeStyles } from "@mui/styles";
import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Subtask () {
    

    const useStyles = makeStyles((theme) => ({
        subtaskStyle:{
            display:'flex',
            alignItems:'center',
            paddingLeft:10,


        },

        test: {
            width:300,
        }
    }))

    const classes = useStyles();

    return (
        <div >
            <Accordion className={classes.subtaskStyle}>
                <AccordionSummary className={classes.expand}
                expandIcon={<ExpandMoreIcon />}>
                Subtasks</AccordionSummary>
                <div className={classes.test}>
                <AccordionDetails>
                    {/* replace with actual subtasks */}
                    <Typography variant="subtitle2">Subtask 1</Typography>
                    <Typography variant="subtitle2">Subtask 2</Typography>
                    <Typography variant="subtitle2">Subtask 3</Typography>


                </AccordionDetails>
                </div>
            </Accordion>
        </div>
    )
}

export default Subtask;