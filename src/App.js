import { Typography } from '@mui/material';
import './App.css';
import List from './components/List/List';
import { makeStyles } from '@mui/styles';


function App() {

  const useStyles= makeStyles((theme) => ({
    appStyle:{
      backgroundColor: '#f2f5f3',
      minHeight:700,
    
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.appStyle}>
        <br></br>
        <List/>
    </div>
  );
}

export default App;
