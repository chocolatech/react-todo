import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TButton from './components/t-button/t-button.component.js';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h2>Welcome to React</h2>
          <TButton />
        </div>

      </MuiThemeProvider>
    );
  }
}

export default App;
