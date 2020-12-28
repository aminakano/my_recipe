import React, { Component } from 'react';
import styles from "./App.module.css";
import { Cards } from "./components";
import img from "./images/icon.png";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { themeFile } from "./util/theme";

const theme = createMuiTheme(themeFile);

export class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className={styles.container}>
          <img src={img} alt="Diamond" />
          <Cards />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
