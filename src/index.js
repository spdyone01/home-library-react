import React from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import "normalize.css/normalize.css";
// import { Switch } from "react-router";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// Libraries for testing purposes
// import faker from 'faker';

// Components for app
import AddBook from "./Components/AddBook";
import BookForm from "./Components/BookForm";
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
import WishList from "./Components/WishList";
import { getDefaultNormalizer } from "@testing-library/dom";

/*************************************************************
*
*   TEST DATA
*
**************************************************************/



const testUser = {
    // name: faker.name.firstName(),
    email: 'test@gmail.com', // test user on database
    pass: 'pass1234',  // test user pass on database
    books: [ 9780316333528, 9781408894620, 9780152547684 ],
    isLoggedIn: false
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: ``,
        email: "",
        books: [],
        isLoggedIn: false
      }
    };
  }
  
  // This is so if the user backs or navs to this page then they'll have to re-login.
  logoutUser = () => {
    this.setState(() => ({
        user: { 
            name: '',
            email: '',
            books: [],
            isLoggedIn: false }
    }))
    /* 
    *
    *   Logout of google, disconnect from firebase, etc...
    * 
    */
  }

  componentDidMount() {
      this.logoutUser();
  }

  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/">
              <PublicHomePage user={this.state.user}/>
            </Route>
            <Route exact path="/home">
              <NavBar />
              <HomePage user={this.state.user}/>
            </Route>
            <Route exact path="/registration">
              <Registration />
            </Route>
            <Route exact path="/collections">
              <NavBar />
              <Collections />
            </Route>
            <Route path="/addbook">
              <NavBar />
              <AddBook />
            </Route>
            <Route path="/editbook">
              <NavBar />
              <EditBook />
            </Route>
            <Route exact path="/wishlist">
              <NavBar />
              <WishList />
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
