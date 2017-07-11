export default class ColorWheel {
    constructor() {
        this.rotationAngle = 0;
        this.brightness = 0.05;
    }

    brightnessMultiplier() {
        return (1 - this.brightness) * 255;
    }

    redCoefficient(angleDegrees) {
        return (Math.abs((angleDegrees) - 180) / 180) % 1;
    }

    greenCoefficient(angleDegrees) {
        return (Math.abs((angleDegrees) + 60) / 180) % 1;
    }

    blueCoefficient(angleDegrees) {
        return (Math.abs((angleDegrees) - 60) / 180) % 1;
    }

    calculateColor(coordinates) {
        const angleDegrees = Math.atan2(coordinates[1][1] - coordinates[0][1],
            coordinates[1][0] - coordinates[0][0]) * 180 / Math.PI;
        const red = Math.round(this.redCoefficient(angleDegrees + this.rotationAngle) * this.brightnessMultiplier());
        const green = Math.round(this.greenCoefficient(angleDegrees + this.rotationAngle) * this.brightnessMultiplier());
        const blue = Math.round(this.blueCoefficient(angleDegrees + this.rotationAngle) * this.brightnessMultiplier());
        return `rgb(${ red }, ${ green }, ${ blue })`;
    }
}
