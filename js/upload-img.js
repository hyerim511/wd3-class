var uploadBtn = document.getElementById('img-upload-btn');
var fileInput = document.getElementById('fileInput');
var imgContainer = document.getElementById('img-container');

uploadBtn.addEventListener('click', replaceImage);
// uploadBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     return replaceImage(e)
// });

function deleteImage() {
    let img = imgContainer.querySelector('img');

    if (img) {
        // if the imgContainer element has an img element inside remove it
        img.remove();
    } else {
        // the imgContainer element does NOT have an img element inside
    }
}

function getFirstFile() {
    // the input field is set to 'file' type
    // this causes the input field to have an array of files
    // here we reference whichever file is in index 0
    let file = fileInput.files[0]; 
    return file
}

function createImgElement() {
    let img = document.createElement('img');
    return img
}

function addNewImage(e) {
    let img = createImgElement();
    img.src = e.target.result;
    imgContainer.appendChild(img);
}

function replaceImage(e) {

    e.preventDefault();

    deleteImage(); // delete existing image, if there is one

    let file = getFirstFile();

    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = addNewImage;
    }
    
}