/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const length = document.getElementById("length");
const volume = document.getElementById("voluem");
const mass = document.getElementById("mass");
const display = document.getElementById("display");
const convershoin = document.getElementById("convershoin");

convershoin.addEventListener("click", function() {
    length.innerHTML = `${display.value} meters = ${(display.value * 3.28084).toFixed(3)} feet | ${display.value} feet = ${(display.value / 3.28084).toFixed(3)} meters`;
    volume.innerHTML = `${display.value} liters = ${(display.value * 0.264).toFixed(3)} gallons | ${display.value} gallons = ${(display.value / 0.264).toFixed(3)} liters`;
    mass.innerHTML = `${display.value} kilograms = ${(display.value * 2.204).toFixed(3)} pounds | ${display.value} pounds = ${(display.value / 2.204).toFixed(3)} kilograms`;
});