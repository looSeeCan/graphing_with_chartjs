document.title = "Fetch and grab csv file";

import {ZonAnnFile} from "./components/csvFile.js"

ZonAnnFile()
    .then(response => console.log(response))
    .catch(error => console.log(error)); 



