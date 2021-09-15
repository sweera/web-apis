/*Chained promises to GET and POST data*/
document.getElementById('generate').addEventListener('click',performAction);

function performAction(e){
    const fav = document.getElementById('fav').value;

    //Faking an API call
    getAnimal('/fakeAnimalData')
    //New Syntax
    .then(function(data){
        //Add data
        console.log(data)
        postData('/addAnimal', {animal:data.animal, fact: data.fact, fav:fav})

        updateUI()
    })
}

/*POST EXAMPLE*/
const postData = async ( url = '', data = {})=>{
    //console.log(data);
      const response = await fetch(url, {
      method: 'POST', //GET, POST, PUT, DELETE etc.
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), //to turn our data into JSON data
    });

      try {
        const newData = await response.json();
        console.log(newData)
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

const getAnimal = async(url) =>{
    const res = await fetch(url)
    try{
        const data = await res.json();
        console.log(data)
        return data;
    } catch(error){
        console.log("error", error);
    }
}
/* UPDATE UI DEMO*/
const updateUI = async () => {
    const request = await fetch('/all')
    try{
        const allData = await request.json()
        console.log(allData);
        document.getElementById('animalName').innerHTML = allData[0].animal;
        document.getElementById('animalFact').innerHTML = allData[0].facts;
        document.getElementById('animalFav').innerHTML = allData[0].fav;
    } catch(error){
        console.log("error",error)
    }
}