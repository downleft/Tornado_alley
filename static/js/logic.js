// Populate Year dropdown menu
for (let j = 1979; j < 2024; j++) {
    d3.select("#selYear").append("option").attr("value", j).text(j);
  };

// Populate States dropdown menu
// States JSON format from https://gist.github.com/mshafrir/2646763#file-states_titlecase-json
// for (let i = 0; allstates.length; i++) {
//     d3.select("#selState").append("option").attr("value", allstates[i]["abbreviation"]).text(allstates[i]["name"])
//   };

const url = "http://127.0.0.1:5000/api/v1.0/"

// Set up initial variables
let sample = []
let states_dict = ["AL", "IA", "KS", "KY", "LA", "MS", "NE", "OK", "TN"]

// // Fetch the JSON data
// d3.json(url + state + "/" + year).then(function(data) {
//   sample = data;

//   // Establish default graph
//   console.log(sample)
//   optionChanged();
// });

// Trigger New Graphs when Dropdown Menu changed
d3.selectAll("#selYear").on("change", optionChanged);
// d3.selectAll("#selState").on("change", optionChanged);

function optionChanged() {

  // Determine value chosen from Dropdown Menu
  // let state = d3.select("#selState").property("value");
  let year = d3.select("#selYear").property("value");
  d3.json(url  + year).then(function(data) {
    sample = data;
    
    let state_counter = [0, 0, 0 , 0, 0, 0, 0, 0, 0]
    for (let k = 0; k < sample.length; k++) {
      for (let i = 0; i < states_dict.length; i++) {
        if (sample[k]["State"] == states_dict[i]) {
          state_counter[i] += 1
        }
      }
    }
    // console.log(state_counter)
    // Set up Horizontal Bar Chart parameters
    let trace1 = {
      x: state_counter,
      y: states_dict,
      type: "bar",
      orientation: "h",
      text: states_dict,
      
      // Organize in descending order reference: https://community.plotly.com/t/horizontal-bar-automatically-order-by-numerical-value/7183
      transforms: [{
          type: "sort",
          target: "y",
          order: "descending"
          }]
      };

    let hbarInfo = [trace1];

    let layout1 = {
      title: "Number of Tornadoes in Selected Year",
      xaxis: {title: "Sample Values"},
      height: 600,
      width: 600
      };

    // Render Horizontal Bar Chart to the div tag with id "bar"
    Plotly.newPlot("state_chart", hbarInfo, layout1);
  })
};
