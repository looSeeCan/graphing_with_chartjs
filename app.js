document.title = "Fetch and grab csv file";

import {ZonAnnFile} from "./components/csvFile.js"

ZonAnnFile()
    .then(response => console.log(response))
    .catch(error => console.log(error)); 

//finished this 
//TODO: make a chart with my own data or some other data. graph multiple lines in one chart

