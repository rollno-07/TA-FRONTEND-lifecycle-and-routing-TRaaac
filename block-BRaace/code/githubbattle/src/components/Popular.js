import React from "react";

class Popural extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      tags: "",
    };
  }

  render() {
    let tags = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    return (
      <>
        <span>
          <ul className="tags ">
            {tags.map((tag) => (
              <li>{tag}</li>
            ))}
          </ul>
        </span>
        <form>
          <input type="text" name="firstname" placeholder="firstname"></input>
          <input type="text" name="lastname" placeholder="lastname"></input>
          <input name="DOB" type="text" placeholder="DOB"></input>
          <input type="password" placeholder="password" name="password"></input>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
export default Popural;
