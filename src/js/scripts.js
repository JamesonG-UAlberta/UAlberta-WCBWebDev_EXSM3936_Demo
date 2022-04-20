async function main() {
    class ClientHouse
    {
        // Expect everything as strings. If they're already bool/number, then great, but if not we can convert them to be safe.
        constructor(clientFirstName, clientLastName, clientHomeAddress, clientPhoneNumber, houseType, houseSize, houseConstructionYear, houseSwimmingPool, houseSmokeDetectors, houseFireplace, houseNearFireStation)
        {
            this.clientFirstName = clientFirstName;
            this.clientLastName = clientLastName;
            this.clientHomeAddress = clientHomeAddress;
            this.clientPhoneNumber = Number(clientPhoneNumber);
            this.houseType = houseType;
            this.houseSize = Number(houseSize);
            this.houseConstructionYear = Number(houseConstructionYear);
            this.houseSwimmingPool = JSON.parse(houseSwimmingPool);
            this.houseSmokeDetectors = JSON.parse(houseSmokeDetectors);
            this.houseFireplace = JSON.parse(houseFireplace);
            this.houseNearFireStation = JSON.parse(houseNearFireStation);
        }
        fullName = function() {
            return this.clientFirstName + " " + clientLastName;
        }
    }

    let theClientHouse = new ClientHouse(
        await input("Please enter the client's first name: "),
        await input("Please enter the client's first name: "), 
        await input("Please enter the client's home address: "),
        await input("Please enter the client's phone number: "),
        await input("Please enter the house type: "),
        await input("Please enter the house size (sq ft): "),
        await input("Please enter the house year of construction: "),
        await input("Please enter whether the house has a swimming pool (true/false): "),
        await input("Please enter whether the house has at least one smoke detector (true/false): "),
        await input("Please enter whether the house has a fireplace (true/false): "),
        await input("Please enter whether the house is near (10km) a fire station (true/false): ")
    );


    // Stringify and output.
    output(JSON.stringify(theClientHouse));
    //{"clientFirstName":"Joe","clientLastName":"Smith","clientHomeAddress":"123 Cool St","clientPhoneNumber":7802345432,"houseType":"Duplex","houseSize":1200,"houseConstructionYear":2001,"houseSwimmingPool":false,"houseSmokeDetectors":true,"houseFireplace":true,"houseNearFireStation":true}

}


