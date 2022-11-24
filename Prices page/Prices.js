const button = document.getElementById("button")
button.addEventListener('click', function(){
    document.querySelector("nav ul").classList.toggle("active")
})



function GenerateTable() {
    //Build an array containing prices of latest models.
    var prices = new Array();
    prices.push(["Models", "Price(soums)",]);
    prices.push(["Chevrolet Tahoe", "597 687 427"]);
    prices.push(["Chevrolet Tahoe Premium", "947 499 999"]);

    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = prices[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = prices[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < prices.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = prices[i][j];
        }
    }

    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);

}

function GenerateTable() {
    //Build an array containing prices of latest models.
    var prices = new Array();
    prices.push(["Models", "Price(soums)",]);
    prices.push(["Chevrolet Malibu 2 T LTZ", "405 900 000"]);

    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = prices[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = prices[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < prices.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = prices[i][j];
        }
    }

    var malibuTable = document.getElementById("malibuTable");
    malibuTable.innerHTML = "";
    malibuTable.appendChild(table);

}

function GenerateTable() {
    //Build an array containing prices of latest models.
    var prices = new Array();
    prices.push(["Models", "Price(soums)",]);
    prices.push(["Chevrolet Equinox 1LT FWD MY22", "389 000 000"]);
    prices.push(["Chevrolet Equinox 1LT RS AWD MY22T", "420 000 000 "]);
    prices.push(["Chevrolet Equinox 3LT RS AWD MY22", "450 000 000 "]);


    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = prices[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = prices[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < prices.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = prices[i][j];
        }
    }

    var equinoxTable = document.getElementById("equinoxTable");
    equinoxTable.innerHTML = "";
    equinoxTable.appendChild(table);

}
