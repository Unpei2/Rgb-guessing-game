let box1 = document.getElementById("b1")
let box2 = document.getElementById("b2")
let box3 = document.getElementById("b3")
let box4 = document.getElementById("b4")
let box5 = document.getElementById("b5")
let box6 = document.getElementById("b6")


randomlist = []
for (let x = 0;x < 6 ;x++){
    
    randomintoarray(randomRGB())
    console.log(randomlist)
    console.log(randomintoarray())

}

function randomintoarray(rgb){
    return {
        rgb
    }
}




