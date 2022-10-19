let box0 = document.getElementById("b1")
let box1 = document.getElementById("b2")
let box2= document.getElementById("b3")
let box3 = document.getElementById("b4")
let box4 = document.getElementById("b5")
let box5 = document.getElementById("b6")
let rgbdisplay = document.getElementById("rgbdisplay")

box0.addEventListener("click", b1)
box1.addEventListener("click", b2)
box2.addEventListener("click", b3)
box3.addEventListener("click", b4)
box4.addEventListener("click", b5)
box5.addEventListener("click", b6)

function b1 (){
    console.log("Pressed b1")
}
function b2 (){
    console.log("Pressed b2")
}
function b3 (){
    console.log("Pressed b3")
}
function b4 (){
    console.log("Pressed b4")
}
function b5 (){
    console.log("Pressed b5")
}
function b6 (){
    console.log("Pressed b6")
}

randomlist = []
function randomstuff(){
for (x = 0;x < 6 ;x++){
    red = randomInt(0,256)
    green = randomInt(0,256)
    blue = randomInt(0,256)
    randomlist.push(randomintoarray(red,green,blue))
    
    }
    displaycolors()
}
randomstuff()
console.log(randomlist)
function displaycolors(){
    let select = randomInt(0, 5)
    console.log(select)
    rgbdisplay.innerHTML = `${randomlist[select].r}, ${randomlist[select].b}, ${randomlist[select].g}`
    box0.style.backgroundColor = `rgb(${randomlist[0].r}, ${randomlist[0].g}, ${randomlist[0].b})`
    box1.style.backgroundColor = `rgb(${randomlist[1].r}, ${randomlist[1].g}, ${randomlist[1].b})`
    box2.style.backgroundColor = `rgb(${randomlist[2].r}, ${randomlist[2].g}, ${randomlist[2].b})`
    box3.style.backgroundColor = `rgb(${randomlist[3].r}, ${randomlist[3].g}, ${randomlist[3].b})`
    box4.style.backgroundColor = `rgb(${randomlist[4].r}, ${randomlist[4].g}, ${randomlist[4].b})`
    box5.style.backgroundColor = `rgb(${randomlist[5].r}, ${randomlist[5].g}, ${randomlist[5].b})`

    
}

function randomintoarray(r, g, b){
    return {
        r, g, b
    }
}


//  llllll
// (>)(<)--
// | ___ |
//  \ __/
// ~onii chan~

