import React from 'react';
import Seeding from './components/seeding/seeding.js';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      teams: [{
        name: 'team 1',
        color: '#00ff00',
        logo: 'http://placehold.it/64',
        seed: 1,
        id: 0,
      }, {
        name: 'team 2',
        color: '#FF5588',
        logo: 'http://placehold.it/64',
        seed: 2,
        id: 1,
      }],
      lastTeamID: 1,
    };
    
    this.editTeam = {
      editName: this.editName,
      editColor: this.editColor,
      editLogo: this.editLogo,
      editSeed: this.editSeed
    }

    this.defaultColors = ['#ff9ff3', '#feca57', '#54a0ff', '#48dbfb', '#d63031', '#1dd1a1','#009432', '#00d2d3' ,'#c8d6e5', '#222f3e', '#0a3d62', '#b71540','#6c5ce7', '#ff6b6b'];
  }

  addTeam = (team) => {
    team['name'] = team['name'] || 'Team';
    team['color'] = team['color'] || this.defaultColors[this.state.teams.length % this.defaultColors.length];
    team['logo'] = team['logo'] || 'http://placehold.it/32';
    team.seed = team.seed || this.state.teams.length + 1;
    team.id = ++this.state.lastTeamID;
    let teams = [...this.state.teams];
    teams.push(team);
    this.setState({ teams: teams, lastTeamID: team.id});
  }

  removeTeamByID = (id) => {
    let teams = [...this.state.teams];
    let matchingTeam = this.state.teams.filter(team => team.id === id)[0];
    if (matchingTeam){
      let index = this.state.teams.indexOf(matchingTeam);
      teams.splice(index, 1);
      this.setState({ teams: teams });
    }
  }

  editName = (newName, id) => {
    let teams = [...this.state.teams];
    let matchingTeam = this.state.teams.filter(team => team.id === id)[0];
    if (matchingTeam){
      let index = this.state.teams.indexOf(matchingTeam);
      teams[index].name = newName;
    }
    this.setState({teams});
  }

  editColor = (newColor, id) => {
    let teams = [...this.state.teams];
    let matchingTeam = this.state.teams.filter(team => team.id === id)[0];
    if (matchingTeam){
      let index = this.state.teams.indexOf(matchingTeam);
      teams[index].color = newColor;
    }
    this.setState({teams});
  }

  editLogo = (newLogo, id) => {
    
  }

  editSeed = (newSeed, id) => {
    let teams = [...this.state.teams];
    let matchingTeam = this.state.teams.filter(team => team.id === id)[0];
    if (matchingTeam) {
      let index = this.state.teams.indexOf(matchingTeam);
      teams[index].seed = newSeed;
    }
    this.setState({ teams });
  }

  render(){
    return (
      <div className="App">
        <div className="row">
          <div className="col-6" style={{ backgroundColor: 'green' }}>
            <Seeding teams={this.state.teams} 
              editTeam={this.editTeam} addTeam={this.addTeam} removeTeam={this.removeTeamByID}/>
          </div>
          <div className="col-6" style={{ backgroundColor: 'blue' }}>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
