
///////////////////////////////////////////////////////////////

console.log('ancillary script loaded')

let h1 = document.getElementsByTagName('h1')
// let h2 = document.getElementsByTagName('h2')[0]
let boxes = document.getElementsByClassName('boxes')
let bttn = document.getElementById('submit')

console.log( h1)

////////////////////////////////////////////////////////////////
//  color change functions
////////////////////////////////////////////////////////////////
function newColor(e){
    e.currentTarget.style.backgroundColor =  "rgb(235, 235, 87) "  
    console.log('function registered')
}
function oldColor(e){
    e.currentTarget.style.backgroundColor =  ""
}
function clickColor(e){
    e.currentTarget.style.backgroundColor =  "rgb(113, 214, 109)"
}

bttn.addEventListener('mouseover', newColor)
bttn.addEventListener('mouseout', oldColor)
bttn.addEventListener('mousedown', clickColor)

bttn.onclick = function(){console.log('Form submitted')}

///////////////////////////////////////////////////////////////
// rotation functions
///////////////////////////////////////////////////////////////
function roteight(e){
    e.currentTarget.style.transform = "rotate(0.05turn)" 
    console.log('rotated')
}
function roteightOut(e){
    e.currentTarget.style.transform = "rotate(0turn)" 
    console.log('rotated back')
}

for (let i=0; i<boxes.length; i++){
    boxes[i].addEventListener('mouseover', roteight)
    boxes[i].addEventListener('mouseout', roteightOut)
}

///////////////////////////////////////////////////////////////
//  width change functions
///////////////////////////////////////////////////////////////
function widthIncrease(e){
    e.currentTarget.style.width =  "100px" 
    e.currentTarget.style.height =  "100px" 
}
function widthDecrease(e){
    e.currentTarget.style.width =  "20px" 
    e.currentTarget.style.height =  "20px" 
}

// bttn.addEventListener('mouseover', widthIncrease)
// bttn.addEventListener('mouseout', widthDecrease)