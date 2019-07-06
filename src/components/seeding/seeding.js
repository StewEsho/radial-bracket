import React from 'react';
import TeamEntry from './team-entry/TeamEntry.js'
import './seeding.css';

class Seeding extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className='seeding'>
                {this.props.teams.map(team => <TeamEntry editTeam={this.props.editTeam} team={team} key={team.index} /> )}
                <button onClick={() => this.props.addTeam({
                    name: 'foo bars',
                })}>Add</button>
                <button onClick={() => alert('Done')}>Done</button>
            </div>
        );
    }
}

export default Seeding;