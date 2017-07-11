export default class ColorWheel {
    constructor() {
        this.rotationAngle = 0;
        this.brightness = 0.05;
    }

    rotateAntiClockwise() {
        this.rotationAngle += 15;
    }

    rotateClockwise() {
        this.rotationAngle -= 15;
    }

    increaseBrightness() {
        if (this.brightness <= 0.95) {
            this.brightness += 0.05;
        }
    }

    decreaseBrightness() {
        if (this.brightness >= 0.05) {
            this.brightness -= 0.05;
        }
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

    rgbValue(coefficient) {
        return Math.round(coefficient * (1 - this.brightness) * 255);
    }

    calculateColor(coordinates) {
        const angleDegrees = Math.atan2(coordinates[1][1] - coordinates[0][1],
            coordinates[1][0] - coordinates[0][0]) * 180 / Math.PI;
        const red = this.rgbValue(this.redCoefficient(angleDegrees + this.rotationAngle));
        const green = this.rgbValue(this.greenCoefficient(angleDegrees + this.rotationAngle));
        const blue = this.rgbValue(this.blueCoefficient(angleDegrees + this.rotationAngle));
        return `rgb(${ red }, ${ green }, ${ blue })`;
    }
}
