import {DinoService} from './dino-service.js';


let dino = new DinoService();

let parseData = ""
dino.getDino().then(function(data) {
  if(data.length > 0) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      parseData += data[i].join(" ");
    }
    console.log(parseData);  
  }
  console.log(process.env.API_KEY);
});