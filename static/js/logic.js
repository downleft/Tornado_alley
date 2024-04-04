// Populate Year dropdown menu
for (let j = 1950; j < 2024; j++) {
    d3.select("#selYear").append("option").attr("value", j).text(j);
  };

// Populate States dropdown menu
// States JSON format from https://gist.github.com/mshafrir/2646763#file-states_titlecase-json
for (let i = 0; allstates.length; i++) {
    d3.select("#selState").append("option").attr("value", allstates[i]["abbreviation"]).text(allstates[i]["name"]);
  };
console.log(allstates)