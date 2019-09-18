import React from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"; // needed for material ui components 
import NavBar from './components/navbar/navbar.component';
import Search from './components/search/search.component';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar></NavBar>
          <Search></Search>
        </div>
      </MuiThemeProvider>
    );
  }
}


export default App;
