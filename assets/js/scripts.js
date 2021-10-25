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

// completed_tasks
function quantity() {
    let confirmQuestion = confirm("Are you sure you want to change the number of tasks?");
    let openTasks = document.querySelector(".open_tasks .num").innerHTML;
    let completedTasks = document.querySelector(".completed_tasks .num").innerHTML;
    if (confirmQuestion == true && openTasks > 0) {
        document.querySelector(".open_tasks .num").innerHTML = parseInt(openTasks, 10) - 1;
        document.querySelector(".completed_tasks .num").innerHTML = parseInt(completedTasks, 10) + 1;
    } else {
        alert('Аll tasks are closed, keep it up!')
    }
}

// uploadedFiles DOM
const uploadedFiles = [
    'assets/img/img.png',
    'assets/img/img.png',
    'assets/img/img.png',
    'assets/img/img.png'
];
uploadedFiles.forEach(e => document.querySelector(".tab_pane .description .img_box").innerHTML += '<li><img src="' + e + '" alt="img"></li>');

// uploadedFiles count
var uploadedFilesElements = document.querySelectorAll('.tab_pane .description .img_box li') || [];
uploadedFilesElements = [].slice.apply(uploadedFilesElements);
uploadedFilesElements.forEach(function (e, i) {
    e.addEventListener('click', function () {
        document.querySelector(".sidebar .menu .menu_item .counter").innerHTML = i;
    })
});








