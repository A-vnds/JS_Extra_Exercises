const data = [
    {
        name: "Pol",
        age: 23,
        gender: "Male"
	},
    {
        name: "Raul",
        age: 36,
        gender: "Male"
	},
    {
        name: "Alex",
        age: 33,
        gender: "Male"
	},
    {
        name: "Marí",
        age: 28,
        gender: "Female"
	},
    {
        name: "Nadia",
        age: 24,
        gender: "Female"
	},
    {
        name: "Violeta",
        age: 26,
        gender: "Female"
	}
];

const genderSelector = document.getElementById("selectField");

const ageSelector = document.getElementById('selectAge');
console.log(ageSelector);

createTable(data);
genderSelector.addEventListener("change", filterArray);
ageSelector.addEventListener("change", filterArray);


// Create Table Function
function createTable(data) {
    let html = "<table border='1|1'>";

    for (let i = 0; i < data.length; i++) {
        html += "<tr>";
        html += "<td>" + data[i].name + "</td>";
        html += "<td>" + data[i].age + "</td>";
        html += "<td>" + data[i].gender + "</td>";
        html += "</tr>";
    }
    html += "</tbody>";
    document.getElementById("table").innerHTML = html;

}


// Filter Array based on Gender

function filterArray() {

    let filteredArray = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].gender == genderSelector.value || genderSelector.value == 'All') {
            if (ageSelector.value == "older" && data[i].age >= 30 ) {
                filteredArray.push(data[i]);
            } else if (ageSelector.value == "younger" && data[i].age < 30) {
                filteredArray.push(data[i]);
            } else if (ageSelector.value == 'All') {
                filteredArray.push(data[i]);
            }
        }
    }
    createTable(filteredArray);
}


// Filter Array based on Age


function filterArraybyAge() {


    let filteredArray = [];


    for (let i = 0; i < data.length; i++) {


        //         
        //         createTable(filteredArrayYounger);
        //         createTable(filteredArrayOlder);
    }
}
