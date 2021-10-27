import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import configureStore, { demoState } from "./store/configureStore";
import "normalize.css/normalize.css";
// import { Switch } from "react-router";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { addBook } from "./actions/booklist";

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
import SearchBar from "./Components/SearchBar";

const store = configureStore();
const state = store.getState();

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
})

store.dispatch(addBook(demoState.booklist[0]));
store.dispatch(addBook(demoState.booklist[1]));
store.dispatch(addBook(demoState.booklist[0]));
store.dispatch(addBook(demoState.booklist[1]));
store.dispatch(addBook(demoState.booklist[0]));
store.dispatch(addBook(demoState.booklist[1]));
store.dispatch(addBook(demoState.booklist[1]));

// Stylesheets
import "./styles/styles.scss";
import WishList from "./Components/WishList";

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

            <Route exact path="/registration">
              <Registration />
            </Route>

            <Route exact path="/home">
              <NavBar />
              <SearchBar placeholder='Search Library' />
              <HomePage user={this.state.user}/>
            </Route>

            <Route exact path="/collections">
              <NavBar />
              <SearchBar placeholder='Search Collections' />
              <Collections />
            </Route>

            <Route path="/addbook">
              <NavBar />
              <SearchBar placeholder='Search for a book' />
              <AddBook />
            </Route>

            <Route path="/editbook">
              <NavBar />
              <EditBook />
            </Route>

            <Route exact path="/wishlist">
              <NavBar />
              <SearchBar placeholder='Search Wishlist' />
              <WishList />
            </Route>

            <Route exact path="/favorites">
              <NavBar />
              <SearchBar placeholder='Search Favorites' />
              <Favorites />
            </Route>

          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

const jsx = (
  <Provider store={store}>
      <App />
  </Provider>
);

ReactDOM.render(jsx, document.querySelector("#root"));
