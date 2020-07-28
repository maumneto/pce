function return_site(){
    document.location.href = "https://maumneto.github.io/mauricioneto/";
}

function send_mail(){
    ConfirmBoxEmail();
}

function ButtonMouseOver(element){
    element.style.color = "#4169E1";
    element.style.backgroundColor = "#E0FFFF";
}

function ButtonMouseOut(element){
    element.style.color = "#000000";
    element.style.backgroundColor = "#ffffff";
}

function BigImgOver(element){
    element.style.height = "48px";
    element.style.width = "48px";
}

function BigImgOut(element){
    element.style.height = "30px";
    element.style.width = "30px";
}

function ConfirmBoxEmail(){
    var return_value;
    return_value = confirm("Você pretende mandar um E-mail?");
    
    if(return_value == true){
        document.location.href = "mailto:maumneto@gmail.com";
    } else {
        return;
    }
}
