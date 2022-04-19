async function main() {
    class Car {
        constructor(year, make, model, colour) {
            this.make = make;
            this.model = model;
            this.year = year;
            this.colour = colour;
        };
        beep() {
            return "BEEEEEP!";
        } 
        // Unless you declare a toString method, any string conversion other than JSON will give you [object Object].
        toString() {
            return `${this.colour} ${this.year} ${this.make} ${this.model}`
        }
        engineOn = false;
    }    


    let myCar = new Car(1999, "Toyota", "Camry", "Beige");
    let bobsCar = new Car(2001, "Honda", "Civic", "Silver");

    output(`This is a ${myCar.colour} ${myCar.year} ${myCar.make} ${myCar.model}.`);
    output(`This is a ${bobsCar.colour} ${bobsCar.year} ${bobsCar.make} ${bobsCar.model}.`);

    output(myCar.beep());
    output(bobsCar.engineOn);

    let stringified = JSON.stringify(myCar)
    output(stringified);

    output(String(myCar))
    let carImport = JSON.parse(stringified);
    output(`Imported a ${carImport.colour} ${carImport.year} ${carImport.make} ${carImport.model}.`);
}


