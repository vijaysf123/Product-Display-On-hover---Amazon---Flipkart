var fullImg = document.getElementById("imagebox");

function clickImg(smallImg){
    fullImg.src = smallImg.src;
}

let egHover = document.querySelectorAll(".egHoverActive")

for (const hover of egHover) {
    hover.addEventListener("mouseover" , function(){
        fullImg.src = hover.src;
    })
}