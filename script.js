const freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 },
    { name: "Carol", occupation: "Programmer", startingPrice: 70 },
    { name: "Ashli", occupation: "Designer", startingPrice: 60 }
  ];
  
  const body = document.body;
  body.style = "display:flex; justify-content:center;";
  
  const mainDiv = document.createElement("div");
  mainDiv.id = "mainDiv";
  mainDiv.className = "mainDiv";
  mainDiv.style = "border : solid black 2px;width : 500px; height: 250;margin-top:10%";
  
  // Add the grid style
  mainDiv.style.display = "grid";
  mainDiv.style.gridTemplateColumns = "repeat(1, 1fr)";
  mainDiv.style.gridTemplateRows = "repeat(3, 45px)";
  mainDiv.style.alignItems = "center";
  mainDiv.style.justifyItems = "center";
  
  console.log(mainDiv);
  body.appendChild(mainDiv);
  
  mainDiv.appendChild(document.createElement("h1")).innerHTML = "Freelancer Forum";
  mainDiv.appendChild(document.createElement("h3")).innerHTML = "The average starting price is";
  mainDiv.appendChild(document.createElement("h2")).innerHTML = "Available Freelancers";

  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  headerRow.innerHTML ="<th>Name</th><th>Occupation</th><th>Starting Price</th>";
  table.appendChild(headerRow);

  // Add the table rows
for (const freelancer of freelancers) {
    const row = document.createElement("tr");
  
    const nameCell = document.createElement("td");
    nameCell.textContent = freelancer.name;
    row.appendChild(nameCell);
  
    const occupationCell = document.createElement("td");
    occupationCell.textContent = freelancer.occupation;
    row.appendChild(occupationCell);
  
    const priceCell = document.createElement("td");
    priceCell.textContent = freelancer.startingPrice;
    row.appendChild(priceCell);
  
    table.appendChild(row);
  }
  mainDiv.appendChild(table);


