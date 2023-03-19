import React from "react";
import ReactDOM from "react-dom";
// import Main from "./Components/Main";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from "./Redux/reducer";
import { Provider } from "react-redux";
import App from "./Components/App";
import "./styles/stylesheet.css";

/////////////////////////////////////////////////////////////////////////////////////
// CREATE HTML ELEMENT h1 AND RENDER IT
/////////////////////////////////////////////////////////////////////////////////////
/*
const elementH1 = React.createElement("p", null, "Hello World!");
ReactDOM.render(elementH1, document.getElementById("root"));
*/

// const taskList = ["Take out the thrash", "Shovel the driveway", "Walk the dog"];

/////////////////////////////////////////////////////////////////////////////////////
// CREATE LIST ELEMENTS AND RENDER IT
/////////////////////////////////////////////////////////////////////////////////////
/* 
const elementOL = React.createElement(
  "ol",
  null,
  React.createElement("li", null, "Take out the thrash"),
  React.createElement("li", null, "Shovel the driveway"),
  React.createElement("li", null, "Walk the dog")
); 
*/

/////////////////////////////////////////////////////////////////////////////////////
// CREATE LIST ELEMENTS IN BETTER WAY AND RENDER IT
/////////////////////////////////////////////////////////////////////////////////////
/* 
const elementOL = React.createElement(
  "ol",
  null,
  taskList.map((task, index) => React.createElement("li", { key: index }, task))
);

ReactDOM.render(elementOL, document.getElementById("root"));
*/

/////////////////////////////////////////////////////////////////////////////////////
// CREATE LIST USING JSX (JAVASCRIPT XML)
/////////////////////////////////////////////////////////////////////////////////////
/*
const elementOL = (
  <div>
    <h2>Task List</h2>
    <ol>
      {taskList.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ol>
  </div>
);
ReactDOM.render(elementOL, document.getElementById("root"));
*/

/////////////////////////////////////////////////////////////////////////////////////
// CREATE LIST COMPONENT USING CLASS
/////////////////////////////////////////////////////////////////////////////////////
/*
class List extends Component {
  render() {
    return (
      <ol>
        {this.props.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    );
  }
}

class Title extends Component {
  render() {
    return <h2>{this.props.title}</h2>;
  }
}
*/

/*
class Main extends Component {
  render() {
    return (
      <div>
        <Title />
        <List />
      </div>
    );
  }
}
*/

/*
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
*/

// ReactDOM.render(<Main />, document.getElementById("root"));

/*
ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);
*/

/////////////////////////////////////////////////////////////////////////////////////
// USING REDUX
/////////////////////////////////////////////////////////////////////////////////////

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
