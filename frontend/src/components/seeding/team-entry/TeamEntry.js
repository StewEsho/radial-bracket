import React from 'react';

class TeamEntry extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <li className='entry'>
                <div className='left-side'>
                    <label htmlFor='name'>Name: 
                        <input name='name' type='text' value={this.props.team.name} onChange={(e) => this.props.editTeam.editName(e.target.value, this.props.team.id)} />
                    </label>
                    <label htmlFor='teamcolor'>Team Color:           
                        <input name='teamcolor' type='color' value={this.props.team.color} onChange={(e) => this.props.editTeam.editColor(e.target.value, this.props.team.id)} />
                    </label>
                    <label htmlFor='seed'>Seed: {this.props.team.seed} 
                        {/* <input name='seed' type='number' min='1' step='1' value={this.props.team.seed} onChange={(e) => this.props.editTeam.editSeed(e.target.value, this.props.team.id)} /> */}
                    </label>
                    <div className="button delete" onClick={(e) => this.props.removeTeam(this.props.team.id)}>
                        X
                    </div>
                </div>
                <div className='right-side'>
                    <label>
                        <input type='file' className='input--logo' accept="image/png, image/jpeg, image/jpg, image/svg+xml" onChange={(e) => this.props.editTeam.editLogo(e, this.props.team.id)} />
                        <img className='logo--preview' src={this.props.team.logo} />
                    </label>
                </div>
            </li>
        )
    }
}

export default TeamEntry;