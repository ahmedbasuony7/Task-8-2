

console.log('   ######## task 2   ########');

let imgselector = document.getElementById('img');
let clonedHolder = document.getElementById('clonedHolder');
let bullets  = document.querySelectorAll('.bullet');


//  make clone from main image and style its position in the page
let colnedImag = imgselector.cloneNode();
colnedImag.style.cssText = "position: absolute; left:70%"

console.log(colnedImag);

setTimeout(() => {
    clonedHolder.append(colnedImag)

    //  style bullets by looping using higher order function reduce
    console.log(bullets); //  bullets is collection of list cant make style for it dieectly 

    bullets.forEach((ele) => {
        ele.style.cssText = "color:gray;  opacity:0,4;"
    })
}, 2000);










