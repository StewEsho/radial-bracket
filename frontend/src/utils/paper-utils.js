import paper, { Shape, Size } from 'paper';

function size_times (size, factor) {
    var newW = Math.max(size.width * factor, 0);
    var newH = Math.max(size.height * factor, 0);
    return new Size(newW, newH);
}

function size_plus (size, factor) {
    var newW = Math.max(size.width + factor, 0);
    var newH = Math.max(size.height + factor, 0);
    return new Size(newW, newH);
}


export function drawCircle (color, radius) {
    
    var myCircle = new Shape.Circle({
        center: paper.view.center,
        fillColor: color,
        strokeColor: "black",
    });

    var paddingPx = 10;
    var size = size_plus(size_times(paper.view.size, radius), -paddingPx);
    console.log(size_times(paper.view.size, radius));
    myCircle.size = size;

    paper.view.onResize = function() {
        myCircle.position = paper.view.center;

        var size = size_plus(size_times(paper.view.size, radius), -paddingPx);
        myCircle.size = size;
    };
}