const divs = document.querySelectorAll(".d1");
const form = document.querySelector("form");
const butt = document.querySelector('button');
let height = window.innerHeight;
height*=0.4;

submission = ()=>{
    document.getElementById("success-msg").innerHTML="Thanks!! Your Response was Submitted";
    gsap.to("#myForm",{opacity:0, pointerEvents:"none", scale:0.8 });
    gsap.to("#success-msg",{fontSize:50, y:-height, delay:0.5});
}

loader = () =>{
    gsap.from(".logo",{opacity:0, y:-50, scale:1.1, duration:0.75, ease:"bounce.out(1,0.7)"});
    gsap.from(divs[0],{opacity:0, x:-50, delay:0.5});
    gsap.from(divs[1],{opacity:0, x:50, delay:0.75});
    gsap.from(divs[2],{opacity:0, x:-50, delay:1});
    gsap.from(divs[3],{opacity:0, x:50, delay:1.25});
    gsap.from(divs[4],{opacity:0, delay:1.5});
    gsap.from("button",{opacity:0, rotate:360, scale:0.1, delay:1.75});
    gsap.from("#success-msg",{opacity:0, delay:2}); 
  
}
function postToGoogle() {
    event.preventDefault();
    var field1 = $("#formName").val();
    var field2 = $("#formAdd").val();
    var field3 = $("#formNumber").val();
    var number = "+91" + field3;
    var check = $("#formService option:selected").text();
    var field4 = $("#formDetails").val();

    if(field3<999999999 || field3>9999999999){
        alert('Please Enter your phone no correctly');
    }
    else if(check == "Select One-"){
        alert('Please Select one of the services');
    }

    var clear = document.querySelectorAll(".form-control");
    for(let i =0; i<clear.length; i++){
        clear[i].value='';
    }
    $("#formService").val(0);
    
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

placeHolder = ()=>{
    let selection = $("#formService option:selected").text();
    let ph = document.getElementById("formDetails");
    console.log(selection);

    switch(selection){
        case "Book a Ride":
            $("#formDetails").attr('placeholder',"Mention any important details regarding order... \nAlso add if you would like an Auto or a Car .");
            break;
        case "Electrician":
            $("#formDetails").attr('placeholder',"Mention any important details regarding order... \nTry to explain the problem if you can too .");
            break;
        case "Plumber":
            $("#formDetails").attr('placeholder',"Mention any important details regarding order... \nTry to explain the problem if you can too .");
            break;
        case "Medicine Delivery":
            $("#formDetails").attr('placeholder',"Mention any important details regarding order... \nHope you get well soon . ");
            break;
        case "Vehicle Repair":
            $("#formDetails").attr('placeholder',"Mention any important details regarding order... \nTry to write about the vehicle and model if you can . ");
            break;
    }
}

$('#formService').change(placeHolder);
