import { React, Component } from "react";
import List from "./List";
import Title from "./Title";

class Main extends Component {
  render() {
    return (
      <div>
        <Title title={"ToDo List"} />
        <List tasks={["Mow the lawn", "Walk the dog"]} />
        <List tasks={["Hose the driveway", "Finish the laundry"]} />
      </div>
    );
  }
}

export default Main;
