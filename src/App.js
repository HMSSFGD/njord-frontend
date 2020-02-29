import React from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleComponents from './components/GoogleComponents.js';
import Marker from './components/Marker.js';
import Map from './components/Map.js';
import Directions from './components/Directions.js';
import { 
  Fab, 
  CircularProgress,
} from '@material-ui/core/';
import Nature from '@material-ui/icons/Nature';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';



function App() {

  const theme = createMuiTheme({
    palette: {
      primary: green,
      secondary: blue,
      action: "#fff",
    },
    status: {
      danger: 'orange',
    },
  });

  return (
      <ThemeProvider theme={theme}>
        <div className="App">
          {/* <GoogleComponents>
            <Map>
            </Map>
          </GoogleComponents> */}
          <div className="fab">
              <Fab color="primary">
                  <Nature style={{ color: "#fff", position: 'absolute' }} />
                  <CircularProgress style={{ color: "#fff", position: 'absolute' }}/>
              </Fab>
          </div>
        </div>
        </ThemeProvider>
  );
}

export default App;
