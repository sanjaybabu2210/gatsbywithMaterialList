

// import React from 'react'
// import Link from 'gatsby-link'

// const list = () => (
//   <div>
//     <h1>Welcome to my website</h1>
//     <p>This is a sample site for the Gatsby crash course</p>
//   </div>
// )

// export default list

import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';





const [states, setstates] = useState(['pune','kanpur','punjab','rajastan','parent','maharashtra','karnataka','kolkata','kerala','jammu','pondicherry','assam',
'west bengal','orissa','gujarat']);


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


const ServicesPage = () => {
  
  const classes = useStyles();
return(
<div>

      <Autocomplete
        id="combo-box-demo"
        options={states}
        getOptionLabel={(option) => option}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
      />
  

  <p>
    This page contains list of states
  </p>



  <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">

      {
    	  this.states.map(key => {
        	return (   <ListItem button><ListItemText primary={key} /></ListItem>)}
        )
    }

      
  
      </List>

    </div>
    </div>

);
}

export default ServicesPage;
