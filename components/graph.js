

const Graph = (xLabels, dataForGraph) => {
    // const div = document.createElement("div");
    // div.id = "graph"
    // const a = document.getElementById("graph");
    // // a.style.width = "50px";
    // // a.style.color = "red";
    // document.body.prepend(div);
    // const canvas = document.createElement("CANVAS");
    // canvas.id = "myChart";   
    // // canvas.style.width = "200px";
    // // const a = document.getElementById("myChart");
    // // a.style.width = "100px";
    // console.log(canvas);
    // div.appendChild(canvas);
        // console.log(yearArr, tempArr);
        console.log(xLabels, dataForGraph);

        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                labels: xLabels,
                datasets: [{
                    label: "Global Average Temperature",
                    // data: [12, 19, 3, 5, 2, 3],
                    data: dataForGraph,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        // 'rgba(54, 162, 235, 0.2)',
                        // 'rgba(255, 206, 86, 0.2)',
                        // 'rgba(75, 192, 192, 0.2)',
                        // 'rgba(153, 102, 255, 0.2)',
                        // 'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        // 'rgba(54, 162, 235, 1)',
                        // 'rgba(255, 206, 86, 1)',
                        // 'rgba(75, 192, 192, 1)',
                        // 'rgba(153, 102, 255, 1)',
                        // 'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
}


export {Graph};