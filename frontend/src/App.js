import React from 'react';
import Seeding from './components/seeding/seeding.js';
import './App.css';
import imageIcon from './icons/round-add_photo_alternate-24px.svg';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      teams: [{
        name: 'team 1',
        color: '#00ff00',
        logo: imageIcon,
        file: null,
        seed: 1,
        id: 0,
      }, {
        name: 'team 2',
        color: '#FF5588',
        logo: imageIcon,
        file: null,
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
    team['logo'] = team['logo'] || './icons/round-add_photo_alternate-24px.svg';
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

  editLogo = (e, id) => {
    let file = e.target.files[0];
    let url = URL.createObjectURL(file);
    let teams = [...this.state.teams];
    let matchingTeam = this.state.teams.filter(team => team.id === id)[0];
    if(matchingTeam){
      let index = this.state.teams.indexOf(matchingTeam);
      teams[index].logo = url;
      teams[index].file = file;
    }
    this.setState({teams});
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
