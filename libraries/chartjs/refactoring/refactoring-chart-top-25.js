// source: https://www.chartjs.org/docs/latest/getting-started/
// helpful link: https://stackoverflow.com/questions/37621020/setting-width-and-height
// another one: https://stackoverflow.com/questions/20206038/converting-chart-js-canvas-chart-to-image-using-todataurl-results-in-blank-im
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
         "Extract Function",
         "Change Function Declaration",
         "Inline Function",
         "Move Function",
         "Inline Variable",
         "Encapsulate Variable",
         "Extract Class",
         "Slide Statements",
         "Replace Conditional with Polymorphism",
         "Remove Dead Code",
         "Pull Up Method",
         "Combine Functions into Class",
         "Introduce Assertion",
         "Replace Paramter with Query",
         "Replace Constructor with Factory Function",
         "Remove Setting Method",
         "Extract Variable",
         "Encapsulate Record",
         "Split Variable",
         "Replace Temp with Query",
         "Split Phase",
         "Pull Up Field",
         "Move Staments to Callers",
         "Introduce Paramter Object",
         "Change Referance to Value",
        ],
        datasets: [{
            label: '# of References',
            data: [
             85,
             45,
             34,
             32,
             18,
             18,
             14,
             13,
             13,
             12,
             12,
             12,
             10,
             9,
             9,
             9,
             9,
             9,
             8,
             8,
             7,
             7,
             7,
             7,
             7,
             6,
             6,
             6,
             6,
             6,
             6,
             6,
             5,
             5,
             5,
             5,
             5,
             4,
             4,
             4,
             4,
             4,
             4,
             4,
             3,
             3,
             3,
             3,
             3,
             3,
             3,
             3,
             2,
             2,
             2,
             2,
             2,
             2,
             2,
             2,
             1
            ],
            backgroundColor: 'blue'
        }]
    },
    options: {
        // responsive: true,
        // maintainAspectRatio: false,
        // animation: {
        //   duration: 0 // general animation time
        // },
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          onComplete: function(animation) {
            createImage(myChart, 1900, 1500);
          },
          duration: 1,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontSize: 25,
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 20,
                }
            }]
        }
    }
});
