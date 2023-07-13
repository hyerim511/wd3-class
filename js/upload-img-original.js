var uploadBtn = document.getElementById('img-upload-btn');
var fileInput = document.getElementById('fileInput');
var imgContainer = document.getElementById('img-container');

function deleteImage() {
    let img = imgContainer.querySelector('img');

    if (img) {
        // if the imgContainer element has an img element inside remove it
        img.remove();
    } else {
        // the imgContainer element does NOT have an img element inside
    }
}

uploadBtn.addEventListener('click', function(event){
    event.preventDefault();
    deleteImage();

    let file = fileInput.files[0]; 

    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e){
            let img = document.createElement('img');
            img.src = e.target.result;
            imgContainer.appendChild(img);
        };
    }

    reader.readAsDataURL(file);
});