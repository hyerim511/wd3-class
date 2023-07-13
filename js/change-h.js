var myForm = document.getElementById('myForm');
var myHeading = document.getElementById("myHeading");
myForm.addEventListener('submit', function(event){
    event.preventDefault();
    var inputFieldText = document.getElementById('headingText').value;
    myHeading.innerHTML = inputFieldText;
});

/*
var changeBtn = document.getElementById('changeBtn'); // get the button element
changeBtn.addEventListener('click', function(){
    myHeading.innerHTML = "New Text!";
})
*/