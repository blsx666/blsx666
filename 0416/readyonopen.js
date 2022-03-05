$(document).ready(function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "toc.txt", true);
    xhttp.send();

    var items = document.querySelectorAll('.circleNavi a');
    for (var i = 0, l = items.length; i < l; i++) {
        items[i].style.left = (50 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
        items[i].style.top = (50 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
    }
    document.querySelector('.navbtn').onclick = function(e) {
        e.preventDefault();
        document.querySelector('.circleNavi').classList.toggle('open');
    }
})(jQuery);

// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("demo").innerHTML =
//                 this.responseText;
//         }
//     };
//     xhttp.open("GET", "ajax_info.txt", true);
//     xhttp.send();
// }