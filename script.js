var btn = document.getElementById("actionbtn");


btn.addEventListener("click", function(){

    var container = document.getElementById("container");

    if(container.style.display === "none"){
        container.style.display = "block";
    }else{
        container.style.display = "none";
    }


})