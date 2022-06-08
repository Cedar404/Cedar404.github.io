openMenu = function () {
    document.getElementById("side-nav").style.display = "block";
    document.getElementById("burgerIcon").style.display = "none";
}

// Close NavBar on Phone
closeMenu = function (element) {
    element.parentElement.style.display = "none";
    document.getElementById("burgerIcon").style.display = "block";
}