async function main() {
    // Declare anonymous object.
    let clientHouse = {
        clientFirstName: "",
        clientLastName: "",
        clientHomeAddress: "",
        clientPhoneNumber: 0,
        houseType: "",
        houseSize: 0,
        houseConstructionYear: 0,
        houseSwimmingPool: false,
        houseSmokeDetectors: false,
        houseFireplace: false,
        houseNearFireStation: false,
        fullName: function() {
            return this.clientFirstName + " " + this.clientLastName;
        }
    }

    // Gather our information, convert to the appropriate type, store in the object.
    clientHouse.clientFirstName = await input("Please enter the client's first name: ");
    clientHouse.clientLastName = await input("Please enter the client's last name: ");
    clientHouse.clientHomeAddress = await input("Please enter the client's home address: ");
    clientHouse.clientPhoneNumber = Number(await input("Please enter the client's phone number: "));
    clientHouse.houseType = await input("Please enter the house type: ");
    clientHouse.houseSize = Number(await input("Please enter the house size (sq ft): "));
    clientHouse.houseConstructionYear = Number(await input("Please enter the house year of construction: "));
    clientHouse.houseSwimmingPool = JSON.parse(await input("Please enter whether the house has a swimming pool (true/false): "));
    clientHouse.houseSmokeDetectors = JSON.parse(await input("Please enter whether the house has at least one smoke detector (true/false): "));
    clientHouse.houseFireplace = JSON.parse(await input("Please enter whether the house has a fireplace (true/false): "));
    clientHouse.houseNearFireStation = JSON.parse(await input("Please enter whether the house is near (10km) a fire station (true/false): "));

    // Stringify and output.
    output(JSON.stringify(clientHouse));
    //{"clientFirstName":"Joe","clientLastName":"Smith","clientHomeAddress":"123 Cool St","clientPhoneNumber":7802345432,"houseType":"Duplex","houseSize":1200,"houseConstructionYear":2001,"houseSwimmingPool":false,"houseSmokeDetectors":true,"houseFireplace":true,"houseNearFireStation":true}
}


