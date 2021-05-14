const unders = document.querySelector(".underscore");
const iconList = document.getElementsByClassName("icons");
const dataLine = document.querySelector(".dataLine");

function iconPop(){
    let height = window.innerHeight;
    height*=0.3;
    gsap.from(".logo",{y:height, delay:0.75, duration:1.5, ease:"elastic.out(1,0.75)"})
    gsap.from(".icons",{delay:2, duration:1.5, y:50, scale:0, opacity:0, ease:"elastic.out(1,0.3)", stagger:0.3});
    setTimeout(() => {unders.classList.add("underscore-final"); }, 1500);
}

function datalineText(text,links){
    let url = links;
    dataLine.addEventListener("click",(url) => {window.location.href = links;} );
    setTimeout(() => {dataLine.innerHTML = text;},250);
    gsap.to(".dataLine",{opacity:0, duration:0.2});
    gsap.to(".dataLine",{delay:0.2, duration:0.05, y:-80});
    gsap.to(".dataLine",{delay:0.5, opacity:1});
    gsap.to(".dataLine",{delay:0.25, y:80});
}

function hoverBox(recieved){
    switch(recieved) {
        case iconList[0] : datalineText("Feeling Sick !<br> Get Medicines delivered Right to your home .<br>Click Here", "/../forms/form.html");
        break;

        case iconList[1] : datalineText("Need to travel !<br> Book a scheduled ride from a nearby Auto .<br>Click Here", "/../forms/form.html");
        break;

        case iconList[2] : datalineText("Having electricity Issues !<br> Need a certified electrician at home .<br>Click Here", "/../forms/form.html");
        break;

        case iconList[3] : datalineText("Water not Coming !<br> Need a certified Plumber at home .<br>Click Here", "/../forms/form.html");
        break;

        case iconList[4] : datalineText("Bike/Car not Working !<br> Need a certified mechanic at home .<br>Click Here", "/../forms/form.html");
        break;

        case iconList[5] : datalineText("Help us reach Local Businesses in your Locality in these tough times ! Click Here", "/../forms/formHelp.html");
        break;

    }
}
function changeUnder(){
    iconPop();
    let p =document.getElementsByClassName("underscore");
    let check = window.innerWidth;
    if(check<1000){
        p[0].innerHTML="------------------------";
    }
    else
    p[0].innerHTML="-------------------------------------------------------------------------------------------------------";
}


