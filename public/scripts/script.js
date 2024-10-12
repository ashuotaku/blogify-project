function createPop(){
    document.querySelector("#create").style.display = "flex";
}
function removePop(){
    document.querySelector("#create").style.display = "none";
}
function stopPop(event){
    event.stopPropagation();
}
function removeEdit(){
    document.querySelector("#edit").style.display = "none";
}
function showEdit(){
    document.querySelector("#edit").style.display = "flex";
}


// 6355910831
