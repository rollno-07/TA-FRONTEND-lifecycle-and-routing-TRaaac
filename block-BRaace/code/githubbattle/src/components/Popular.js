import React from "react";
import axios from "axios";

class Popural extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      tags: "All",
    };
  }
  changeTag = (event) => {
    this.setState({
      tags: event.target.innerText,
    });
  };
  componentDidMount() {
    axios
      .get(
        `https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.tags}&sort=stars&order=desc&type=Repositories`
      )
      .then((res) => {
        const data = res.data;
        this.setState({ data: data.items });
      });
  }
  componentDidUpdate(_prevProps, prevState) {
    if (prevState.tags !== this.state.tags) {
      axios
        .get(
          `https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.tags}&sort=stars&order=desc&type=Repositories`
        )
        .then((res) => {
          const data = res.data;
          this.setState({ data: data.items });
        });
    }
  }

  render() {
    let tags = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    console.log(this.state.data);
    return (
      <>
        <span>
          <ul className="tags ">
            {tags.map((tag) => (
              <li
                onClick={(event) => this.changeTag(event)}
                className={this.state.tags === tag ? "active" : ""}
              >
                {tag}
              </li>
            ))}
          </ul>
        </span>

        <div className="card">
          {this.state.data.map((user, index) => (
            <div className="innerCard">
              <h1>#{index + 1}</h1>
              <img src={user.owner.avatar_url} alt={user.name} />
              <h2>{user.owner.login}</h2>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default Popural;
