import React, { Component } from "react";
// import Title from "./Title";
import Photowall from "./Photowall";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Single from "./Single";

class Main extends Component {
  // Constructor
  constructor() {
    super();
  }

  // RENDER METHOD
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>
          <Link to="/">Photowall</Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Photowall {...this.props} />
            </div>
          )}
        />

        <Route path="/AddPhoto" render={({ history }) => <AddPhoto {...this.props} onHistory={history} />} />
        <Route path="/single/:id" render={(params) => <Single {...this.props} {...params} />} />
      </div>
    );
  }
}

/*
  // REMOVE PHOTO METHOD
  removePhoto(postRemoved) {
    console.log(postRemoved.description);
    this.setState((state) => ({
      posts: state.posts.filter((post) => post !== postRemoved),
    }));
  }

  // Add PHOTO METHOD
  addPhoto(postSubmitted) {
    this.setState((state) => ({
      posts: state.posts.concat([postSubmitted]),
    }));
  }

  // Component Mount
  componentDidMount() {
    const data = simulateFetchFromDB();
    this.setState({
      posts: data,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.posts);
    console.log(this.state);
  }

  // RENDER METHOD
  render() {
    console.log("this.state.posts");
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Title title={"Photowall"} />
              <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate} />
            </div>
          )}
        />

        <Route
          path="/AddPhoto"
          render={({ history }) => (
            <AddPhoto
              onAddPhoto={(addedPost) => {
                this.addPhoto(addedPost);
                history.push("/");
              }}
            />
          )}
        />
      </div>
    );
  }


function simulateFetchFromDB() {
  return [
    {
      id: 0,
      description: "beautiful landscape",
      imageLink:
        "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-europeanbest-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg",
    },
    {
      id: 1,
      description: "Aliens???",
      imageLink: "https://images4.alphacoders.com/104/104476.jpg",
    },
    {
      id: 2,
      description: "On a vacation!",
      imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg",
    },
  ];
}
*/

export default Main;
