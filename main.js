

/*Nav Bar active*/
let navA = document.querySelectorAll(".links a");
for (let i = 0; i < navA.length; i++) {
    navA[i].onclick = function() {
        for (let j = 0; j < navA.length; j++) {
            navA[j].classList.remove("active");
        }
        navA[i].classList.add("active");
    }
}

/*Settings toggle in out*/
let settingsButton = document.getElementById("settingsBtn");

settingsButton.onclick = function() {
    document.querySelector(".settings").classList.toggle("opened");
}

/*Color switch*/
const colorsLi = document.querySelectorAll(".optionBox li");
colorsLi.forEach(li => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty("--orange", e.target.dataset.color);
    })
})

/*Design part*/
let buildImg = document.querySelectorAll(".builder .img img");
let buildText = document.querySelectorAll(".builder .items .item");
let buildIcon = document.querySelectorAll(".builder .items i");
for (let i = 0; i < buildText.length; i++) {
    buildText[i].onclick = function() {
        for (let j = 0; j < buildText.length; j++) {
            buildText[j].classList.remove("active");
            buildImg[j].classList.remove("visible");
            buildIcon[j].classList.remove("active");
        }
        buildText[i].classList.add("active");
        buildImg[i].classList.add("visible");
        buildIcon[i].classList.add("active");
    }
}

/*Scroll to top icon*/
function Top() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
let scrolll = document.querySelector(".scrollUp i");

addEventListener('scroll', (e) => {
    if (window.scrollY >= 760) {
        scrolll.style.display = "inline";

    } else {
        scrolll.style.display = "none";

    }
    if (window.scrollY >= 800) {
        scrolll.style.opacity = 1;

    } else {
        scrolll.style.opacity = 0;

    }
})

/*Elements hover*/
let boxes = document.querySelectorAll(".elements .container .box");
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseenter', (e) => {
        boxes.forEach(box => {
            box.classList.add("disabled");
        })
        boxes[i].classList.remove("disabled");
    })
    boxes[i].addEventListener('mouseleave', (e) => {
        boxes.forEach(box => {
            box.classList.add("disabled");
        })
    })
}

/*slide reviews*/
let rightBtn = document.querySelector(".reviews .left");
let leftBtn = document.querySelector(".reviews .right");

rightBtn.onclick = function() {
    document.querySelector(".move1").classList.toggle("hidden");
    document.querySelector(".move2").classList.toggle("hidden");
}
leftBtn.onclick = function() {
        document.querySelector(".move1").classList.toggle("hidden");
        document.querySelector(".move2").classList.toggle("hidden");

    }
    /*******************PAGE START*****************/

