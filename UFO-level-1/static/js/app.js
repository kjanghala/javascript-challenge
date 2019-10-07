var tbody = d3.select("tbody");

data.forEach((UFOsightings) => {
  var row = tbody.append("tr");
  Object.entries(UFOsightings).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  })
});

var sightings = data;
var button = d3.select("#button");

button.on("click", function() {
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  var filteredData = sightings.filter(sighting => sighting.datetime === inputValue);
  console.log(filteredData);
})

