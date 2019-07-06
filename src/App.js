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
        seed: 1
      }, {
        name: 'team 2',
        color: '#ff0000',
        logo: 'http://placehold.it/64',
        seed: 2
      }]
    };
    
    this.editTeam = {
      editName: this.editName,
      editColor: this.editColor,
      editLogo: this.editLogo,
      editSeed: this.editSeed
    }
  }

  addTeam = (team) => {
    team['name'] = team['name'] || 'Team';
    team['color'] = team['color'] || 'ffffff';
    team['logo'] = team['logo'] || 'http://placehold.it/32'
    team.seed = team.seed || this.state.teams.length + 1

    let teamsCopy = [...this.state.teams];
    teamsCopy.push(team);
    this.setState({teams: teamsCopy});
  }

  removeTeamByName = (name) => {
    let matchingTeam = this.state.teams.filter(team => team.name === name);
    if (matchingTeam.length > 0){
      let index = this.state.teams.indexOf(matchingTeam)[0];
      let teamsCopy = [...this.state.teams];
      teamsCopy.splice(index, 1);
      this.setState({ teams: teamsCopy });
    }
  }

  editName = (newName, index) => {
    let teams = [...this.state.teams];
    teams[index].name = newName;
    this.setState({teams});
  }

  render(){
    return (
      <div className="App">
        <div className="row">
          <div className="col-6" style={{ backgroundColor: 'green' }}>
            <Seeding teams={this.state.teams} 
             editTeam={this.editTeam} />
          </div>
          <div className="col-6" style={{ backgroundColor: 'blue' }}>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
