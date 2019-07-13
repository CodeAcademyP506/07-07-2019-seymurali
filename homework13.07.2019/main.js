var flags = [
    {
        name:'az',
        colors:['#00a1de','#ed2939','#3f9c35'],
    },
    {
        name:'tr',
        colors:['#00a1de','#ed2939','#3f9c35'],
    },
]

var colors = document.getElementsByClassName("color1");

for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("dragstart", myDragStart)
}

var dropZones = document.querySelectorAll(".flag div");

for (let i = 0; i < dropZones.length; i++) {
    dropZones[i].addEventListener("dragenter", myDragEnter);
    dropZones[i].addEventListener("dragleave", myDragleave);
    dropZones[i].addEventListener("dragover", myDragOver);
    dropZones[i].addEventListener("drop", myDragDrop)
}

function myDragEnter(e) {
    e.preventDefault()
}

function myDragleave(e) {
    e.preventDefault()
}

function myDragOver(e) {
    e.preventDefault()
}


function myDragStart(event) {
    event.dataTransfer.setData("flag-color", event.target.style.backgroundColor);
}

function myDragDrop(e) {
    e.target.style.backgroundColor = e.dataTransfer.getData("flag-color");
    
    console.log(checkFlagColor(getFlagColors()));
}

function getFlagColors(){
    const colors = [];

    for(let i =0;i<dropZones.length;i++){
        colors.push(dropZones[i].style.backgroundColor);
    }

    return colors;
}

function checkFlagColor(currentFlagColors=[]){
    return flags.find((flag)=>{
        let isTrue = true;
        for(var i=0; i<currentFlagColors.length;i++){
            if(currentFlagColors[i] !== flag.colors[i]){
                isTrue=false;
                break;
            }
        }

        return isTrue;
    })
}