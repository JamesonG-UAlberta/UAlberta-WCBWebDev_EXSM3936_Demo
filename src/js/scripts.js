async function main() {
    output(calcAge([1990, 1, 1]));
}

// Inputs: Birthdate (structured [year (number), month (number), day (number)])
// Outputs: Age in Days
function calcAge(birthdate)
{
    let dayAge;

    let currentYear = new Date().getFullYear();
    let currentMonth =  new Date().getMonth()+1;
    let currentDay = new Date().getDate();

    let yearDifference = currentYear - birthdate[0];
    let monthDifference = currentMonth - birthdate[1];
    let dayDifference = currentDay - birthdate[2];

    dayAge = yearDifference * 365.25 + monthDifference * 30 + dayDifference;

    return dayAge;
}