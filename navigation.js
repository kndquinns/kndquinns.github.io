const nav = document.querySelector(".primary-navigation")
const navToggle = document.querySelector(".mobile-nav-toggle")
/*if (nav.getAttribute("data-visible") === false) {
    
}*/

navToggle.addEventListener("click", () => {
    const visiblity = nav.getAttribute("data-visible")

    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true)
        //nav.querySelector(".active").classList.remove("active");
        //
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false)
       // nav.querySelector(".active").classList.add("active");
    }
})