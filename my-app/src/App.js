import React from 'react';
import './App.css';
import UserCard from "./Components/UserCard"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      userFollowers: []
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/b-marshall218")
      .then(res => res.json())
      .then(res => this.setState({ userData: res }))
      .catch(err => console.log(err));

    fetch("https://api.github.com/users/followers")
      .then(res => res.json())
      .then(res => this.setState({ userFollowers: res }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1>GitHub User Card</h1>
          <UserCard userData={this.state.userData} />
        </header>
        <header className="App-header-User-Followers">
          <h1>GitHub User Followers</h1>
          <h3>{this.state.userFollowers.login}</h3>
        </header>

      </div>
    );
  }
}

export default App;
