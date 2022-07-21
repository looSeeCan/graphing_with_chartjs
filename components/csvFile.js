import { Graph } from "./graph.js";


const ZonAnnFile = async () => {
    const response = await fetch("assets/ZonAnn.Ts+dSST.csv");
    const data = await response.text();
    console.log(data);

    //use split to split the data into an array
    //data. split is using an escape character sequence; \n = split the csv file everywhere there is table line break. slice out the array from the first index forward
    //gets rid of the column titles: Year, Industry......
    const table = data.split("\n").slice(1);
    console.table(table);

    let xLabels = [];
    let dataForGraph = [];
    table.forEach(item => {
    //each row from the split method is now a string index. split each index by the commas
        const a = item.split(",");
        console.log(a);
        //I want just the year and the median temperature, which is index 0 and 1
        const year = a[0];
        const temp = a[1];
        xLabels.push(a[0]);//im pushing the year(index 0 of the array) into this array variable
        dataForGraph.push(a[1]);
    });
    // console.log(xLabels, dataForGraph);
    Graph(xLabels, dataForGraph);//call the graphing table(chart.js), passing the array as an argument
    
    return response;

}

export {ZonAnnFile};