import $ from 'jquery';

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
    const canvas = $('#canvas')[0];
    const height = window.innerHeight;
    const width = window.innerWidth;
    canvas.height = height;
    canvas.width = width;
    const canvasContext = canvas.getContext('2d');

    drawRedRectangle(canvasContext, [[0, 0], [width / 2, height / 2]]);
    drawGreyLine(canvasContext, [[width / 2, height / 2], [width, height]]);
    writeCanvasText(canvasContext, width, height);
});
