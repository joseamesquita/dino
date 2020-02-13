export class DinoService {
  async getDino() {
    try {
      let response = await fetch('http://dinoipsum.herokuapp.com/api/?format=json');
      if (response.status === 200 && response.ok === true){
        console.log(response);
        let jsonifiedResponse = await response.json();
        console.log(jsonifiedResponse);
        return jsonifiedResponse;
      } else {
        console.log("in else")
        throw Error("Error: fetch call to API was not successful.");
      }
    
    } catch(error) {
      console.error(error.message);
    }
  }
}