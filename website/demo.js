  /* WEB API WITH FETCH DEMO--  */
  let baseURL = 'http://api.animalinfo.org/data/?animal=';
  let apiKey = '&appid=9f15e45060...';
  const newAnimal =  document.getElementById('animal').value;

  document.getElementById('generate').addEventListener('click', performAction);
    //click is the event listener and the event it performs is call the function performAction
  function performAction(e){  
    getAnimalDemo(baseURL,newAnimal, apiKey)
    //performAction in turn
  }


  const getAnimalDemo = async (baseURL, animal, key)=>{
  // 1.
    //const res = await fetch(baseURL+animal+key) //build url into a  fetch call
  // 2. Call Fake API
    const res = await fetch('/fakeAnimalData')
    try {

      const data = await res.json();
      console.log(data)
      // 1. We can do something with our returned data here-- like chain promises!

      // 2. 
      // postData('/addAnimal', data)
    }  catch(error) {
      // appropriately handle the error
      console.log( error);
    }
  }
