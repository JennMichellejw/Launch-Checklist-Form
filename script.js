// Write your JavaScript code here!
const pilot = document.getElementById("pilotName");
const copilot = document.getElementById("copilotName");
const fuelLevel = document.getElementById("fuelLevel");
const cargoMass = document.getElementById("cargoMass");
const submit = document.getElementById("formSubmit");
const form = document.getElementById('launchForm');
const faultyItems = document.getElementById("faultyItems");
const pilotStatus = document.getElementById("pilotStatus");
const copilotStatus = document.getElementById("copilotStatus");
const fuelStatus = document.getElementById("fuelStatus");
const cargoStatus = document.getElementById("cargoStatus");
const launchStatus = document.getElementById("launchStatus");

window.addEventListener("load", function(){
   form.addEventListener("submit", function(submit){
      if(pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("All feilds are required");
      }

      if(isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true){
         alert("Enter valid information for each feild");
      }
      
      if(fuelLevel.value < 10000 || cargoMass.value > 10000){
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle Not Ready for Launch";
         launchStatus.style.color = "red";
         pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for Launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for Launch`;
      }else{
         launchStatus.innerHTML = "Shuttle is Ready for Launch";
         launchStatus.style.color = "green";
      }
      
      if(fuelLevel.value < 10000){
         fuelStatus.innerHTML = `Fuel level too low for launch`;
      }

      if(cargoMass.value > 10000){
         cargoStatus.innerHTML = `Cargo mass too high for launch`;
      }

      submit.preventDefault();
      });
  
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
         response.json().then(function(json){
         const missionTarget = document.getElementById("missionTarget");
         let targetIndex = Math.floor(Math.random() * 6);
         missionTarget.innerHTML = `<h3>Mission Destination</h3>
         <ol>
            <li>Name: ${json[targetIndex].name}</li>
            <li>Diameter: ${json[targetIndex].diameter}</li>
            <li>Star: ${json[targetIndex].star}</li>
            <li>Distance from Earth: ${json[targetIndex].distance}</li>
            <li>Number of Moons: ${json[targetIndex].moons}</li>
         </ol>
         <img src = ${json[targetIndex].image}>`


      });
   });
   
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
