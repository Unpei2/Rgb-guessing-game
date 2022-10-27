let box0 = document.getElementById("b1")
let box1 = document.getElementById("b2")
let box2 = document.getElementById("b3")
let box3 = document.getElementById("b4")
let box4 = document.getElementById("b5")
let box5 = document.getElementById("b6")
let box6 = document.getElementById("b7")
let box7 = document.getElementById("b8")
let box8 = document.getElementById("b9")

let easy = document.getElementById("easy")
let hard = document.getElementById("hard")
let easydiv = document.getElementById("easy mode")
let harddiv = document.getElementById("hard mode")

let rgbdisplay = document.getElementById("rgbdisplay")
let newcolor = document.getElementById("newcolor")
let displaystreak = document.getElementById("streak")
let displayhighscore = document.getElementById("highscore")

let boxes = 9

let streak = 0
let easyhighscore = geteasyhighscore()
let hardhighscore = gethardhighscore()

box0.addEventListener("click", b0)
box1.addEventListener("click", b1)
box2.addEventListener("click", b2)
box3.addEventListener("click", b3)
box4.addEventListener("click", b4)
box5.addEventListener("click", b5)
box6.addEventListener("click", b6)
box7.addEventListener("click", b7)
box8.addEventListener("click", b8)
easy.addEventListener("click", easymode)
hard.addEventListener("click", hardmode)
newcolor.addEventListener("click", addnew)
function easymode(){
    boxes = 3
    streak = 0
    displaystreak.innerHTML = streak
    displayhighscore.innerHTML = easyhighscore 
    addnew()
}
function hardmode(){
    streak = 0
    displaystreak.innerHTML = streak
    boxes = 9
    displayhighscore.innerHTML = hardhighscore 
    addnew()
}
function b0 (){
    check(0)
}
function b1 (){
    check(1)
}
function b2 (){
    check(2)
}
function b3 (){
    check(3)
}
function b4 (){
    check(4)
}
function b5 (){
    check(5)
}
function b6 (){
    check(6)
}
function b7 (){
    check(7)
}
function b8 (){
    check(8)
}
select = randomInt(0, boxes)

function addnew (){
    randomlist = []
    randomstuff()
    select = randomInt(0, boxes)
    console.log(select)
    if (boxes === 3){
        box0.style.visibility = "visible";
        box1.style.visibility = "visible";
        box2.style.visibility = "visible";

        box3.style.visibility = "hidden";
        box4.style.visibility = "hidden";
        box5.style.visibility = "hidden";
        box6.style.visibility = "hidden";
        box7.style.visibility = "hidden";
        box8.style.visibility = "hidden";
        
    }   else {
        box0.style.visibility = "visible";
        box1.style.visibility = "visible";
        box2.style.visibility = "visible";
        box3.style.visibility = "visible";
        box4.style.visibility = "visible";
        box5.style.visibility = "visible";
        box6.style.visibility = "visible";
        box7.style.visibility = "visible";
        box8.style.visibility = "visible";
    }

}
randomlist = []
function randomstuff(){
for (x = 0; x < boxes ;x++){
    red = randomInt(0,256)
    green = randomInt(0,256)
    blue = randomInt(0,256)
    randomlist.push(randomintoarray(red,green,blue))
    
    }
    displaycolors()
}
randomstuff()
geteasyhighscore()
gethardhighscore()

function displaycolors(){
    let select = randomInt(0, boxes)
    rgbdisplay.innerHTML = `${randomlist[select].r}, ${randomlist[select].g}, ${randomlist[select].b}`
    if (boxes == 3){
        box0.style.backgroundColor = `rgb(${randomlist[0].r}, ${randomlist[0].g}, ${randomlist[0].b})`
        box1.style.backgroundColor = `rgb(${randomlist[1].r}, ${randomlist[1].g}, ${randomlist[1].b})`
        box2.style.backgroundColor = `rgb(${randomlist[2].r}, ${randomlist[2].g}, ${randomlist[2].b})`
    }   else {
        box0.style.backgroundColor = `rgb(${randomlist[0].r}, ${randomlist[0].g}, ${randomlist[0].b})`
        box1.style.backgroundColor = `rgb(${randomlist[1].r}, ${randomlist[1].g}, ${randomlist[1].b})`
        box2.style.backgroundColor = `rgb(${randomlist[2].r}, ${randomlist[2].g}, ${randomlist[2].b})`
        box3.style.backgroundColor = `rgb(${randomlist[3].r}, ${randomlist[3].g}, ${randomlist[3].b})`
        box4.style.backgroundColor = `rgb(${randomlist[4].r}, ${randomlist[4].g}, ${randomlist[4].b})`
        box5.style.backgroundColor = `rgb(${randomlist[5].r}, ${randomlist[5].g}, ${randomlist[5].b})`
        box6.style.backgroundColor = `rgb(${randomlist[6].r}, ${randomlist[6].g}, ${randomlist[6].b})`
        box7.style.backgroundColor = `rgb(${randomlist[7].r}, ${randomlist[7].g}, ${randomlist[7].b})`
        box8.style.backgroundColor = `rgb(${randomlist[8].r}, ${randomlist[8].g}, ${randomlist[8].b})`
    }
    
    
}
function check(boxnum){
    if (randomlist[boxnum].r == randomlist[select].r 
        && randomlist[boxnum].g == randomlist[select].g 
        && randomlist[boxnum].b == randomlist[select].b){
        
        alert("Correct")
        addnew()
        addhighscore(boxes)
        
    }   
    else {
        streak = 0
        if (boxnum == 0){
            box0.style.visibility = "hidden";
        }   else if (boxnum == 1){
            box1.style.visibility = "hidden";
        }   else if (boxnum == 2){
            box2.style.visibility = "hidden";
        }   else if (boxnum == 3){
            box3.style.visibility = "hidden";
        }   else if (boxnum == 4){
            box4.style.visibility = "hidden";
        }   else if (boxnum == 5){
            box5.style.visibility = "hidden";
        }   else if (boxnum == 6){
            box6.style.visibility = "hidden";
        }   else if (boxnum == 7){
            box7.style.visibility = "hidden";
        }   else if (boxnum == 8){
            box8.style.visibility = "hidden";
        }
    }
   
    displaystreak.innerHTML = streak
    savehighscore()
}
function addhighscore(boxnumbers){
    if (boxnumbers === 3){
        if (easyhighscore <= streak){
            
            easyhighscore++
            displayhighscore.innerHTML = easyhighscore 

        }   else {
            streak++
        }
    }   else if (boxnumbers === 9){
            if (hardhighscore <= streak){
                streak++
                hardhighscore++
                displayhighscore.innerHTML = hardhighscore 

            }  else {
                streak++
        } 
        }  
}
function randomintoarray(r, g, b){
    return {
        r, g, b
    }
}
function savehighscore(){
    seteasyhighscore = JSON.stringify(easyhighscore)
    localStorage.setItem("easyhighscore", seteasyhighscore)

    sethardhighscore = JSON.stringify(hardhighscore)
    localStorage.setItem("hardhighscore", sethardhighscore)

}
function geteasyhighscore(){
    let geteasyscore = localStorage.getItem("easyhighscore")
    displayhighscore.innerHTML = geteasyscore
    return JSON.parse(geteasyscore) ?? 0  
}
function gethardhighscore(){
    let gethardscore = localStorage.getItem("hardhighscore")
    displayhighscore.innerHTML = gethardscore
    return JSON.parse(gethardscore) ?? 0
}

// llllll
// (>)(<)--
// | ___ |
//  \ __/
// ~onii chan~

