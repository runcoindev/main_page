import React from "react";
import { Route } from "wouter";
import Landing from "./pages/Landing";
import GlobalStyle from "./globalStyles";

const App = () => {
  
  return (
    <>
      <GlobalStyle />
      <Route exact path="/">
        <Landing />
      </Route>
    </>
  );


};

export default App;
