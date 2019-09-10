import React from 'react';
import paper, { Path, Point } from 'paper';

class Preview extends React.Component {
    constructor(props) {
        super(props);

        this.renderBracket = () => {
            paper.setup(this.refs.canvas);
            console.log(paper);
    
            var path = new Path();
            path.strokeColor = this.props.color;
    
            var start = new Point(100, 100);
    
            path.moveTo(start);
    
            path.lineTo(start.add([200, -50]));
    
            paper.view.draw();
        }
    }

    // Configure paper.js to draw bracket
    componentDidMount() {
        this.renderBracket();
    }

    render() {
        
        this.renderBracket();
        console.log(this);

        return (
            <div className="Preview">
                <canvas ref="canvas"></canvas>
            </div>
        );
    }
}

export default Preview;