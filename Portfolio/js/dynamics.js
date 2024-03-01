/////////////////////////////////////////

// Trying to get image to rotate
// 
// 
// 

/////////////////////////////////////////
console.log('ancillary script loaded')

/////////////////////////////////////////
const obj = document.getElementById("kaleid")
const snow = document.getElementById("snow")

/////////////////////////////////////////

let roteight = function(e){
    e.currentTarget.style.transform = "rotate(360deg)" 
    console.log('rotated')
}
function roteightOut(e){
    e.currentTarget.style.transform = "rotate(0deg)" 
    console.log('rotated back')
}

obj.addEventListener('mouseover', roteight)
obj.addEventListener('mouseout', roteightOut)

snow.addEventListener('mouseover', roteight)
snow.addEventListener('mouseout', roteightOut)

// for (let i=0; i<ig.length; i++){
//     ig[i].addEventListener('mouseover', roteight)
//     ig[i].addEventListener('mouseout', roteightOut)
// }

/////////////////////////////////////////
// onmouseover = (
// obj.onmouseover = function(e){
//     roteight(e)
// }