import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TDialog from './components/t-dialog/t-dialog.component.jsx';

injectTapEventPlugin();
class App extends Component {
  
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h2>Welcome to React</h2>
          <TDialog />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
