export const line = (canvasContext, coordinates) => {
    canvasContext.beginPath();
    canvasContext.moveTo(coordinates[0][0], coordinates[0][1]);
    canvasContext.lineTo(coordinates[1][0], coordinates[1][1]);
    canvasContext.lineWidth = 10;
    canvasContext.stroke();
};

export const rect = (canvasContext, coordinates) => {
    canvasContext.fillRect(coordinates[0][0], coordinates[0][1],
        coordinates[1][0], coordinates[1][1]);
};
