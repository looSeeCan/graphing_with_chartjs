document.title = "Chart.js";

import {ZonAnnFile} from "./components/csvFile.js"

ZonAnnFile()
    .then(response => console.log(response))
    .catch(error => console.log(error)); 



