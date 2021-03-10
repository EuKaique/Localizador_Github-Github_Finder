import React, { Component } from "react";
import Api from "../service/Api.js";
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
        count: 5,
        sort: "created: asc",
        headers: {
          'User-Agent': 'request'
        }
      },
      user: [],
      repos: [],
      repos_starred: [],
    };
  }
  getUser = (e) => {
    const user = e.target.value;
    const { url, client_id, client_secret, count, sort } = this.state.github;
    Api.get(
      `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
    ).then(({ data }) => this.setState({ user: data }));
    Api.get(
      `${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`
    ).then(({ data }) => this.setState({ repos: data }));
    Api.get(
      `${url}/${user}GET/starred?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`
    ).then(({ data }) => this.setState({ repos_starred: data }));
  };
  renderProfile = () => {
    const { user, repos } = this.state;
    return (
      <div className="row">
        <div className="col md4">
          <Profile user={user} />
        </div>
        <div className="col md8">
          {repos.map((repo) => (
            <Repos key={repo.name} repo={repo} />
          ))}
        </div>
      </div>
    );
  };
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-primary bg-dark justify-content-between">
          <a className="navbar-brand text-light" href="http://localhost:3000/">
            Search Users Github
          </a>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Buscar Usuário"
              aria-label="Search"
              onChange={this.getUser}
              required
            />
          </form>
        </nav>
        <main id="main">
          {this.state.user.length !== 0
            ? (document.getElementById("main").hidden = true)
            : null}
          <center>
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTA1LjQgNTA1LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwNS40IDUwNS40OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQzNy4xLDIzMy40NWMxNC44LTEwLjQsMjQuNi0yNy43LDI0LjYtNDcuMmMwLTMxLjktMjUuOC01Ny43LTU3LjctNTcuN2MtMzEuOSwwLTU3LjcsMjUuOC01Ny43LDU3LjcNCgkJCWMwLDE5LjUsOS43LDM2LjgsMjQuNiw0Ny4yYy0xMi43LDQuNC0yNC4zLDExLjItMzQuMSwyMGMtMTMuNS0xMS41LTI5LjQtMjAuMy00Ni44LTI1LjVjMjEuMS0xMi44LDM1LjMtMzYuMSwzNS4zLTYyLjYNCgkJCWMwLTQwLjQtMzIuNy03My4xLTczLjEtNzMuMWMtNDAuNCwwLTczLjEsMzIuOC03My4xLDczLjFjMCwyNi41LDE0LjEsNDkuOCwzNS4zLDYyLjZjLTE3LjIsNS4yLTMyLjksMTMuOS00Ni4zLDI1LjINCgkJCWMtOS44LTguNi0yMS4yLTE1LjMtMzMuNy0xOS42YzE0LjgtMTAuNCwyNC42LTI3LjcsMjQuNi00Ny4yYzAtMzEuOS0yNS44LTU3LjctNTcuNy01Ny43cy01Ny43LDI1LjgtNTcuNyw1Ny43DQoJCQljMCwxOS41LDkuNywzNi44LDI0LjYsNDcuMkMyOC41LDI0Ny4yNSwwLDI4NC45NSwwLDMyOS4yNXY2LjZjMCwwLjIsMC4yLDAuNCwwLjQsMC40aDEyMi4zYy0wLjcsNS41LTEuMSwxMS4yLTEuMSwxNi45djYuOA0KCQkJYzAsMjkuNCwyMy44LDUzLjIsNTMuMiw1My4yaDE1NWMyOS40LDAsNTMuMi0yMy44LDUzLjItNTMuMnYtNi44YzAtNS43LTAuNC0xMS40LTEuMS0xNi45SDUwNWMwLjIsMCwwLjQtMC4yLDAuNC0wLjR2LTYuNg0KCQkJQzUwNS4yLDI4NC44NSw0NzYuOCwyNDcuMTUsNDM3LjEsMjMzLjQ1eiBNMzYyLjMsMTg2LjE1YzAtMjMsMTguNy00MS43LDQxLjctNDEuN3M0MS43LDE4LjcsNDEuNyw0MS43DQoJCQljMCwyMi43LTE4LjMsNDEuMi00MC45LDQxLjdjLTAuMywwLTAuNSwwLTAuOCwwcy0wLjUsMC0wLjgsMEMzODAuNSwyMjcuNDUsMzYyLjMsMjA4Ljk1LDM2Mi4zLDE4Ni4xNXogTTE5NC45LDE2NS4zNQ0KCQkJYzAtMzEuNSwyNS42LTU3LjEsNTcuMS01Ny4xczU3LjEsMjUuNiw1Ny4xLDU3LjFjMCwzMC40LTIzLjksNTUuMy01My44LDU3Yy0xLjEsMC0yLjIsMC0zLjMsMGMtMS4xLDAtMi4yLDAtMy4zLDANCgkJCUMyMTguOCwyMjAuNjUsMTk0LjksMTk1Ljc1LDE5NC45LDE2NS4zNXogTTU5LjMsMTg2LjE1YzAtMjMsMTguNy00MS43LDQxLjctNDEuN3M0MS43LDE4LjcsNDEuNyw0MS43YzAsMjIuNy0xOC4zLDQxLjItNDAuOSw0MS43DQoJCQljLTAuMywwLTAuNSwwLTAuOCwwcy0wLjUsMC0wLjgsMEM3Ny42LDIyNy40NSw1OS4zLDIwOC45NSw1OS4zLDE4Ni4xNXogTTEyNS41LDMyMC4xNUgxNi4yYzQuNS00Mi42LDQwLjUtNzYsODQuMi03Ni4zDQoJCQljMC4yLDAsMC40LDAsMC42LDBzMC40LDAsMC42LDBjMjAuOCwwLjEsMzkuOCw3LjgsNTQuNSwyMC4zQzE0MS43LDI3OS43NSwxMzEsMjk4Ljk1LDEyNS41LDMyMC4xNXogTTM2Ni44LDM1OS45NQ0KCQkJYzAsMjAuNS0xNi43LDM3LjItMzcuMiwzNy4yaC0xNTVjLTIwLjUsMC0zNy4yLTE2LjctMzcuMi0zNy4ydi02LjhjMC02Mi4xLDQ5LjYtMTEyLjksMTExLjMtMTE0LjdjMS4xLDAuMSwyLjMsMC4xLDMuNCwwLjENCgkJCXMyLjMsMCwzLjQtMC4xYzYxLjcsMS44LDExMS4zLDUyLjYsMTExLjMsMTE0LjdWMzU5Ljk1eiBNMzc4LjcsMzIwLjE1Yy01LjUtMjEuMS0xNi00MC0zMC4zLTU1LjZjMTQuOC0xMi44LDM0LTIwLjUsNTUtMjAuNw0KCQkJYzAuMiwwLDAuNCwwLDAuNiwwczAuNCwwLDAuNiwwYzQzLjcsMC4zLDc5LjcsMzMuNyw4NC4yLDc2LjNIMzc4Ljd6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
              className="img-responsive"
              id="img-index"
              alt="img"
            />
            <h3>Pesquise por qualquer usuário do Github</h3>
            <p>
              <i>
                Veja os <b>Repositórios</b> de cada usuário e sobre os{" "}
                <b>Repositórios estrelados</b> por ele também
              </i>
            </p>
          </center>
        </main>
        {this.state.user.length !== 0 ? this.renderProfile() : null}
      </div>
    );
  }
}

export default App;
