import { connect } from "react-redux";
import Main from "./Main";
import { bindActionCreators } from "redux";
import * as actions from "../Redux/actions";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;
