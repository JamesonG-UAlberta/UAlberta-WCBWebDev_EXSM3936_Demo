class Vehicle {
    constructor(make, model, engineCC) {
        this.make = make;
        this.model = model;
        this.engineCC = engineCC;
    }
    startEngine() {
        output("Vroom vroom.");
    }
}
class Pickup extends Vehicle {
    constructor(make, model, engineCC, type, bedLength)
    {
        super(make, model, engineCC); // Apply the properties defined in the parent constructor.
        this.type = type;
        this.bedLength = bedLength;
    }
    startEngine() { // Overrides startEngine from the parent class (Vehicle).
        super.startEngine(); // Call the parent version of the method.
        output("VROOM VROOM!"); // Define new behaviour for the method.
    }
}
class FordF150 extends Pickup {
    constructor(make, model, trim, engineCC, type, bedLength)
    {
        super(make, model, engineCC, type, bedLength)
        this.trim = trim;
    }
}

async function main() {
    const firstVehicle = new FordF150("Ford","F150","XLT",2300,"1/2 Ton",185);
    const secondVehicle = new Vehicle("Honda","Civic",1500);

    // The first time through the loop, we call startEngine() on firstVehicle [loud version].
    // The second time through the loop, we call startEngine on secondVehicle [quiet verision].
    // Since they have the same method name, and the former was simply overridden, this works fine and we get different results for each object,
    // without any exceptions.
    let vehicles = [firstVehicle, secondVehicle];
    for (vehicle of vehicles) {
        vehicle.startEngine();
    }

    output(JSON.stringify(firstVehicle));
    output(JSON.stringify(secondVehicle));

    firstVehicle.startEngine();
}


