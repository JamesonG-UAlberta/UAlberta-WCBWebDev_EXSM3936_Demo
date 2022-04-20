async function main() {
    // Declare anonymous object.
    let clientHouse = {
        clientFirstName: await input("Please enter the client's first name: "),
        clientLastName: await input("Please enter the client's last name: "),
        clientHomeAddress: await input("Please enter the client's home address: "),
        clientPhoneNumber: Number(await input("Please enter the client's phone number: ")),
        houseType: await input("Please enter the house type: "),
        houseSize: Number(await input("Please enter the house size (sq ft): ")),
        houseConstructionYear: Number(await input("Please enter the house year of construction: ")),
        houseSwimmingPool: JSON.parse(await input("Please enter whether the house has a swimming pool (true/false): ")),
        houseSmokeDetectors: JSON.parse(await input("Please enter whether the house has at least one smoke detector (true/false): ")),
        houseFireplace: JSON.parse(await input("Please enter whether the house has a fireplace (true/false): ")),
        houseNearFireStation: JSON.parse(await input("Please enter whether the house is near (10km) a fire station (true/false): ")),
        fullName: function() {
            return this.clientFirstName + " " + this.clientLastName;
        }
    }

    // Stringify and output.
    output(JSON.stringify(clientHouse));
    //{"clientFirstName":"Joe","clientLastName":"Smith","clientHomeAddress":"123 Cool St","clientPhoneNumber":7802345432,"houseType":"Duplex","houseSize":1200,"houseConstructionYear":2001,"houseSwimmingPool":false,"houseSmokeDetectors":true,"houseFireplace":true,"houseNearFireStation":true}
}


