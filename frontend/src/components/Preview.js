import React from 'react';
import paper, { Path, Point } from 'paper';

class Preview extends React.Component {
    constructor(props) {
        super(props);
    }

    // Configure paper.js to draw bracket
    componentDidMount() {
        paper.setup('canvas');

        // Paper's drawing code
        var path = new Path();
        path.strokeColor = 'black';
        var start = new Point(100, 100);
        path.moveTo(start);
        path.lineTo(start + [100, -50]);

        paper.view.draw();
    }

    render() {
        return (
            <div className="Preview">
                <canvas id="canvas"></canvas>
            </div>
        );
    }
}

export default Preview;