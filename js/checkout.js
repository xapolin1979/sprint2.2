
// Exercise 6
function validate(event) {
	event.preventDefault();
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
    let fLastN=document.getElementById("fLastN");
	let fAddress=document.getElementById("fAddress");
	let fPassword=document.getElementById("fPassword");
	let fPhone =document.getElementById("fPhone");
	let formulario=document.querySelector(".form");  
	
	// Get the error elements


	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || fName.value.length<=3 || /\d/.test(fName.value)){
		error++;
		fName.classList.add('is-invalid');
		fName.classList.remove('is-valid');
	}
	else{
		fName.classList.add('is-valid');
		fName.classList.remove('is-invalid');
	}

	if(fLastN.value == "" || fLastN.value.length<=3 || /\d/.test(fLastN.value)){
		error++;
		fLastN.classList.add('is-invalid');
		fLastN.classList.remove('is-valid');
	}
	else{
		fLastN.classList.add('is-valid');
		fLastN.classList.remove('is-invalid');

	}

	if(fEmail.value == "" || !fEmail.value.includes('@') ){
		error++;
		fEmail.classList.add('is-invalid');
		fEmail.classList.remove('is-valid');	
	}
	else{
		fEmail.classList.add('is-valid');
		fEmail.classList.remove('is-invalid');

	}
	if(fAddress.value == "" || fAddress.value.length<=3 ){
		error++;
		fAddress.classList.add('is-invalid');
		fAddress.classList.remove('is-valid');
	}else{
		fAddress.classList.add('is-valid');
		fAddress.classList.remove('is-invalid');

	}
	if(fPassword.value == "" || fPassword.value.length<=3 || !/\d/.test(fPassword.value) || !/[a-zA-Z]/.test(fPassword.value) ){
		error++;
		error++;
		fPassword.classList.add('is-invalid');
		fPassword.classList.remove('is-valid');
	}
	else{
		fPassword.classList.add('is-valid');
		fPassword.classList.remove('is-invalid');

	}
	if(fPhone.value == ""  || !/\d/.test(fPhone.value) || /[a-zA-Z]/.test(fPhone.value)){
		error++;
		fPhone.classList.add('is-invalid');
		fPhone.classList.remove('is-valid');
	}
	else{
		fPhone.classList.add('is-valid');
		fPhone.classList.remove('is-invalid');

	}
	if(error>0){
	 	 
		    console.log('hay algun error');
	
		
	}else{

		console.log('todo ok');
	    formulario.submit();
	}


}

