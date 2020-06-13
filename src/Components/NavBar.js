import React,{useContext, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import {useStyles} from '../Styles/Navbarstyles'
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
//import {ThemeContext} from '../Contexts/ThemeContext'

 function NavBar(props) {
  const [Query,setQuery]=useState('')

  // const {changeTheme,isDark}=useContext(ThemeContext)
  const {classes}= props

//  const styles={
//      backgroundColor: isDark? '':'darkblue'
//  }

  return (
    <div  className={classes.root}>
      <AppBar  position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            hooks masti
          </Typography>
          <IconButton
            containerElement={<Link to={`/search/${Query}`} />}
            linkButton={true}
            
            >
            <SearchIcon />
            </IconButton>
            {/* <Switch
            //onChange={changeTheme}
            defaultChecked
            color="default"
            inputProps={{ 'aria-label': 'checkbox with default color' }}
          /> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
            </div>
            <InputBase
              name='Query'
              placeholder="Search…"
              value={Query}
              onChange={(e)=> setQuery(e.target.value)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withStyles(useStyles)(NavBar)