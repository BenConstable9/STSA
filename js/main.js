window.onscroll = function() {adjust_nav()};

function adjust_nav() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").classList.add("header_collapsed");
    } else {
        document.getElementById("navbar").classList.remove("header_collapsed");
    }
}

function open_nav() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("menu_burger").style.display = "none";
    document.getElementById("menu_close").style.display = "block";
}

function close_nav() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("menu_burger").style.display = "block";
    document.getElementById("menu_close").style.display = "none";
}

document.getElementById("menu_burger").onclick = function() {open_nav()};
document.getElementById("menu_close").onclick = function() {close_nav()};