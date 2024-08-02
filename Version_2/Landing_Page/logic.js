// Set up initial variables
let sample = []
let states_dict = []
let states_names = []

// Populate Year dropdown menu
for (let j = 1950; j < 2024; j++) {
    d3.select("#selYear").append("option").attr("value", j).text(j);
  };

for (state in allstates) {
  d3.select("#selState").append("option").attr("value", allstates[state]["abbreviation"]).text(allstates[state]["name"]);
  states_dict.push(allstates[state]["abbreviation"]);
  states_names.push(allstates[state]["name"])
};

const url = "http://127.0.0.1:5000/api/v1.0/"

// Call table for first year in data set
optionChanged()

// Trigger New Graphs when Dropdown Menu changed
d3.selectAll("#selYear").on("change", optionChanged);

function optionChanged() {

  // Determine value chosen from Dropdown Menu
  let year = d3.select("#selYear").property("value");
  d3.json(url  + year).then(function(data) {
    sample = data;
    
    let state_counter = Array(states_dict.length).fill(0)
    let injury_total = Array(states_dict.length).fill(0)
    let fatality_total = Array(states_dict.length).fill(0)

    for (let k = 0; k < sample.length; k++) {
      for (let i = 0; i < states_dict.length; i++) {
        if (sample[k]["State"] == states_dict[i]) {
          state_counter[i] += 1
          injury_total[i] += sample[k]["Injuries"]
          fatality_total[i] += sample[k]["Deaths"]
        }
      }
    }
    
    // Set up Horizontal Bar Chart parameters
    let trace1 = {
      x: state_counter,
      y: states_dict,
      type: "bar",
      orientation: "h",
      text: states_names,
      
      // Organize in descending order by number of tornadoes
      transforms: [{
          type: "sort",
          target: "x",
          order: "ascending"
          }]
      };

    let hbarInfo = [trace1];

    let layout1 = {
      title: `Number of Tornadoes in ${year}`,
      xaxis: {title: "Tornado Count"},
      yaxis: {title: "State"},
      height: 1000,
      width: 500
      };

    // Render Horizontal Bar Chart to the div tag with id "state_chart"
    Plotly.newPlot("state_chart", hbarInfo, layout1);

    // Set up Horizontal Bar Chart parameters
    let trace2 = {
      x: injury_total,
      y: states_dict,
      type: "bar",
      orientation: "h",
      text: states_names,
      
      // Organize in descending order reference by number of injuries
      transforms: [{
          type: "sort",
          target: "x",
          order: "ascending"
          }]
      };

      let hbarInfo2 = [trace2];

      let layout2 = {
        title: `Number of Injuries in ${year}`,
        xaxis: {title: "Injury Count"},
        yaxis: {title: "State"},
        height: 1000,
        width: 500
      };

      // Render Horizontal Bar Chart to the div tag with id "injury_chart"
      Plotly.newPlot("injury_chart", hbarInfo2, layout2);

      // Set up Horizontal Bar Chart parameters
    let trace3 = {
      x: fatality_total,
      y: states_dict,
      type: "bar",
      orientation: "h",
      text: states_names,
      
      // Organize in descending order reference by number of deaths
      transforms: [{
          type: "sort",
          target: "x",
          order: "ascending"
          }]
      };

      let hbarInfo3 = [trace3];

      let layout3 = {
        title: `Number of Fatalities in ${year}`,
        xaxis: {title: "Fatality Count"},
        yaxis: {title: "State"},
        height: 1000,
        width: 500
      };

      // Render Horizontal Bar Chart to the div tag with id "fatality_chart"
      Plotly.newPlot("fatality_chart", hbarInfo3, layout3);
  })
};
