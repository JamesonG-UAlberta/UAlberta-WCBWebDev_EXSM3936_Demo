async function main() {
    let wrench = {
        size: 14,
        finish: "Zinc",
        branch: "Mastercraft"
    };

    let computer = {
        type: "Laptop",
        brand: "HP",
        isOn: false,
        battery: 1.0,
        powerOn: function() {
            this.isOn = true;
            this.battery -= 0.1;
        },
        powerOff: function() {
            this.isOn = false;
        }
    };
}


