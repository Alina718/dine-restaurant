var form=document.getElementById("form"),guestName=document.getElementById("name"),guestEmail=document.getElementById("email"),month=document.getElementById("month"),day=document.getElementById("day"),year=document.getElementById("year"),hour=document.getElementById("hour"),minutes=document.getElementById("minutes");function checkInputs(){var e=guestName.value,t=guestEmail.value.trim(),n=month.value.trim(),r=day.value.trim(),i=year.value.trim(),o=hour.value.trim(),m=minutes.value.trim();""===e&&setErrorFor(guestName,"This field is required"),""===t&&setErrorFor(guestEmail,"This field is required"),""===n&&setErrorFor(month,"This field is incomplete"),""===r&&setErrorFor(day,"This field is incomplete"),""===i&&setErrorFor(year,"This field is incomplete"),""===o&&setErrorFor(hour,"This field is incomplete"),""===m&&setErrorFor(minutes,"This field is incomplete")}function setErrorFor(e,t){var n=e.parentElement;n.querySelector("small").innerText=t,n.classList.add("error")}form.addEventListener("submit",(function(e){e.preventDefault(),checkInputs()}));var selected=document.querySelector(".option-selected"),optionsContainer=document.querySelector(".time-options-container"),chooseOption=document.querySelectorAll(".option");selected.addEventListener("click",(function(){optionsContainer.classList.toggle("active")})),chooseOption.forEach((function(e){e.addEventListener("click",(function(){selected.innerHTML=e.querySelector("label").innerHTML,optionsContainer.classList.remove("active")}))}));var decreaseBtn=document.getElementById("btn__decrease"),increaseBtn=document.getElementById("btn__increase"),number=document.getElementById("number"),newNumber=0;decreaseBtn.addEventListener("click",(function(){newNumber--,number.innerText=newNumber})),increaseBtn.addEventListener("click",(function(){newNumber++,number.innerText=newNumber}));