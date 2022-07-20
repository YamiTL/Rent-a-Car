/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

fetch('carsJSON.json')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

/* var grupoA = [{"Name": "Kia Rio or similar",
"AirConditionInd": "true",
"Code": "ECAR",
"TransmissionType": "Automatic",
"VehType": "1",
"VehClass": "3",
"VehGroup": "A",
"PictureURL": "https://www.avis.com/content/dam/cars/l/2020/kia/2020-kia-rio-s-sedan-grey_featured.png",
"Features": "Smoke Free|4 Doors|5 Seats|Radio|Air Bag|Air Conditioning|Automatic|Holds 1 large, 1 small Suitcases|27-35 mpg|image=2020-kia-rio-s-sedan-grey.png|thumb=2020-kia-rio-s-sedan-grey.png|cargroup=A|category=Economy",
"Features2": {
    "doors": "4",
    "seats": "5",
    "air": "Air Conditioning",
    "transmition": "Automatic",
    "largeSuitcase": "1",
    "smallSuitcase": "1",
    "thumb": "2020-kia-rio-s-sedan-grey.png",
    "category": "Economy"}];

var a = carsJSON.stringify(grupoA);
console.log(grupoA) */
