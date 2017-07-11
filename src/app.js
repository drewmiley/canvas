import $ from 'jquery';

import ColorWheel from './ColorWheel';

import * as KeyCodes from './KeyCodes';

import * as draw from './draw';
import * as set from './set';

const drawRedRectangle = (canvasContext, coordinates) => {
    set.fillStyle(canvasContext, '#ff0000');
    draw.rect(canvasContext, coordinates);
};

const drawGreyLine = (canvasContext, coordinates) => {
    set.strokeStyle(canvasContext, '#999999');
    draw.line(canvasContext, coordinates);
};

const writeCanvasText = (canvasContext, width, height) => {
    canvasContext.font = `${ Math.floor( width * height / 10000 )}px Arial`;
    canvasContext.fillStyle = '#000000';
    canvasContext.textAlign = 'center';
    canvasContext.fillText('Canvas', width / 2, height / 2);
};

$(document).ready(() => {
    const canvas = $('#canvas');
    const height = window.innerHeight;
    const width = window.innerWidth;
    canvas[0].height = height;
    canvas[0].width = width;
    const canvasContext = canvas[0].getContext('2d');

    const colorWheel = new ColorWheel();

    let mouseLocation;

    drawRedRectangle(canvasContext, [[0, 0], [width / 2, height / 2]]);
    drawGreyLine(canvasContext, [[width / 2, height / 2], [width, height]]);
    writeCanvasText(canvasContext, width, height);

    $(document).keydown(e => {
        switch(e.keyCode) {
            case KeyCodes.LEFT:
                colorWheel.rotateAntiClockwise();
                break;
            case KeyCodes.RIGHT:
                colorWheel.rotateClockwise();
                break;
            case KeyCodes.UP:
                colorWheel.increaseBrightness();
                break;
            case KeyCodes.DOWN:
                colorWheel.decreaseBrightness();
                break;
            default:
                break;
        }

    });

    canvas.mousemove(e => {
        if (mouseLocation) {
            const coordinates = [mouseLocation, [e.pageX, e.pageY]];
            set.strokeStyle(canvasContext, colorWheel.calculateColor(coordinates));
            draw.line(canvasContext, coordinates);
        }
        mouseLocation = [e.pageX, e.pageY];
    });
});
