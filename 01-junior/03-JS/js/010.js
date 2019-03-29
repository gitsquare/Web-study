var oBox = document.getElementById('box');
function tochange(){
	oBox.style.width = '200px';
	oBox.style.height = '200px';
	oBox.style.backgroundColor = '#00f';
}
oBox.onclick = tochange;
