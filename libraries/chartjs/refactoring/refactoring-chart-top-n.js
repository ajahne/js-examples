// source: https://www.chartjs.org/docs/latest/getting-started/
// helpful link: https://stackoverflow.com/questions/37621020/setting-width-and-height
// another one: https://stackoverflow.com/questions/20206038/converting-chart-js-canvas-chart-to-image-using-todataurl-results-in-blank-im
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'horizontalBar',
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
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(255, 159, 64, 0.4)',
                'rgba(40, 237, 228, 0.4)',
                'rgba(255, 200, 30, 0.4)',
                'rgba(100, 150, 245, 0.4)',
                'rgba(138, 255, 86, 0.4)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(40, 237, 228, 1)',
                'rgba(255, 200, 30, 1)',
                'rgba(100, 150, 245, 1)',
                'rgba(138, 255, 86, 1)',

            ],
            borderWidth: 1
        }]
    },
    options: {
        // responsive: true,
        // maintainAspectRatio: false,
        animation: {
          duration: 0 // general animation time
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
