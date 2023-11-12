const freelancers = [{ name: "Habib", occupation: "painter", startingPrice: 25 }, { name: "Mary", occupation: "Artist", startingPrice: 45 }]; // Define a constant array of freelancers
let recentFreelancer = []; // an empty array to store the most recently generated freelancer
let average = freelancers.reduce((acc, curr) => acc + curr.startingPrice, 0) / freelancers.length; // Calculate the average starting price of all freelancers

//a function to generate a random freelancer
function generateFreelancer() {
    const poolNames = ["John", "Michael", "David", "James", "William", "Robert", "Richard", "Charles", "Joseph", "Mary", "Elizabeth", "Jennifer", "Linda", "Susan", "Margaret", "Barbara", "Dorothy", "Sarah", "Ava", "Isabella", "Sophia", "Lily", "Emma"];
    const poolOccupations = ["Writer", "Teacher", "Programmer", "Designer", "Doctor", "Lawyer", "Accountant", "Engineer", "Salesperson", "Manager", "Reporter", "Web Developer", "Graphic Designer", "Photographer", "Videographer", "Animator", "Musician", "Construction Worker", "Truck Driver", "Farmer", "Nurse", "Chef"];
    // Randomly select a name and occupation from the pools
    const name = poolNames[Math.floor(Math.random() * poolNames.length)];
    const occupation = poolOccupations[Math.floor(Math.random() * poolOccupations.length)];
    // Randomly generate a starting price between 20 and 120 dollars
    const startingPrice = Math.floor(Math.random() * 106) + 20;

    // Return a new freelancer object
    return {
        name,
        occupation,
        startingPrice,
    };
}

//َA function to add a new freelancer to the freelancers array
function addFreelancer() {
    freelancers.push(generateFreelancer());
    // Repalce the new freelancer to the recentFreelancer array
    recentFreelancer[0] = generateFreelancer();
}

//A function to calculate the average starting price of all freelancers
function averagePrice() {
    const resultAverage = freelancers.reduce((acc, curr) => acc + curr.startingPrice, 0) / freelancers.length;
    return resultAverage;
}

// Start a set interval that will call the addFreelancer function every 1500 milliseconds
const setIdAddFreelancer = setInterval(addFreelancer, 1500);

// Get a reference and Set the body element's style
const body = document.body;
body.style = "display:flex; justify-content:center;";
// Create a new div element to contain the freelancer forum
const mainDiv = document.createElement("div");
mainDiv.id = "mainDiv";
mainDiv.className = "mainDiv";
mainDiv.style = "border : solid black 2px;width : 500px; height: 250;margin-top:10%";
mainDiv.style.display = "flex";
mainDiv.style.flexDirection = "column";
mainDiv.style.alignItems = "center";
mainDiv.style.justifyItems = "center";

body.appendChild(mainDiv);// Add the mainDiv element to the body element and more elements
mainDiv.appendChild(document.createElement("h1")).innerHTML = "Freelancer Forum";
mainDiv.appendChild(document.createElement("h3")).innerHTML = `The average starting price is $${average}`;
mainDiv.appendChild(document.createElement("h2")).innerHTML = "Available Freelancers";

const table = document.createElement("table");
table.style = "width:450px";
table.borderCollapse = "collapse";
const headerRow = document.createElement("tr");
headerRow.innerHTML = `<th>Name</th><th>Occupation</th><th> Starting Price</th>`;
table.appendChild(headerRow);


for (let i = 0; i < freelancers.length; i++) {
    // Add a delay of 2 seconds

    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.style = "text-align: center";
    nameCell.textContent = freelancers[i].name;
    row.appendChild(nameCell);

    const occupationCell = document.createElement("td");
    occupationCell.textContent = freelancers[i].occupation;
    occupationCell.style = "text-align: center";
    row.appendChild(occupationCell);

    const priceCell = document.createElement("td");
    priceCell.style = "text-align: center";
    priceCell.textContent = ("$" + freelancers[i].startingPrice);
    row.appendChild(priceCell);

    table.appendChild(row);
}



function forfreelancerLog() {
    for (let i = 0; i < recentFreelancer.length; i++) {
        // Add a delay of 2 seconds

        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.style = "text-align: center";
        nameCell.textContent = recentFreelancer[i].name;
        row.appendChild(nameCell);

        const occupationCell = document.createElement("td");
        occupationCell.style = "text-align: center";
        occupationCell.textContent = recentFreelancer[i].occupation;
        row.appendChild(occupationCell);

        const priceCell = document.createElement("td");
        priceCell.style = "text-align: center";
        priceCell.textContent = ("$" + recentFreelancer[i].startingPrice);
        row.appendChild(priceCell);

        table.appendChild(row);
    }

}

const intervalIdForfreelancerLog = setInterval(forfreelancerLog, 1500);

mainDiv.appendChild(table);


function test() {
    average = Math.floor(averagePrice());
    mainDiv.querySelector("h3").innerHTML = `The average starting price is $${average}`;
}
const intervalIdTest = setInterval(test, 1500);

setTimeout(() => {
    clearInterval(intervalIdTest);
}, 16000);

setTimeout(() => {
    clearInterval(intervalIdForfreelancerLog);
}, 15000);

setTimeout(() => {
    clearInterval(setIdAddFreelancer);
}, 15000);

setTimeout(() => {
    clearInterval(setIdAddFreelancer);
}, 15000);
