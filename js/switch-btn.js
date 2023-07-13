var switchON = false;
var switchBtnElement = document.getElementById('switch-btn');
function switchBtn() {
    if (switchON == false) {
        switchBtnElement.innerHTML = 'ON';
        switchBtnElement.style.backgroundColor = '#106832';
        switchON = true;
    } else {
        switchBtnElement.innerHTML = 'OFF';
        switchBtnElement.style.backgroundColor = '#681010';
        switchON = false;
    }
}