if (window.scrollY == 0) {
    document.querySelector(".landing .letter").style.cssText = "opacity: 1; top:50%;";
    scrolll.style.display = "none";
    setTimeout(function() {
        document.querySelector(".landing .text").style.opacity = "1";
    }, 1000);
    document.querySelector(".landing .props").style.cssText = "left:50%;opacity:1";
}
addEventListener('scroll', (e) => {
    //update section
    if (window.scrollY >= 380) {
        document.querySelector(".update h1").style.opacity = "1";
        setTimeout(function() {
            document.querySelector(".update h1 span").style.opacity = "1";
        }, 500);
    } else {
        document.querySelector(".update h1").style.opacity = "0";
    }

    //show and hide landing
    if (window.scrollY >= 550) {
        document.querySelector(".landing .letter").style.cssText = "opacity: 0; top:100%;";
        setTimeout(function() {
            document.querySelector(".landing .text").style.opacity = "0";
        }, 1000);
        document.querySelector(".landing .props").style.cssText = "left:-30%;opacity:0";
    } else {
        document.querySelector(".landing .letter").style.cssText = "opacity: 1; top:50%;";
        setTimeout(function() {
            document.querySelector(".landing .text").style.opacity = "1";
        }, 1000);
        document.querySelector(".landing .props").style.cssText = "left:50%;opacity:1";
    }
    //show and update cards
    if (window.scrollY >= 680) {
        document.querySelector(".update .container").style.cssText = "transform:TranslateX(7%) TranslateY(0); opacity:1;";
    } else {
        document.querySelector(".update .container").style.cssText = "transform:TranslateX(7%) TranslateY(50%); opacity:0;"
    }
    if (window.scrollY >= 960) {
        document.querySelector(".features .text h3 span").style.cssText = "transform:translateX(0); opacity:1";
    } else {
        document.querySelector(".features .text h3 span").style.cssText = "transform:translateX(-150px); opacity:0";
    }
    if (window.scrollY >= 1000) {
        document.querySelector(".features .text h1").style.cssText = "transform:translateX(0); opacity:1";
    } else {
        document.querySelector(".features .text h1").style.cssText = "transform:translateX(200px); opacity:0";
    }
    if (window.scrollY >= 1400) {

        document.querySelector(".features .photos .t").style.cssText = "transform:translateY(50px)";
        document.querySelector(".features .photos .h").style.cssText = "transform:translateY(50px)";
        document.querySelector(".features .photos .f").style.cssText = "transform:translateY(40px)";
        document.querySelector(".features .photos .v").style.cssText = "transform:translateY(40px)";
        document.querySelector(".features .photos .s").style.cssText = "transform:translateY(60px)";
        document.querySelector(".features .photos .x").style.cssText = "transform:translateY(50px)";
    } else {

        document.querySelector(".features .photos .t").style.cssText = "transform:translateY(0)";
        document.querySelector(".features .photos .h").style.cssText = "transform:translateY(0)";
        document.querySelector(".features .photos .f").style.cssText = "transform:translateY(0)";
        document.querySelector(".features .photos .v").style.cssText = "transform:translateY(0)";
        document.querySelector(".features .photos .s").style.cssText = "transform:translateY(0)";
        document.querySelector(".features .photos .x").style.cssText = "transform:translateY(0)";
    }
    if (window.scrollY >= 1450) {

        document.querySelector(".features .photos .t").style.cssText = "transform:translateY(70px)";
        document.querySelector(".features .photos .h").style.cssText = "transform:translateY(70px)";
        document.querySelector(".features .photos .f").style.cssText = "transform:translateY(60px)";
        document.querySelector(".features .photos .v").style.cssText = "transform:translateY(60px)";
        document.querySelector(".features .photos .s").style.cssText = "transform:translateY(90px)";
        document.querySelector(".features .photos .x").style.cssText = "transform:translateY(70px)";
    } else {

        document.querySelector(".features .photos .t").style.cssText = "transform:translateY(0)";
        document.querySelector(".features .photos .h").style.cssText = "transform:translateY(0)";
        document.querySelector(".features .photos .f").style.cssText = "transform:translateY(0)";
        document.querySelector(".features .photos .v").style.cssText = "transform:translateY(0)";
        document.querySelector(".features .photos .s").style.cssText = "transform:translateY(0)";
        document.querySelector(".features .photos .x").style.cssText = "transform:translateY(0)";
    }


    //DEMOS
    if (window.scrollY >= 3000) {
        document.querySelector(".demos .text h2").style.cssText = "transform:scale(1)";
        document.querySelector(".demos .text h5").style.cssText = "transform:scale(1)";
    }
    if (window.scrollY >= 3300) {
        document.querySelector(".demos .container").style.cssText = "opacity:1;transform:translateY(0);";
    }
    //Installer
    if (window.scrollY >= 5400) {
        document.querySelector(".installer .text").style.opacity = "1";
    } else {
        document.querySelector(".installer .text").style.opacity = "0";
    }
    if (window.scrollY >= 5700) {
        document.querySelector(".installer .imgs .oo").style.cssText = "left:250px;opacity:1;";
        document.querySelector(".installer .imgs .tt").style.cssText = "left:900px;opacity:1;";
    } else {
        document.querySelector(".installer .imgs .oo").style.cssText = "left:-100px;opacity:0;";
        document.querySelector(".installer .imgs .tt").style.cssText = "left:1500px;opacity:0;";
    }
    if (window.scrollY >= 5900) {
        document.querySelector(".installer .imgs .thth").style.cssText = "left:700px;opacity:1;"
    } else {
        document.querySelector(".installer .imgs .thth").style.cssText = "left:1200px;opacity:0;";
    }


})