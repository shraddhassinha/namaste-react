import React from "react";
import Contact from "./Contact";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this.props.name, "Child constructor")
  }
  componentDidMount(){
    console.log(this.props.name, "Child component did mount")
  }

  render() {
    return (
      <div>
        {console.log(this.props.name,"Child render")}
        <h3>{this.props.name}</h3>
        <h3>Count: {this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase count
        </button>
        <h2>Mumbaikar</h2>
      </div>
    );
  }
}

export default UserClass;
