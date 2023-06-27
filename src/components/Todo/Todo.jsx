import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

function Todo({ index, date, text }) {

    const useStyles = makeStyles((theme) => ({
        todoStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 600,
            paddingTop: 8,
            height: 66,
            marginTop: 16,
            margin: "auto",
            border: "solid 1px #bfc9c2",
            borderRadius: 50,
            boxShadow: 2,
        },
        indexStyle: {
            minWidth: 400,
        },

        textWrapper: {
            marginTop: 3,
        },

        dateStyle: {
            color: "grey",
            fontSize: "10px !important",
        },

        card: {
            paddingTop: 8,
        }
    }))

    const classes = useStyles();

    return (
        <Card className={classes.todoStyle}>
            <CardContent>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>
                    <Typography
                        variant="subtitle2"
                        className={classes.indexStyle}>
                        TODO # {index}
                    </Typography>
                    <div className={classes.textWrapper}>
                    <Typography
                        variant="body1">
                        {text}
                    </Typography>
                </div>
                    </div>
                    <div style={{ marginLeft: 'auto' }}>
                        <Typography
                            variant="subtitle2"
                            className={classes.dateStyle}>
                            {date}
                        </Typography>
                    </div>
                </div>
                
            </CardContent>
        </Card>
    )
}

export default Todo;
