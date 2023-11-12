const freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 },
    { name: "Carol", occupation: "Programmer", startingPrice: 70 },
    { name: "Ashli", occupation: "Designer", startingPrice: 60 }
  ];
  
  function generateFreelancer() {
    const poolNames = ["John", "Michael", "David", "James", "William", "Robert", "Richard", "Charles", "Joseph", "Mary", "Elizabeth", "Jennifer", "Linda", "Susan", "Margaret", "Barbara", "Dorothy", "Sarah"];
    const poolOccupations = ["Writer", "Teacher", "Programmer", "Designer", "Doctor", "Lawyer", "Accountant", "Engineer", "Salesperson", "Manager", "Customer Service Representative", "Web Developer", "Graphic Designer", "Photographer", "Videographer", "Animator", "Musician"];
    const name = poolNames[Math.floor(Math.random() * poolNames.length)];
    const occupation = poolOccupations[Math.floor(Math.random() * poolOccupations.length)];
    const startingPrice = Math.floor(Math.random() * 126) + 25;
  
    return {
      name,
      occupation,
      startingPrice,
    };
  }
 function addFreelancer(){
    freelancers.push(generateFreelancer());}
 setInterval(addFreelancer,3000);
 
  
  const body = document.body;
  body.style = "display:flex; justify-content:center;";
  
  const mainDiv = document.createElement("div");
  mainDiv.id = "mainDiv";
  mainDiv.className = "mainDiv";
  mainDiv.style = "border : solid black 2px;width : 500px; height: 250;margin-top:10%";
  
  // Add the grid style
  mainDiv.style.display = "flex";
  mainDiv.style.flexDirection = "column";
  mainDiv.style.alignItems = "center";
  mainDiv.style.justifyItems = "center";
  mainDiv.style.gridGap = "10px";
  
  console.log(mainDiv);
  body.appendChild(mainDiv);
  
  mainDiv.appendChild(document.createElement("h1")).innerHTML = "Freelancer Forum";
  mainDiv.appendChild(document.createElement("h3")).innerHTML = "The average starting price is";
  mainDiv.appendChild(document.createElement("h2")).innerHTML = "Available Freelancers";
  
  const table = document.createElement("table");
  table.borderCollapse = "collapse";
  const headerRow = document.createElement("tr");
  headerRow.innerHTML = `<th>Name&nbsp&nbsp</th><th>Occupation&nbsp&nbsp</th><th> Starting Price</th>`;
  table.appendChild(headerRow);
  
  // Add the table rows
  for (let i = 0; i < freelancers.length; i++) {
    // Add a delay of 2 seconds
    setTimeout(() => {
      const row = document.createElement("tr");
  
      const nameCell = document.createElement("td");
      nameCell.textContent = freelancers[i].name;
      row.appendChild(nameCell);
  
      const occupationCell = document.createElement("td");
      occupationCell.textContent = freelancers[i].occupation;
      row.appendChild(occupationCell);
  
      const priceCell = document.createElement("td");
      priceCell.textContent = ("$"+freelancers[i].startingPrice);
      row.appendChild(priceCell);
  
      table.appendChild(row);
    }, 2000);
  }
  
  mainDiv.appendChild(table);
  function log(){console.log(freelancers)};
  setInterval(log,3001);