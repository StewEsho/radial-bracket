import React from 'react';
import Seeding from './components/seeding/seeding.js';
import './sass/style.scss';
import imageIcon from './icons/round-add_photo_alternate-24px.svg';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      teams: [],
      lastTeamID: 1,
    };
    
    this.editTeam = {
      editName: this.editName,
      editColor: this.editColor,
      editLogo: this.editLogo,
      editSeed: this.editSeed
    }

    this.defaultColors = ['#E91E63', '#FF9800', '#FFEB3B', '#CDDC39', '#4CAF50', '#2196F3', '#9C27B0', '#607D8B']
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
          <div className="col-6">
            <Seeding teams={this.state.teams} 
              editTeam={this.editTeam} addTeam={this.addTeam} removeTeam={this.removeTeamByID}/>
          </div>
          <div className="col-6">

          </div>
        </div>
      </div>
    );
  }
}

export default App;
