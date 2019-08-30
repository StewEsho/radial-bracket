import React from 'react';
import Editor from './components/Editor.js';
import './sass/style.scss';
import imageIcon from './icons/round-add_photo_alternate-24px.svg';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      bracket: {
        teams: [],
        matchups: []
      },
      lastTeamID: 0,
      isSeeding: true
    };

    this.toggleStage = () => {
      var oldState = this.state;
      oldState.isSeeding = !oldState.isSeeding;
      this.setState(oldState);
    }

    this.updateTeams = (teams) => {
      var stateCopy = this.state;
      stateCopy.bracket.teams = [...teams];
      this.setState(stateCopy);
    }
    
    // suite of functions used to edit attributes of a team (to be passed to child components)
    this.editTeam = {
      editName: (newName, id) => {
        let teams = [...this.state.bracket.teams];
        let matchingTeam = this.state.bracket.teams.filter(team => team.id === id)[0];
        if (matchingTeam){
          let index = this.state.bracket.teams.indexOf(matchingTeam);
          teams[index].name = newName;
        }
        this.updateTeams(teams);
      },
      editColor: (newColor, id) => {
        let teams = [...this.state.bracket.teams];
        let matchingTeam = this.state.bracket.teams.filter(team => team.id === id)[0];
        if (matchingTeam){
          let index = this.state.bracket.teams.indexOf(matchingTeam);
          teams[index].color = newColor;
        }
        this.updateTeams(teams);
      },
      editLogo: (e, id) => {
        let file = e.target.files[0];
        let url = URL.createObjectURL(file);
        let teams = [...this.state.bracket.teams];
        let matchingTeam = this.state.bracket.teams.filter(team => team.id === id)[0];
        if(matchingTeam){
          let index = this.state.bracket.teams.indexOf(matchingTeam);
          teams[index].logo = url;
          teams[index].file = file;
        }
        this.updateTeams(teams);
      },
      editSeed: (newSeed, id) => {
        let teams = [...this.state.bracket.teams];
        let matchingTeam = this.state.bracket.teams.filter(team => team.id === id)[0];
        if (matchingTeam) {
          let index = this.state.bracket.teams.indexOf(matchingTeam);
          teams[index].seed = newSeed;
        }
        this.updateTeams(teams);
      }
    }

    this.defaultColors = ['#E91E63', '#FF9800', '#FFEB3B', '#CDDC39', '#4CAF50', '#2196F3', '#9C27B0', '#607D8B']
  }

  addTeam = () => {
    var team = {};
    team['name'] = team['name'] || '';
    team['color'] = team['color'] || this.defaultColors[this.state.lastTeamID % this.defaultColors.length];
    team['logo'] = team['logo'] || imageIcon;

    team.seed = team.seed || this.state.bracket.teams.length + 1;
    team.id = ++this.state.lastTeamID;
    let teams = [...this.state.bracket.teams];
    teams.push(team);

    this.updateTeams(teams);
    this.setState({ lastTeamID: team.id});
  }

  removeTeamByID = (id) => {
    let teams = [...this.state.bracket.teams];
    let matchingTeam = this.state.bracket.teams.filter(team => team.id === id)[0];
    if (matchingTeam){
      let index = this.state.bracket.teams.indexOf(matchingTeam);
      teams.splice(index, 1);
      this.updateTeams(teams);
    }
  }


  render(){
    return (
      <div className="App">
        <div className="row">
          <div className="col-6">
            <Editor 
              teams={this.state.bracket.teams} 
              seedingFunctions={ {editTeam: this.editTeam, addTeam: this.addTeam, removeTeam: this.removeTeamByID} } 
              toggleStage={this.toggleStage} 
              isSeeding={this.state.isSeeding}
            />
          </div>
          <div className="col-6">

          </div>
        </div>
      </div>
    );
  }
}

export default App;
