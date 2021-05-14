const divs = document.querySelectorAll(".d1");
const form = document.querySelector("form");
const butt = document.querySelector('button');
let height = window.innerHeight;
height*=0.4;

submission = ()=>{
    document.getElementById("success-msg").innerHTML="Thanks!! Your Response was Submitted";
    gsap.to("#form",{opacity:0, pointerEvents:"none", scale:0.8 });
    gsap.to("#success-msg",{fontSize:50, y:-height, delay:0.5});
}

loader = () =>{
    gsap.from(".logo",{opacity:0, y:-50, scale:1.1, duration:0.75, ease:"bounce.out(1,0.7)"});
    gsap.from(divs[0],{opacity:0, x:-50, delay:0.5});
    gsap.from(divs[1],{opacity:0, x:50, delay:0.75});
    gsap.from(divs[2],{opacity:0, x:-50, delay:1});
    gsap.from(divs[3],{opacity:0, x:50, delay:1.25});
    gsap.from("button",{opacity:0, rotate:360, scale:0.1, delay:1.5});
    gsap.from("#success-msg",{opacity:0, delay:1.75});
  
}

function responseSheet() {
    event.preventDefault();
    var field1 = $("#formName").val();
    var field2 = $("#formEmail").val();
    var check = document.getElementById("formOptions").value;
    var field4 = $("#formDetails").val();


    if(check == "none"){
        alert('Please Select one of the Options');
    }

    var clear = document.querySelectorAll(".form-control");
    for(let i =0; i<clear.length; i++){
        clear[i].value='';
    }
    $("#formService").val(0);
    
    $.ajax({
        url: "https://docs.google.com/forms/u/4/d/e/1FAIpQLSdY177LQH0EaU3NfHO4uol9iFWi2sOiQ67x3nmr1imDxNt4AA/formResponse",
        data: {"entry.1486081244": field1, "entry.1665382276": field2, "entry.1129764876": check, "entry.439389179": field4},
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
    var selection = document.getElementById("formOptions").value;

    switch(selection){
        case "Feedback":
            $("#formDetails").attr('placeholder',"Thank You for your Feedback.\nWe appreciate it very much ....");
            break;
        case "Complaint":
            $("#formDetails").attr('placeholder',"Sorry for the problems.\nExplain as much as you can ....");
            break;
        case "Help":
            $("#formDetails").attr('placeholder',"Give as many details of the vendor as much as possible .\nLike Phone No, Address Etc ....");
            break;
        case "none":
            $("#formDetails").attr('placeholder',"Please Select one of the Options ....");
            break;
    }
}

$('#formOptions').change(placeHolder);
