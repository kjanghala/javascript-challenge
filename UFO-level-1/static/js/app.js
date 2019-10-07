var tbody = d3.select("tbody");
tbody.html("");

data.forEach((UFOsightings) => {
  var row = tbody.append("tr");
  Object.entries(UFOsightings).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  })
});

var sightings = data;
var button = d3.select("#filter-btn");

button.on("click", function() {
  var tbody2 = d3.select("tbody");
  tbody2.html("");
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  var filteredData = sightings.filter(sighting => sighting.datetime === inputValue);

  filteredData.forEach((filteredSightings) => {
    var row2 = tbody.append("tr");
    Object.entries(filteredSightings).forEach(([key2, value2]) => {
      var cell2 = row2.append("td");
      cell2.text(value2);
    })
  });
})
