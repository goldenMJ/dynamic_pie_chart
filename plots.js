function init() {
    var data = [{
        values: [19, 26, 55, 88],
        labels: ["Spotify", "Soundcloud", "Pandora", "Itunes"],
        type: "pie"
}];

var layout = {
    height: 600,
    width: 800
};

Plotly.plot("pie", data, layout);
}
function updatePlotly(newdata) {
    // get pie from index.html  <div id="pie"></div>
    var PIE = document.getElementById("pie");
    // use plotly.restyle to update the pie charts with the newdata array
    Plotly.restyle(PIE, "values", [newdata]);

}

function getData(dataset) {
    var data = [];
    switch(dataset) {
    case "dataset1":
        date = [1, 2, 3, 39];
        break;
    case "dataset2":
        data = [10, 20, 30, 37];
        break;
    case "dataset3":
        data = [100, 200, 60, 75];
        break;
        }
    updatePlotly(data);
    
}

init();
