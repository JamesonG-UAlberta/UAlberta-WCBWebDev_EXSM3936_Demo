async function main() {
    let myFirstObject = {
        firstName: "John",
        lastName: "Doe",
        age: 20,
        isHappy: true,
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    };
    myFirstObject.lastName = "Test";
    output(myFirstObject.fullName());
}


