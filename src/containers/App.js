import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Route, Switch } from "react-router-dom";
import Header from '../components/Header/Header';
import Overview from './Overview';
import Detail from './Detail';
import Form from './Form';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
text-align: center;
`;

class App extends Component {
  render() {
    return (
        <>
          <GlobalStyle />
            <AppWrapper>
            <Header />
              <Switch>
                <Route exact path="/" component={Overview} />
                <Route path="/new" component={Form} />
                <Route path="/list/:id/new" component={Form} />
                <Route path="/list/:id" component={Detail} />
              </Switch>
          </AppWrapper>
        </>
    );
  }
}

export default App;
