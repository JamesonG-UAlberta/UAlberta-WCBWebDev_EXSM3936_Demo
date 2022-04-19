async function main() {
    let pen = {
        pointSize: "2mm",
        pointType: "Felt",
        housingColour: "Blue",
        housingMaterial: "Plastic",
        housingDiameter: 12,
        housingLength: 60,
        ink: {
            colour: "Blue",
            type: "Ink",
            viscosity: 0.7,
            level: 0.85
        },
        refillable: true,
        brand: "Sharpie",
        hasCap: true,
        retractable: true,
        intact: true,
        write: function(numChars) {
            if (this.ink.level*100 >= numChars) // If we have enough ink to write the characters.
            {
                this.ink.level = (this.ink.level-numChars/100).toFixed(2);
            }
            else
            {
                throw "Not enough ink!";
            }
        }
    };

    try {
        output(pen.ink.level); // 0.85
        pen.write(20); // Success
        output(pen.ink.level); // 0.65
        pen.write(70); // Require more ink than we have, throws exception.
    }
    catch (exception) // Catches exception.
    {
        output(exception); // Outputs exception.
    }

}


