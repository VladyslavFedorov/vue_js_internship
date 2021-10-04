// mobile menu
function menuOpen() {
    document.querySelector(".sidebar").classList.toggle("active");
    document.querySelector(".mobile_menu_btn").classList.toggle("active");
}

// tabs
function tab(evt) {
    evt.preventDefault()
    let i, tablinks;
    tablinks = document.getElementsByClassName("tab_link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
}

