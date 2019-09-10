import React from 'react';
import paper, { Path, Point, Shape, Size } from 'paper';

class Preview extends React.Component {
    constructor(props) {
        super(props);

        this.renderBracket = () => {
            paper.setup(this.refs.bracket);

            var myCircle = new Shape.Circle({
                center: paper.view.center,
                fillColor: this.props.color,
                strokeColor: "black",
            });

            var paddingPx = 10;
            var newW = Math.max(paper.view.size.width - paddingPx, 0);
            var newH = Math.max(paper.view.size.height - paddingPx, 0);
            var size = new Size(newW, newH);
            //TODO: add helper function for subtracting sizes
            myCircle.size = size;

            paper.view.onResize = function() {
                myCircle.position = paper.view.center;

                var newW = Math.max(paper.view.size.width - paddingPx, 0);
                var newH = Math.max(paper.view.size.height - paddingPx, 0);
                var size = new Size(newW, newH);
                myCircle.size = size;
            };

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