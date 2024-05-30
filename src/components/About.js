import { Component } from "react";
import UserClass from "./UserClass";
import Contact from "./Contact";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("Parent component did mount");
  }
  render() {
    return (
      <div>
        {console.log("Parent render")}
        <h1>About Us</h1>
        <div>
          <label className="text-orange-400 m-2">User Name :</label>
          <UserContext.Consumer>
            {({ loggedInUser }) => loggedInUser}
          </UserContext.Consumer>
        </div>
        <UserClass name="Shraddha Sinha (Class)" />
        {/* <UserClass name="vikas Sinha (Class)" /> */}
        <Contact />
      </div>
    );
  }
}

export default About;
