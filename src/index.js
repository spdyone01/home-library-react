import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
// import { Switch } from "react-router";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// Libraries for testing purposes
// import faker from 'faker';

// Components for app
import AddBook from "./Components/AddBook";
import Collections from "./Components/Collections";
import EditBook from "./Components/EditBook";
import Favorites from "./Components/Favorites";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar";
import PublicHomePage from "./Components/PublicHomePage";
import Registration from "./Components/Registration";

// Stylesheets
import "./styles/styles.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: `Bob`,
        email: "test@gmail.com",
        pass: "pass1",
        books: [
          {
            title: "Where the Red Fern Grows",
            ISBN: "23f2220asdf0930",
            author: "Wilson Rawls",
            synopsis: "The story of two dogs and a boy",
            pageCount: 188,
            bookImgSrc: "./media/Where_the_red_fern_grows.jpg"
          },
          {
            title: "Harry Potter and the Sorcerers Stone",
            ISBN: "asdf88a8ef383j",
            author: "J.K. Rowling",
            bookImgSrc: `/#}`
          }
        ],
        avatar: `/#}`,
        isLoggedIn: true
      }
    };
  }

  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/">
              <PublicHomePage />
            </Route>
            <Route exact path="/home">
              <NavBar />
              <HomePage />
            </Route>
            <Route exact path="/registration">
              <NavBar />
              <Registration />
            </Route>
            <Route exact path="/collections">
              <NavBar />
              <Collections />
            </Route>
            <Route exact path="/addbook">
              <NavBar />
              <AddBook />
            </Route>
            <Route path="/editbook">
              <NavBar />
              <EditBook />
            </Route>
            <Route exact path="/wishlist">
              <NavBar />
              <PublicHomePage />
            </Route>
            <Route exact path="/favorites">
              <NavBar />
              <Favorites />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
