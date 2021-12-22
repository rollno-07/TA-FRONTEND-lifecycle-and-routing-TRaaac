import { NavLink } from "react-router-dom";
import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: true,
    };
  }
  handleClick = () => {
    this.setState({
      theme: !this.state.theme,
    });
  };

  render() {
    console.log(this.state.theme);
    return (
      <>
        <div className="header">
          <div className="navlink">
            <NavLink to="/" exact className="nav" activeClassName="active">
              <span>Popular</span>
            </NavLink>
            <NavLink to="/battle" className="nav" activeClassName="active">
              <span>Battle</span>
            </NavLink>
          </div>
          <div className="">
            <p onClick={this.handleClick} className="theme">
              {this.state.theme === true ? "🔦" : "💡"}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
