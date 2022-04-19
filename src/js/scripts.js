async function main() {
    class Computer {
        constructor(type, brand) {
            this.brand = brand;
            switch(type.toUpperCase()) {
                case "DESKTOP":
                    this.batteryLevel = null;
                    break;
                case "LAPTOP":
                case "TABLET":
                    this.batteryLevel = 1.0;
                    break;
                default:
                    throw "Unexpected value for 'type'!";
                    break;
            }
            this.type = type.toUpperCase();
        }
        powerOn() {
            this.isOn = true;
            if (this.batteryLevel !== null) {
                if (this.batteryLevel < 0.1)
                {
                    throw "Insufficient battery power!";
                }
                this.batteryLevel -= 0.1;
            }
        }
        powerOff() {
            this.isOn = false;
        }
        isOn = false;
    }

    let desktop = new Computer("desktop", "EMachines");
    let laptop = new Computer("laptop", "Dell");

    output(JSON.stringify(laptop));
    laptop.powerOn();    
    output(JSON.stringify(laptop));
}


