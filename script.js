//Cache the DOM
var button = document.getElementById("button")

var nume = document.getElementById("nume")

var prenume = document.getElementById("prenume")

var asteptari = document.getElementById("asteptari")

var img = document.querySelector("img")

var an = document.getElementById("anNastere")

const d = new Date()
var year = d.getFullYear()


//Ad event listener to button
button.addEventListener("click", altaViata)
an.addEventListener("mouseover", displayAge)

//Define function
function displayAge() {
	an.innerHTML = year - an.innerHTML
}

function altaViata() {
	 
	nume.innerHTML = "Software Engineer"

	prenume.innerHTML = "Google"

	asteptari.innerHTML = "<ul><li>Sa termin facultatea fara restante</li><li>Libertate financiara</li></ul>"

		
	img.src= "images/dog.jpg"
	img.style.opacity = "70%"
	img.style.border = "5px solid black"
	img.style.width = "500px"
	img.style.height = "400px"

}
