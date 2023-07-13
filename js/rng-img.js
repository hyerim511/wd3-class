var imgElement = document.getElementById('rngImg');
var chngImgBtn = document.getElementById('change-img-btn');
var urlString = 'https://unsplash.it/500/300';

function reloadImg() {
    let src = imgElement.src;
    console.log("reloadImg() was called");
    imgElement.src = src.split('?')[0] + '?dummy=' + new Date().getTime();
}