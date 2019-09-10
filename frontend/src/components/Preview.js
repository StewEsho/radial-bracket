import React from 'react';
import paper from 'paper';
import { drawCircle } from '../utils/paper-utils.js';

class Preview extends React.Component {
    constructor(props) {
        super(props);

        this.renderBracket = () => {
            paper.setup(this.refs.bracket);

            console.log(this.props);
            drawCircle(this.props.color, 1.0);
            drawCircle("green", 0.5);

            paper.view.draw();
        }
    }

    // Configure paper.js to draw bracket
    componentDidMount() {
        this.renderBracket();
    }

    render() {        
        this.renderBracket();

        return (
            <div className="Preview">
                <canvas id="bracket" ref="bracket" resize="true" width="20" height="20" ></canvas>
            </div>
        );
    }
}

export default Preview;