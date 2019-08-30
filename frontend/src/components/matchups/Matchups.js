import React from 'react';

class Matchups extends React.Component {
    constructor(props) {
        super(props);


        this.state = {};
    }

    render () {
        return (
            <div className="matchups">
                <h1>matchups</h1>
                <ul className="round-list">
                    
                </ul>
                <button onClick={this.props.toggleStage}>Go Back</button>
            </div>
        );
    }
}

export default Matchups;