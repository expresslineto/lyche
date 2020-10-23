import React from 'react';

import './App.css';
import MenuForm from './menu';
import list from "./image/image";



import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
  img: {
    margin: 0,
    display: "flex",

    maxWidth: "100%",
    backgroundColor: "white",
    alignItems: "center",
  },
  storeInfo:{
    fontFamily:"Helvetica",
    fontStyle:"italic",
  },
}));

function App() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  return (
    <div className="App">
      {/* <Paper>
      <Grid container>
 
      </Paper> */}
      
      {list.map((item, index) => {
          return <MenuForm id={index} itemsImage={item.itemsImage} />;

      })}
     
    </div>
  );
}

export default App;
