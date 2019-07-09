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
                <div className='left-side'>
                    <label for='name'>Name: 
                        <input name='name' type='text' value={this.props.team.name} onChange={(e) => this.props.editTeam.editName(e.target.value, this.props.team.id)} />
                    </label>
                    <label for='teamcolor'>Team Color:           
                        <input name='teamcolor' type='color' value={this.props.team.color} onChange={(e) => this.props.editTeam.editColor(e.target.value, this.props.team.id)} />
                    </label>
                    <label for='seed'>Seed: 
                        <input name='seed' type='number' min='1' step='1' value={this.props.team.seed} onChange={(e) => this.props.editTeam.editSeed(e.target.value, this.props.team.id)} />
                    </label>
                    <div className="button delete" onClick={(e) => this.props.removeTeam(this.props.team.id)}>
                        X
                    </div>
                </div>
                <div className='right-side'>
                </div>
            </div>
        )
    }
}

export default TeamEntry;