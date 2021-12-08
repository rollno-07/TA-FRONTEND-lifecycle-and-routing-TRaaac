import "./App.css";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Header from "./Header";
import React from "react";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Sidebar />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
