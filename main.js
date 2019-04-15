// XHR = XHL  HTTP REQUEST

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
 };
 
let places = [];

const domStringBuilder = (arrayToPrint) => {
    console.log(arrayToPrint);
    let domString = '';
 
    arrayToPrint.forEach((tp) => {
        domString += `<div class="col-sm-4">`
        domString += `<div class='img-wrapper'>`
        domString += `<img src="${tp.cityImage}" class="card-img-top">`
        domString += `</div>`
        domString += `<div class="card">`
        domString += `<div class="card-body">`
        domString += `<p class="#">${tp.cityName}</p>`
        domString += `<div class="card-text">${tp.favoriteRestaurant}</div>`
        domString += `<div class="card-text">${tp.favoriteBar}</div>`
        domString += `<div class="card-text">${tp.favoriteHotel}</div>`
        domString += `<div class="card-text">${tp.favoriteTouristAttraction}</div>`
        domString += `</div>`
        domString += `</div>`
        domString += `</div>`
    });
    // console.log(domString)
    printToDom('places', domString)
 }


function executeThisCodeAfterFileLoads(){
   
    const data = JSON.parse(this.responseText);
    console.log(data);
    places = data.places;
    
    domStringBuilder(places);
}

function executeThisCodeIfXHRFails(){
    console.error('oh shit')
}

const getPlacesData = () => {
    const myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
    myRequest.addEventListener('error', executeThisCodeIfXHRFails);
    myRequest.open('GET', './db/places.json');
    myRequest.send();
    console.log('Yay 2')

};

const buttonClick = (e) => {
const buttonId = e.target.id;
const selectedPlaces = [];
    places.forEach((place) => {
      if (place.rating === buttonId) {
        selectedPlaces.push(place);
      };
    });
    
    if(buttonId === 'all') {
      domStringBuilder(places)
    } else {
      domStringBuilder(selectedPlaces)
    }
  };
  
   
  const buttonEvents = () => {
    document.getElementById('1star').addEventListener('click', buttonClick);
    document.getElementById('2star').addEventListener('click', buttonClick);
    document.getElementById('3star').addEventListener('click', buttonClick);
    document.getElementById('all').addEventListener('click', buttonClick);
  };
    
    const init = () => {
      buttonEvents();
      getPlacesData();
      domStringBuilder(places);
      
    };
    
    init();
  
 