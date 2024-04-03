// Populate Year dropdown menu
for (let j = 1950; j < 2022; j++) {
    d3.select("#selYear").append("option").attr("value", j).text(j);
  };