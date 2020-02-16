
// About Me show/hide button
function btn() {
    var btn = document.getElementById("show-all");
    if (btn.style.display === "none") {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

//Sidebar Navigation Hamburger menu
function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    }

function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
   