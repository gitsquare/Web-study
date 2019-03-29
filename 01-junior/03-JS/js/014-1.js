console.log(1)
var oBox = document.getElementById('box');
function toRed(){
	oBox.style.background = 'red';
}
oBox.onclick = toRed;
document.addEventListener('DOMContentLoaded',function(){
	console.log('DOMContentLoaded');
})
