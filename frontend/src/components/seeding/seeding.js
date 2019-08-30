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

                <button onClick={() => this.props.addTeam()}>Add</button>
                <button onClick={() => alert('Done')}>Done</button>  { /* TODO: button should enter next stage */}

                {this.props.teams.map(team => 
                    <TeamEntry editTeam={this.props.editTeam} team={team} key={team.id} removeTeam={this.props.removeTeam}/> 
                )}
            </ul>
        );
    }
}

export default Seeding;