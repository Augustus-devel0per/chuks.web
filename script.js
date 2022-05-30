//NAVIGATION BAR
//NAVIGATION BAR
//NAVIGATION BAR
function openNav() {
    var mySidenav = document.getElementById("mySidenav");
    mySidenav.style.width = "210px";
}

function closeNav() {
    var mySidenav = document.getElementById("mySidenav");
    mySidenav.style.width = "0";
}

// CUSTOMIZED CURSOR
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
    );
});

//TOP NAV
const navUL = document.getElementById("navUl");
const navLi = navUL.getElementsByClassName("navLi");

for (let i = 0; i < navLi.length; i++) {
    navLi[i].addEventListener("click", function () {
        const active = document.getElementsByClassName("current");
        active[0].className = active[0].className.replace(" current", "");
        this.className += " current";
    });
}

// REVEAL ELEMENTS ON SCROLL
window.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

//TEXT EFFECT
const carouselText = [
    { text: "Software Developer...", color: "#10d8ac" },
    { text: "Graphics Designer...", color: "orange" },
    { text: "Freelancer...", color: "pink" },
];

$(document).ready(async function () {
    carousel(carouselText, "#feature-text");
});

async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
        await waitForMs(delay);
        $(eleRef).append(letters[i]);
        i++;
    }
    return;
}

async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while (letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        $(eleRef).html(letters.join(""));
    }
}

async function carousel(carouselList, eleRef) {
    var i = 0;
    while (true) {
        updateFontColor(eleRef, carouselList[i].color);
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++;
        if (i >= carouselList.length) {
            i = 0;
        }
    }
}

function updateFontColor(eleRef, color) {
    $(eleRef).css("color", color);
}

function waitForMs(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

//CHANGE IMAGE

var myImage = document.getElementById("mainImage");
var imageArray = [ "ejike.jpg"];
var imageIndex = 0;

function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}
setInterval(() => {
    changeImage();
}, 2000);

//COUNTER
const counters = document.querySelectorAll(".count");
const speed = 200;

counters.forEach((counter) => {
    const updateCount = () => {
        const target = parseInt(+counter.getAttribute("data-target"));
        const count = parseInt(+counter.innerText);
        const increment = Math.trunc(target / speed);
        console.log(increment);

        if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 1);
        } else {
            count.innerText = target;
        }
    };
    updateCount();
});
