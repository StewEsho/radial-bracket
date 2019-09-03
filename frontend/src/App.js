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
        rounds: []
      },
      lastTeamID: 0,
      isSeeding: true
    };

    this.defaultColors = ['#E91E63', '#FF9800', '#FFEB3B', '#CDDC39', '#4CAF50', '#2196F3', '#9C27B0', '#607D8B'];

    this.toggleStage = () => {
      var oldState = this.state;
      oldState.isSeeding = !oldState.isSeeding;

      // Generate bracket when seeding is complete
      if (!oldState.isSeeding){
        this.generateBracket();
      }
      this.setState(oldState);
    };

    this.updateTeams = (teams) => {
      var stateCopy = this.state;
      stateCopy.bracket.teams = [...teams];
      this.setState(stateCopy);
    };
    
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
    };

    this.addTeam = () => {
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
    };

    this.removeTeamByID = (id) => {
      let teams = [...this.state.bracket.teams];
      let matchingTeam = this.state.bracket.teams.filter(team => team.id === id)[0];
      if (matchingTeam){
        let index = this.state.bracket.teams.indexOf(matchingTeam);
        teams.splice(index, 1);
        this.updateTeams(teams);
      }
    };

    this.generateBracket = () => {
      var numTeams = this.state.bracket.teams.length;
      var numRounds = Math.ceil(Math.log2(numTeams));
      
      //create rounds array
      var rounds = [];

      // iterates through rounds backwards (r === 3 <--> first round)
      // this makes seeding calculations easier
      for (let r = numRounds; r > 0; r--) {
        var round = {
          matches: []
        };

        for (let m = 0; m < 2 ** (r - 1); m++) {
          var matchup = { 
            team1: "",  // Valid values: team seed, "PENDING", "BYE"
            team2: "",
            winner: "PENDING"
          }
          if (r === numRounds){ //first round
            matchup.team1 = (m + 1).toString();
            matchup.team2 = ((2**r) - m) <= numTeams ? ((2**r) - m).toString() : "BYE";
          } else { //future rounds
            matchup.team1 = "PENDING";
            matchup.team2 = "PENDING";
          }
          round.matches.push(matchup);
        }

        rounds.push(round);
      }

      // Update bracket.
      var newState = this.state;
      newState.bracket.rounds = [... rounds];
      this.setState(newState);
    };
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
