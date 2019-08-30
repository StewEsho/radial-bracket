import React from 'react';
import Seeding from './seeding/Seeding.js';
import Matchups from './matchups/Matchups.js';

function Editor(props){
    const isSeeding = props.isSeeding;

    if (isSeeding) {
        return <Seeding teams={props.teams} toggleStage={props.toggleStage} func={props.seedingFunctions}  />
    } else {
        return <Matchups teams={props.teams} toggleStage={props.toggleStage}/>
    } 
}

export default Editor;