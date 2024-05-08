
const getDataFromAPI = async(users) => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = response.json()
        return users

    }catch(err) {
        console.log(arror);
    }
}

const createTable = (users) => {
    const TableContainer = document.getElementById("table-container");
    const table = document.createElement("table");
    const headers = ["T/R", "Name", "Username", "Phone"] 
    const headerRow = table.insertRow();

    headers.forEach(headerText => {
        const header = document.createElement("th");
        header.textContent = headerText;
        headerRow.appendChild(header);
    })

    users.forEach(user => {
        const row = table.insertRow();
        row.insertCell().textContent = user.id;
        row.insertCell().textContent = user.name;
        row.insertCell().textContent = user.username;
        row.insertCell().textContent = user.phone;
        
    })

    TableContainer.appendChild(table);
    table.classList.add("table", "table-hover");
}

const finished   = async() => {
    const users = await getDataFromAPI();

    if (users) {
        createTable(users);
    }
}

finished()