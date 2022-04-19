async function main() {
    let pen = {
        pointSize: "2mm",
        pointType: "Felt",
        housingColour: "Blue",
        housingMaterial: "Plastic",
        housingDiameter: 12,
        housingLength: 60,
        inkColour: "Blue",
        inkType: "Ink",
        inkViscosity: 0.7,
        inkRefillable: true,
        inkLevel: 0.85,
        brand: "Sharpie",
        hasCap: true,
        retractable: true,
        intact: true,
        write: function(numChars) {
            if (this.inkLevel*100 >= numChars) // If we have enough ink to write the characters.
            {
                this.inkLevel = (this.inkLevel-numChars/100).toFixed(2);
            }
            else
            {
                throw "Not enough ink!";
            }
        }
    };

    try {
        output(pen.inkLevel); // 0.85
        pen.write(20); // Success
        output(pen.inkLevel); // 0.65
        pen.write(70); // Require more ink than we have, throws exception.
    }
    catch (exception) // Catches exception.
    {
        output(exception); // Outputs exception.
    }

}


