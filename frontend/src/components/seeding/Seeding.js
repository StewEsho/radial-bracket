import React from 'react';
import TeamEntry from './team-entry/TeamEntry.js'

class Seeding extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className='seeding'>
                <h1>seeding</h1>
                <button onClick={() => this.props.func.addTeam()}>Add</button><br />

                <ul className='team-list'>
                    {this.props.teams.map(team => 
                        <TeamEntry editTeam={this.props.func.editTeam} team={team} key={team.id} removeTeam={this.props.func.removeTeam}/> 
                    )}
                </ul>

                <button onClick={this.props.toggleStage}>Done</button>
            </div>
        );
    }
}

export default Seeding;