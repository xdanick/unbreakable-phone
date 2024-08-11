
var btnn = document.getElementById("link");

let btn = document.querySelector('.btn'); 

if (btn) {
    btn.onclick = function() {
        btn.textContent = "Куплено";
    }
}
if (btnn) {
    btnn.onclick = function() {
        window.open('https://www.youtube.com/shorts/SXHMnicI6Pg', '_blank');
    }
}
