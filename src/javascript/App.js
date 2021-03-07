import React, { Component } from "react";
import Navbar from "../javascript/Navbar.js";
import axios from "axios";
import Profile from "../javascript/Profile.js";
import Repos from "../javascript/Repos.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      github: {
        url: "https://api.github.com/users",
        client_id: "ae61172cc3868a1760a0",
        client_secret: "7948027c26919885cb5a916764c23ebc9dad1d7d",
        count: 6,
        sort: "created: asc",
      },
      user: [],
      repos: [],
    };
  }
  getUser = (e) => {
    const user = e.target.value;
    const { url, client_id, client_secret, count, sort } = this.state.github;
    axios
      .get(
        `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
      )
      .then(({ data }) => this.setState({ user: data }));
    axios
      .get(
        `${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`
      )
      .then(({ data }) => this.setState({ repos: data }));
  };
    renderProfile = ()=>{
      const { user, repos } = this.state;
      return(
        <div className="row">
          <div className="col md4">
            <Profile user={user} />
          </div>
          <div className="col md8">
            {repos.map(repo => <Repos key={repo.name} repo={repo} />)}
          </div> 
        </div>
      )
    }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="card card-body">
            <h1>Pesquisar Usuário</h1>
            <p className="lead">Procure por um usuário do Github</p>
            <input
              onChange={this.getUser}
              id="search"
              type="text"
              className="form-control"
              required
            />
          </div>
          {this.state.user.length !== 0 ? this.renderProfile(): null}
        </div>
      </div>
    );
  }
}

export default App;
