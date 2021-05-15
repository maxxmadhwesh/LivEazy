const unders = document.querySelector(".underscore");
const iconList = document.getElementsByClassName("icons");
const dataLine = document.querySelector(".dataLine");

const divs = document.querySelectorAll(".d1");
const form = document.querySelector("form");
const butt = document.querySelector('button');
let height = window.innerHeight;
let header = document.getElementById("formHeading");
height*=0.4;

//loader - Main
function iconPop(){
    let height = window.innerHeight;
    height*=0.3;
    gsap.fromTo(".logo", 1.5, { y:height, opacity:0}, {opacity:1, y:0, delay:0.75, ease:"elastic.out(1,0.75)"});
    gsap.fromTo(".icons",1.5, {y:50, scale:0, opacity:0}, {delay:2, y:0, scale:1, opacity:1, ease:"elastic.out(1,0.3)", stagger:0.3 });
    setTimeout(() => {unders.classList.add("underscore-final"); }, 1500);
}

//Onclick to form
function datalineText(text, links, service){
    let url = links;
    //using LocalStorage
    localStorage.setItem('serviceSelected',service);
    dataLine.addEventListener("click",(url) => {
        window.location.href = links;
    } );
    setTimeout(() => {dataLine.innerHTML = text;},250);
    gsap.to(".dataLine",{opacity:0, duration:0.2});
    gsap.to(".dataLine",{delay:0.2, duration:0.05, y:-80});
    gsap.to(".dataLine",{delay:0.5, opacity:1});
    gsap.to(".dataLine",{delay:0.25, y:80});
}

//Onclick - Dataline
function hoverBox(recieved){
    switch(recieved) {
        case iconList[0] : datalineText("Feeling Sick !<br> Get Medicines delivered Right to your home .<br>Click Here", "/../forms/form.html", "Medicine Delivery");
        break;

        case iconList[1] : datalineText("Need to travel !<br> Book a scheduled ride from a nearby Auto .<br>Click Here", "/../forms/form.html", "Book a Ride");
        break;

        case iconList[2] : datalineText("Having electricity Issues !<br> Need a certified electrician at home .<br>Click Here", "/../forms/form.html", "Electrician");
        break;

        case iconList[3] : datalineText("Water not Coming !<br> Need a certified Plumber at home .<br>Click Here", "/../forms/form.html", "Plumber");
        break;

        case iconList[4] : datalineText("Bike/Car not Working !<br> Need a certified mechanic at home .<br>Click Here", "/../forms/form.html", "Vehicle Repair");
        break;

        case iconList[5] : datalineText("Help us reach Local Businesses in your Locality in these tough times ! Click Here", "/../forms/formHelp.html", "avoiding");
        break;

    }
}

//Loader - main 1st
function changeUnder(){
    
    let p =document.getElementsByClassName("underscore");
    let check = window.innerWidth;
    if(check<1000){
        p[0].innerHTML="------------------------";
    }
    else
        p[0].innerHTML="-------------------------------------------------------------------------------------------------------";

    iconPop();
}





// Form started - 





//After Submission
submission = ()=>{
    document.getElementById("success-msg").innerHTML="Thanks!! Your Response was Submitted";
    gsap.to("#myForm",{opacity:0, pointerEvents:"none", scale:0.8 });
    gsap.to("#success-msg",{fontSize:50, y:-height, delay:0.5});
}

//Loader FormOne 
loader = () =>{
    selection = localStorage.getItem('serviceSelected') ;

    switch(selection){
        case "Book a Ride":
            header.innerHTML="Schedule a Ride : FORM";
            $("#formDetails").attr('placeholder',"Mention any important details regarding order... \nAlso add if you would like an Auto or a Car .");
            break;
        case "Electrician":
            header.innerHTML="Book an Electrician : FORM";
            $("#formDetails").attr('placeholder',"Mention any important details regarding order... \nTry to explain the problem if you can too .");
            break;
        case "Plumber":
            header.innerHTML="Book a Plumber : FORM";
            $("#formDetails").attr('placeholder',"Mention any important details regarding order... \nTry to explain the problem if you can too .");
            break;
        case "Medicine Delivery":
            header.innerHTML="Medicine at home : FORM";
            $("#formDetails").attr('placeholder',"Mention any important details regarding order... \nHope you get well soon . ");
            break;
        case "Vehicle Repair":
            header.innerHTML="Book a Mechanic : FORM";
            $("#formDetails").attr('placeholder',"Mention any important details regarding order... \nTry to write about the vehicle and model if you can . ");
            break;
    }

    gsap.fromTo(".logo", {opacity:0, y:-50, scale:1.1}, {opacity:1, y:0, scale:1, ease:"bounce.out(1,0.7)"});
    gsap.to("hr",{width:250});
    gsap.from(header,{y:-50});
    gsap.fromTo(divs[0], {opacity:0, x:-50}, {opacity:1, x:0, delay:0.5});
    gsap.fromTo(divs[1], {opacity:0, x:50}, {opacity:1, x:0, delay:0.75});
    gsap.fromTo(divs[2], {opacity:0, x:-50}, {opacity:1, x:0, delay:1});
    gsap.fromTo(divs[3], {opacity:0, x:50}, {opacity:1, delay:1.25, x:0});
    gsap.fromTo(divs[4], {opacity:0}, {opacity:1, delay:1.5});
    gsap.fromTo("button", {opacity:0, rotate:0, scale:0.1}, {opacity:1, rotate:360, scale:1, delay:1.75});
    gsap.fromTo("#success-msg", {opacity:0}, {opacity:1, delay:2}); 
}

//Onsubmit - FormOne
function postToGoogle() {
    event.preventDefault();
    var field1 = $("#formName").val();
    var field2 = $("#formAdd").val();
    var field3 = $("#formNumber").val();
    var number = "+91" + field3;
    var check = localStorage.getItem("serviceSelected") ;

    var field4 = $("#formDetails").val();

    if(field3<999999999 || field3>9999999999){
        alert('Please Enter your phone no correctly');
    }

    var clear = document.querySelectorAll(".form-control");
    for(let i =0; i<clear.length; i++){
        clear[i].value='';
    }
    
    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSekRtSGbwqODNGh1nKcZkya7B3Vn_wHoso58JisfVk0qJm5TA/formResponse?",
        data: {"entry.1443348041": field1, "entry.1232639318": field2, "entry.1298294968": number, "entry.1656048954": check, "entry.1905648699": field4},
        type: "POST",
        dataType: "xml",
        success: function(d)
        {
        },
        error: function(x, y, z)
            {
             submission();   
            }
    });
}

//PlaceHolder Change in 1st function
placeHolder = ()=>{
    
}
