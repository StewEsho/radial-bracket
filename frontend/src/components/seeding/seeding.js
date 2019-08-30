import React from 'react';
import TeamEntry from './team-entry/TeamEntry.js'

class Seeding extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <ul className='seeding'>

                <button onClick={() => this.props.func.addTeam()}>Add</button><br />

                {this.props.teams.map(team => 
                    <TeamEntry editTeam={this.props.func.editTeam} team={team} key={team.id} removeTeam={this.props.func.removeTeam}/> 
                )}


                <button onClick={this.props.toggleStage}>Done</button>
            </ul>
        );
    }
}

export default Seeding;