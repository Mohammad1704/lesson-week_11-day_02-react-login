import React, { Component } from "react";
import "./App.css";
import { getUser, logout } from "./services/AuthService";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import Articles from "./components/Articles";

class App extends Component {
  state = {
    user: null
  };
  componentDidMount() {
    // check if we have a token in the local storage
    const user = getUser();
    console.log(user);
    if (user) {
      this.setState({ user });
    }
  }

  onLogin = () => {
    this.setState({ user: getUser() });
  };
  onLogout = () => {
    logout();
    this.setState({ user: null });
    console.log("this button works");
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          {this.state.user ? (
            <div>
              <Profile user={this.state.user} onLogout={this.onLogout} />
              <Articles />
            </div>
          ) : (
            <LoginForm onLogin={this.onLogin} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
