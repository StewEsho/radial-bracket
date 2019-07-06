import React from 'react';
import './TeamEntry.css';

class TeamEntry extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div className='entry'>
                <input value={this.props.team.name} onChange={(e) => this.props.editTeam.editName(e.target.value, this.props.team.seed - 1)}>
                    
                </input>
            </div>
        )
    }
}

export default TeamEntry;