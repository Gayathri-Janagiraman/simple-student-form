function addStudent() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let course = document.getElementById("course").value;
    let email = document.getElementById("email").value;

    if (!name || !age || !gender || !course || !email) {
        alert("Please fill all fields.");
        return;
    }

    let table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td>${gender.value}</td>
        <td>${email}</td>
        <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
    `;

    document.getElementById("studentTable").style.display = "table";

    // Clear the form
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("course").value = "";
    document.getElementById("email").value = "";
}

function deleteRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);

    // If no rows left, hide the table
    let tableBody = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
    if (tableBody.rows.length === 0) {
        document.getElementById("studentTable").style.display = "none";
    }
}

