import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      main: "",
      info: "",
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          data: data,
          main: "name",
          info: data.results.map((user) => {
            return `${user.name.first} ${user.name.last}`;
          }),
        })
      );
  }
  handleRandomUser = () => {
    this.componentDidMount();
  };

  handleProfile = () => {
    this.state.data.results.map((user) => {
      return this.setState({
        main: "name",
        info: `${user.name.first} ${user.name.last}`,
      });
    });
  };
  handleEmail = () => {
    this.state.data.results.map((user) => {
      return this.setState({
        main: "email",
        info: user.email,
      });
    });
  };
  handleAge = () => {
    this.state.data.results.map((user) => {
      return this.setState({
        main: "age",
        info: user.registered.age,
      });
    });
  };
  handleStreet = () => {
    this.state.data.results.map((user) => {
      return this.setState({
        main: "street",
        info: user.location.street.name,
      });
    });
  };
  handlePhone = () => {
    this.state.data.results.map((user) => {
      return this.setState({
        main: "phone",
        info: user.phone,
      });
    });
  };
  handlePassword = () => {
    this.state.data.results.map((user) => {
      return this.setState({
        main: "password",
        info: user.login.password,
      });
    });
  };

  render() {
    if (!this.state.data) {
      return <h1>Loading...</h1>;
    }
    console.log(this.state.data);
    console.log(this.state.main, this.state.info);
    return (
      <>
        <div className="top"></div>
        <div class="bottom">
          <div className="card">
            {this.state.data.results.map((user) => {
              return (
                <>
                  <div className="upper">
                    <img src={user.picture.large} alt={user.name.first} />
                  </div>
                  <div className="lower">
                    <div className="info">
                      <h1>My {this.state.main} is</h1>
                      <h1>{this.state.info}</h1>
                    </div>

                    <div className="buttons">
                      <button onClick={this.handleProfile}></button>
                      <button onClick={this.handleEmail}></button>
                      <button onClick={this.handleAge}></button>
                      <button onClick={this.handleStreet}></button>
                      <button onClick={this.handlePhone}></button>
                      <button onClick={this.handlePassword}></button>
                    </div>
                    <button className="random" onClick={this.handleRandomUser}>
                      RandomUser
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;
