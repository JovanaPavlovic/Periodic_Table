
//buttons on click

document.querySelector('.get-all').addEventListener('click', getPeriodicTable);
document.querySelector('.get-nonmetal').addEventListener('click', getNonmetals);
document.querySelector('.get-metal').addEventListener('click', getMetals);
document.querySelector('.get-metaloids').addEventListener('click', getMetaloids);
document.querySelector('.get-actinides').addEventListener('click', getActinides);
document.querySelector('.get-lanthanides').addEventListener('click', getLanthanides);


const url = '/api';
let allData = [];

function populateTable(arr) {
    let result = '';
    arr.forEach(element => {
        result += `<tr><td>${element.atomic_number}</td><td>${element.element_name}</td><td>${element.element_symbol}</td><td>${element.category}</td>
    <td>${element.atomic_mass}</td><td>${element.boiling_point}</td><td>${element.melting_point}</td><td>${element.density}</td>
    <td>${element.color}</td><td>${element.appearance}</td><td>${element.discovered_by}</td><td>${element.agregate_state}</td>
    </tr>`;
    });
    //console.log(result);
    document.querySelector('#elements').innerHTML = result;
}

function getPeriodicTable() {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            populateTable(data);
            allData = data;
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getNonmetals() {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            const filtered = data.filter(function (nonmetals) {
                return nonmetals.category.includes("nonmetal") || nonmetals.category.includes("gas");
            });
            return filtered;
        })
        .then(function (filteredData) {

            populateTable(filteredData);
            allData = filteredData;
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getMetaloids() {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {


            const filtered = data.filter(function (nonmetals) {
                return nonmetals.category.includes("metalloid");
            });
            return filtered;
        })
        .then(function (filteredData) {

           populateTable(filteredData);
            allData = filteredData;
        })
        .catch(function (err) {
            console.log(err);
        });

}

function getActinides() {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            const filtered = data.filter(function (nonmetals) {
                return nonmetals.category.includes("actinide");
            });
            return filtered;
        })
        .then(function (filteredData) {

            populateTable(filteredData);
            allData = filteredData;
        })
        .catch(function (err) {
            console.log(err);
        });

}

function getLanthanides() {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            let filtered = data.filter(function (nonmetals) {
                return nonmetals.category.includes("lanthanide");
            });
            return filtered;
        })
        .then(function (filteredData) {

            populateTable(filteredData);
            allData = filteredData;
        })
        .catch(function (err) {
            console.log(err);
        });

}

function getMetals() {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            const filtered = data.filter(function (metals) {
                return metals.category.includes(" metal");
            });
            return filtered;
        })
        .then(function (filteredData) {

            populateTable(filteredData);
            allData = filteredData;
        })
        .catch(function (err) {
            console.log(err);
        });

}

// Sort by element name and element symbol

document.querySelector('#sortName').addEventListener('click', sortByName);
document.querySelector('#sortSym').addEventListener('click', sortBySymbol);

function sortByName() {

    allData.sort(function (a, b) {
        if (a.element_name < b.element_name)
            return -1;
        if (a.element_name > b.element_name)
            return 1;
        return 0;
    });

    populateTable(allData);

}

function sortBySymbol() {

    allData.sort(function (a, b) {
        if (a.element_symbol < b.element_symbol)
            return -1;
        if (a.element_symbol > b.element_symbol)
            return 1;
        return 0;
    });

    populateTable(allData);

}




