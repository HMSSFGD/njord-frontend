import React, { useState } from 'react';
import './App.css';
import { 
  Fab, 
  CircularProgress,
  SwipeableDrawer,
  Button,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction
} from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import Nature from '@material-ui/icons/Nature';
import Done from '@material-ui/icons/Done';
import Close from '@material-ui/icons/Close';

import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import green from '@material-ui/core/colors/green';
import Map from './Map.js';

export default function App() {
  let fabContent = <Nature style={{ color: "#fff", position: 'absolute' }} />
  
  const lightMode = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#002036'
      },
      secondary: green,
      action: "#fff",
    },
    status: {
      danger: 'orange',
    },
  });

  const darkMode = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#303030'
      }
    },
  });

  const [state, setState] = useState(0);
  const [drawerState, setDrawerState] = useState(false);
  const [mapTheme, setMapTheme] = useState(0);

  const themeMode = [lightMode, darkMode]

  switch(state) {
    case 0:
      fabContent = <Nature style={{ color: "#fff", position: 'absolute' }} />      
      break;
    case 1:
      fabContent = 
        <React.Fragment>
          <Nature style={{ color: "#fff", position: 'absolute' }} />
          <CircularProgress style={{ color: "#fff", position: 'absolute' }}/>
        </React.Fragment>
      break;
    case 2:
      fabContent = 
        <React.Fragment>
          <Done style={{ color: "#fff", position: 'absolute' }} />
        </React.Fragment>
        setTimeout(() => setState(0), 1000)
      break;
    default:
    case 3:
      fabContent = 
        <React.Fragment>
          <Close style={{ color: "#fff", position: 'absolute' }} />
        </React.Fragment>
        setTimeout(() => setState(0), 1000)
      break;
  }

  const toggleDrawer = (open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerState(open)
  }

  return (
    <>
      <ThemeProvider theme={themeMode[mapTheme]}>
        {/* <AppBar position="fixed" style={{backdropFilter: 'blur(5px)', opacity: '100%', boxShadow: 'none', color: 'white', boxShadow: 'none', minHeight: 100, background: 'linear-gradient(90deg, rgba(0,32,54,1) 0%, rgba(57,212,162,0.9) 100%)'}}> */}
        <AppBar position="fixed" style={{backdropFilter: 'blur(5px)', opacity: '100%', color: 'white', boxShadow: 'none', minHeight: 100, background: 'linear-gradient(90deg, rgba(24,30,48,1) 0%, rgba(16,44,47,1) 38%, rgba(42,15,62,0.95) 100%)'}}>
          <Toolbar>
            <Button onClick={toggleDrawer(true)}>
              {/* <MenuRoundedIcon style={{color: 'white'}}/> */}
              <div style = {{fontFamily: 'Cormorant Garamond', fontSize: '35pt', color: 'white'}}>
                Njord.
              </div>
            </Button>
          </Toolbar>
        </AppBar>
        <div className="fab">
            <Fab color="primary" onClick={() => {state === 2 ? setState(0) : setState(1)}}>
              {fabContent}
            </Fab>
        </div>
      </ThemeProvider>
      <SwipeableDrawer open={drawerState} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
        <List>
          <ListItem></ListItem>
            <Button>
              <MenuRoundedIcon onClick={toggleDrawer(false)}/>
            </Button>
          <ListItem>
          <ListItemIcon>
            <Brightness2OutlinedIcon />
          </ListItemIcon>

          <ListItemText>
            <div style={{fontFamily: 'Trade Winds'}}>
              xXx__Dark Mode__xXx___
            </div>
          </ListItemText>
            <ListItemSecondaryAction>
              <Switch 
                onChange={() => { mapTheme === 0 ? setMapTheme(1) : setMapTheme(0) }}
                value="darkMode"
                color="primary"
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <Map />
    </>
  );
}
