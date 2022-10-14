




randomlist = []

for (let x = 0;x <6 ;x++){
    randomlist += randomRGB()
}
document.getElementById("b1").style.backgrouncolor = "orange"
document.getElementById("b2").innerHTML = randomlist[1]
document.getElementById("b3").innerHTML = randomlist[2]
document.getElementById("b4").innerHTML = randomlist[3]
document.getElementById("b5").innerHTML = randomlist[4]
document.getElementById("b6").innerHTML = randomlist[5]
console.log(randomlist)
