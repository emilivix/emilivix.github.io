// Example of interactive plotting using Plotly.js
function initPlot() {
    var data = [{
        x: [0, 1, 2, 3, 4, 5],
        y: [0, 1, 4, 9, 16, 25],
        type: 'scatter',
        mode: 'lines+markers',
        name: 'y = x^2'
    }];

    var layout = {
        title: 'Interactive Plot',
        xaxis: {
            title: 'x'
        },
        yaxis: {
            title: 'y'
        }
    };

    Plotly.newPlot('plot', data, layout);
}

function addFunction() {
    var func = prompt("Enter a function in terms of x (e.g., x^2 + 3):");
    try {
        var expr = math.compile(func);
        var xValues = [];
        var yValues = [];
        for (var i = -10; i <= 10; i++) {
            xValues.push(i);
            yValues.push(expr.evaluate({ x: i }));
        }

        var newData = {
            x: xValues,
            y: yValues,
            type: 'scatter',
            mode: 'lines+markers',
            name: 'y = ' + func
        };

        Plotly.addTraces('plot', newData);
    } catch (error) {
        alert("Invalid function entered.");
    }
}

// Initialize the plot when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initPlot();
});
