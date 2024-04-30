

let showoneimg = function () {
    var input = document.getElementById("img");
    var output = document.getElementById("images");
    output.style.display = "block";
    if (output.innerHTML == "") {
        for (let i = 0; i < 1; i++) {
            output.innerHTML += '<li>' + input.files.item(i).name + '</li>';
        }
    } else {
        output.innerHTML = "";
        for (let i = 0; i < 1; i++) {
            output.innerHTML += '<li>' + input.files.item(i).name + '</li>';
        }
    }

}

let show = function () {
    var thumb = document.getElementById("thumbnail");
    var output = document.getElementById("imgs");
    let warning = document.querySelector(".warn");
    output.style.display = "block";
    let x = document.querySelectorAll("#imgs li").length;
    output.innerHTML = "";
    for (let i = 0; i < thumb.files.length; i++) {
        if (x < 4 && thumb.files.length <5) {
            if (warning.style.display == "inline-block") {
                warning.style.display = "none";
            } 
            output.innerHTML += '<li>' + thumb.files.item(i).name + '</li>';
        }
        else{
            warning.style.display="inline-block";
            
        }

    }
}

let showfile = function (){
    var input = document.getElementById("files");
    var output = document.getElementById("softfiles");
    output.style.display = "block";
    let x = document.querySelectorAll("#softfiles li").length;
    if (output.innerHTML == "") {
        for (let i = 0; i < 1; i++) {
            output.innerHTML += '<li>' + input.files.item(i).name + '</li>';
        }
    } else {
        output.innerHTML = "";
        for (let i = 0; i < 1; i++) {
            output.innerHTML += '<li>' + input.files.item(i).name + '</li>';
        }
    }
}


