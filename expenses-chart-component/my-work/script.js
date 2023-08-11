var xValues = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
var yValues = [];
var barColors = "rgba(0, 0, 255, 0.6)";

// Make an asynchronous HTTP request to load the JSON data
fetch("./data.json")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(jsonData => {
    // Iterate over the array and access the "amount" properties
    jsonData.forEach(item => {
      const amount = item.amount;
      yValues.push(amount); // Push the "amount" value into the array
    });

    // Now, you have the "amount" values in the amountArray, so create the chart
    createChart();
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });

  function createChart(){
    // Create the chart using Chart.js
    new Chart("myChart", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            legend: {
                display: false
            },
    
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true, // Force Y-axis values to start from 0
                        display: false // Hide Y-axis labels
                    },
                    gridLines: {
                        display: false
                    }
                }],
    
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }]
            },
    
            tooltips: {
                displayColors: false,
                callbacks: {
                    label: function(context) {
                        // Return an empty string for the label
                        return "";
                      },
                      title: function(tooltipItems) {
                        // Return the numerical value of the bar as the title
                        return tooltipItems[0].value;
                      },
                      afterLabel: function(tooltipItems) {
                        // Return an empty string for additional labels
                        return "";
                      },
                      filter: function(tooltipItem, data) {
                        // Hide tooltips for the x-axis labels
                        return tooltipItem.dataIndex === tooltipItem.datasetIndex;
                      }
                  }
            }, 
    
            plugins: {
                afterDraw: function(chart) {
                  var ctx = chart.ctx;
                  var chartArea = chart.chartArea;
          
                  chart.data.datasets.forEach(function(dataset, datasetIndex) {
                    var meta = chart.getDatasetMeta(datasetIndex);
                    if (!meta.hidden) {
                      meta.data.forEach(function(element, index) {
                        // Get the bar's background color
                        var bgColor = dataset.backgroundColor;
          
                        // Create a linear gradient for the bar
                        var gradient = ctx.createLinearGradient(
                          chartArea.left,
                          element._model.y,
                          chartArea.left,
                          chartArea.bottom
                        );
          
                        // Add gradient stops for the smooth edges
                        gradient.addColorStop(0, bgColor);
                        gradient.addColorStop(0.95, bgColor);
                        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          
                        // Update the bar's background with the gradient
                        ctx.fillStyle = gradient;
                        ctx.fillRect(element._model.x, chartArea.top, element._model.width, chartArea.bottom - chartArea.top);
                      });
                    }
                  });
                }
              }
        }
    });
  }

