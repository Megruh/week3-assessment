console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form has been submitted successfully");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


const imgCompliment = document.querySelector('#cat-image')
const catCompliment = (event) => {
	alert("You're almost as cool as Filch")
  }
  imgCompliment.addEventListener("mouseover", catCompliment)